var gaDict = null;
var queryList = null;
var queryCount = 0;
var GPAVal = 0;
var scrolling = false;
var choices = [];

var eventType = ("ontouchstart" in document.documentElement ? "touchend" : "mouseup");

var lungQuestion = {
    "question": "For lung cancer, select the corresponding type.",
    "choices":[
        {"text": "Adenocarcinoma", "value": 5},
        {"text": "Non-Adenocarcinoma", "value": 0}
    ]
};

$(document).ready(function() {
    resetButtons();
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

function startBinding() {
    resetButtons();
    $(".choice").bind(eventType, function() {
        if (!scrolling) {
            var categoryValue = $(this).data("value");
            if (categoryValue || categoryValue == 0) {
                queryList = queryData[categoryValue];
                gaDict = {
                    'hitType': 'event',
                    'eventCategory': 'diagnosis_choice',
                    'eventAction': 'click',
                    'eventLabel': queryList.category
                };
                prepareQuery();
            } else {
                prepareQuery(lungQuestion);
            }
        }
        scrolling = false;
    });
    return;
}

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

function prepareQuery(query) {
    var $button;

    if (!query) {
        query = queryList.questions[queryCount];
    }

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
        if (queryList) {
            resetButtons();
            resetBinders();
        } else {
            startBinding();
        }
        sendBeacon();
    });
    return;
}

function sendBeacon() {
    if (gaDict!=null) {
        ga('send', gaDict);
    }
    return;
}

function showLoading() {
    window.setTimeout(function() {
        $("#loading").show();
    }, 900);
}

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

function resetBinders() {
    $(".choice").bind(eventType, function() {
    if (!scrolling) {
            GPAVal += $(this).data("value");
            choices.push($(this).text()+"</td><td><b>"+$(this).data("value")+"</b>");
            gaDict = {
              'hitType': 'event',
              'eventCategory': queryList.choices[queryCount],
              'eventAction': queryList.category,
              'eventLabel': $(this).text()
            };
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

function evaluateGPA() {
    var MSTVal;
    var MSTRange;
    var itemizedHTML = "<tr><td><b>Diagnosis:</b></td><td>"+queryList.category+"</td><td></td></tr>";
    var data = queryList.data;
    $.each(data, function() {
        if (GPAVal >= this.low && GPAVal <= this.high) {
            MSTVal = this.value;
            MSTRange = this.range;
        }
    });
    $("#result").text(MSTVal);
    $("#range").text(MSTRange);
    for (var idx=0; idx<choices.length-1; idx++) {
        itemizedHTML += "<tr><td><b>"+queryList.choices[idx] + "</b></td><td>" + choices[idx] + "</td></tr>";
    }
    itemizedHTML += "<tr><td class='no-border'></td><td class='no-border'><b>Total GPA:</b></td>" +
        "<td class='no-border'><b>"+GPAVal+"</b></td></tr>";
    $("#itemized-container").html(itemizedHTML);
    $("#questionnaire-container").hide();
    $("#result-container").fadeIn("slow", function() {
        sendBeacon();
        setTimeout(function(){
              ga('send', {
                'hitType': 'event',
                'eventCategory': 'GPA_value',
                'eventAction': queryList.category,
                'eventLabel': GPAVal.toString()
              });
        },2000);
        setTimeout(function(){
              ga('send', {
                'hitType': 'event',
                'eventCategory': 'MST_value',
                'eventAction': queryList.category,
                'eventLabel': MSTVal.toString()
              });
        },1000);
    });
    return;
}
