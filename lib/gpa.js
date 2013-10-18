//------- Globals -------//

var gaDict = null;
var queryList;
var queryCount = 0;
var GPAVal = 0;
var scrolling = false;
var choices = [];

// detect interaction type for user agent
var eventType = ("ontouchstart" in document.documentElement ? "touchend" : "mouseup");


//------- Scripts -------//

$(document).ready(function() {
    // initialize the question/answer values
    include("lib/data.js");
    resetButtons();

    // if we're simply starting over, skip the welcome
    if (window.location.hash=="#start") {
      $("#welcome-container").hide();
      $("#questionnaire-container").fadeIn("slow", function() {
        startBinding();
      });
    } else {
      welcomeBinding();
    }
    return;
});


//------- Functions -------//

// init listeners on welcome page buttons
function welcomeBinding() {
    $("#start-button").bind(eventType, function() {
      if (!scrolling) {
        $("#welcome-container").hide();
        $("#questionnaire-container").fadeIn("slow", function() {
            startBinding();
        });
      }
      scrolling = false;
    });
    $("#detail-button").bind(eventType, function() {
      if (!scrolling) {
        $("#intro-container").hide();
        $("#back-button").show();
        $("#detail-container").fadeIn("slow");
      }
      scrolling = false;
    });
    $("#back-button").bind(eventType, function() {
      if (!scrolling) {
        $("#detail-container, #back-button").hide();
        $("#intro-container").fadeIn("slow");
      }
      scrolling = false;
    });
    return;
}

// init listeners on diagnosis buttons
function startBinding() {
    resetButtons();
    $(".choice").bind(eventType, function() {
      if (!scrolling) {
        queryList = queryData[$(this).data("value")];
        gaDict = {
            'hitType': 'event',
            'eventCategory': 'diagnosis_choice',
            'eventAction': 'click',
            'eventLabel': queryList.category
        };
        prepareQuery();
      }
      scrolling = false;
    });
    return;
}

// prepare the next question and answer buttons
function prepareQuery() {
    var $button;
    var query = queryList.questions[queryCount];
    $("#choice-container").empty();
    $("#question-container").text(query.question);
    $.each(query.choices, function() {
      $button = $("#choice-template").clone();
      $button.append(this.text);
      $button.data("value", this.value);
      $("#choice-container").append($button);             
    });

    $("#over-button").show();
    $("#questionnaire-container").hide().fadeIn("slow", function() {
        resetButtons();
        resetBinders();
        sendBeacon();
    });
    return;
}

// init listeners to set global scrolling flag if buttons are target of touchmove
// (since we shouldn't react) and init click/touch listeners for toolbar buttons
function resetButtons() {
    $(".button").unbind();
    $(".button").bind("touchmove", function() {
      scrolling = true;
    });
    $("#over-button").bind(eventType, function() {
      if (!scrolling) {
        showLoading();
        window.location.href = window.location.pathname + "#start";
        window.location.reload();
      }
    scrolling = false;
    });
    $("#home-button").bind(eventType, function() {
      if (!scrolling) {
        showLoading();
        window.location.hash="";
        window.location.reload();
      }
    scrolling = false;
    })
    return;
}

// init listeners on newly prepared answer buttons
function resetBinders() {
    $(".choice").bind(eventType, function() {
        if (!scrolling) {
	    // save chosen value
            GPAVal += $(this).data("value");
            choices.push($(this).text()+"</td><td><b>"+$(this).data("value")+"</b>");

            // build a beacon for GA
            gaDict = {
              'hitType': 'event',        
              'eventCategory': queryList.choices[queryCount],
              'eventAction': queryList.category,
              'eventLabel': $(this).text(),
              'eventValue': $(this).data("value")
            };

            // if we're done with questions, run calculations
            queryCount += 1;
            if (queryCount < queryList.questions.length) {
                prepareQuery();
            } else {
                evaluateGPA();
            }
        }
        scrolling = false;
    });
    return;
}

// calculate GPA values and display results page
function evaluateGPA() {
    var MSTVal;
    var MSTRange;
    var itemizedHTML = "<tr><td><b>Diagnosis:</b></td><td>"+queryList.category+"</td><td></td></tr>";
    var data = queryList.data;

    // find corresponding MST for total GPA based on category data
    $.each(data, function() {
      if (GPAVal >= this.low && GPAVal <= this.high) {
        MSTVal = this.value;
        MSTRange = this.range;
      }
    });
    $("#result").text(MSTVal);
    $("#range").text(MSTRange);

    for (var idx=0; idx<choices.length; idx++) {
      itemizedHTML += "<tr><td><b>"+queryList.choices[idx] + "</b></td><td class='block-text'>" + choices[idx] + "</td></tr>";
    }
    itemizedHTML += "<tr><td class='no-border'></td><td class='no-border'><b>Total GPA:</b></td>" +
      "<td class='no-border'><b>"+GPAVal+"</b></td></tr>";

    $("#itemized-container").html(itemizedHTML);
    $("#questionnaire-container").hide();

    $("#result-container").fadeIn("slow", function() {
      sendBeacon();
      // delay final beacons to avoid GA rate limiting for fast users
      setTimeout(function(){
          ga('send', {
            'hitType': 'event',        
            'eventCategory': 'GPA_value',
            'eventAction': 'complete',        
            'eventLabel': GPAVal.toString()
          });
      },2000);
      setTimeout(function(){
          ga('send', {
            'hitType': 'event',        
            'eventCategory': 'MST_value',
            'eventAction': 'complete',        
            'eventLabel': MSTVal.toString()
          });
      },1000);
    });
    return;
}


//------- Helpers -------//

// add a data library to the DOM
function include(file) {
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
  return;
}

// send a GA value tracking dictionary to Google
function sendBeacon() {
    if (gaDict!=null) {
      ga('send', gaDict);
    }
    return;
}

// show a loading GIF if things are moving slowly
function showLoading() {
    window.setTimeout(function() {
      $("#loading").show();
    }, 900);
    return;
}
