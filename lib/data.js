// A global JSON array containing question/answer values for GPA calculation
var queryData = [
    {
        "category":"Lung Cancer<br />Non-Adenocarcinoma",
        "choices":["Age:","KPS:","Extra-cranial met.:","Number of met.:","User demo:"],
        "questions":
            [
                {"question":"What is the patient's age?","choices":[
                    {"text":"&ge; 70 years","value":0},
                    {"text":"< 70 years","value":0.5}
                ]},
                {"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
                    {"text":"&le; 70","value":0},
                    {"text":"80","value":0.5},
                    {"text":"90 - 100","value":1}
                ]},
                {"question":"Does the patient have extra-cranial metastases?","choices":[
                    {"text":"Yes","value":0},
                    {"text":"No","value":1}
                ]},
                {"question":"How many brain metastases does the patient have?","choices":[
                    {"text":"> 4","value":0},
                    {"text":"1 - 4","value":0.5}
                ]},
                {"question":"Who's using this calculator? Please select the option that most closely describes you.","choices":[
                    {"text":"Patient / Family","value":0},
                    {"text":"Radiation Oncologist","value":0},
                    {"text":"Medical Oncologist","value":0},
                    {"text":"Neurosurgeon","value":0},
                    {"text":"Primary Care Provider","value":0},
                    {"text":"Other Physician","value":0},
                    {"text":"Resident in training","value":0},
                    {"text":"Medical Student","value":0},
                    {"text":"Other","value":0}
                ]}
            ],
        "data":
            [
                {"low":0, "high":1, "value":5.3, "range":"1.9 - 11.1"},
                {"low":1.5, "high":2, "value":9.8, "range":"3.9 - 20.3"},
                {"low":2.5, "high":3, "value":12.8, "range":"7.0 - 30.1"}
            ]
    },
    {
        "category":"Melanoma",
        "choices":["Age:","KPS:","Extra-cranial met.:","Number of met.:","Gene status:","User demo:"],
        "questions":
            [
                {"question":"What is the patient's age?","choices":[
                    {"text":"&ge; 70 years","value":0},
                    {"text":"< 70 years","value":0.5}
                ]},
                {"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
                    {"text":"&le; 70","value":0},
                    {"text":"80","value":0.5},
                    {"text":"90 - 100","value":1}
                ]},
                {"question":"Does the patient have extra-cranial metastases?","choices":[
                    {"text":"Yes","value":0},
                    {"text":"No","value":1}
                ]},
                {"question":"How many brain metastases does the patient have?","choices":[
                    {"text":"1","value":1},
                    {"text":"2 - 4","value":0.5},
                    {"text":"> 4","value":0},
                ]},
                {"question":"Please select the corresponding gene status.","choices":[
                    {"text":"BRAF neg/unknown","value":0},
                    {"text":"BRAF positive","value":0.5}
                ]},
                {"question":"Who's using this calculator? Please select the option that most closely describes you.","choices":[
                    {"text":"Patient / Family","value":0},
                    {"text":"Radiation Oncologist","value":0},
                    {"text":"Medical Oncologist","value":0},
                    {"text":"Neurosurgeon","value":0},
                    {"text":"Primary Care Provider","value":0},
                    {"text":"Other Physician","value":0},
                    {"text":"Resident in training","value":0},
                    {"text":"Medical Student","value":0},
                    {"text":"Other","value":0}
                ]}
            ],
        "data":
            [
                {"low":0, "high":1, "value":4.9, "range":"2.3 - 10.7"},
                {"low":1.5, "high":2, "value":8.3, "range":"3.9 - 18.2"},
                {"low":2.5, "high":3, "value":15.8, "range":"8.2 - 49.3"},
                {"low":3.5, "high":4, "value":34.1, "range":"15.1 - "}
            ]
    },
    {
        "category":"Breast Cancer",
        "choices":["Age:","KPS:","Tumor subtype:","Number of met.:","Extra-cranial met.:","User demo:"],
        "questions":
            [
                {"question":"What is the patient's age?","choices":[
                    {"text":"greater than or equal to 60 years","value":0},
                    {"text":"less than 60 years","value":0.5}
                ]},
                {"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
                    {"text":"<= 60","value":0},
                    {"text":"70 - 80","value":0.5},
                    {"text":"90 - 100","value":1}
                ]},
                {"question":"What is the patient's tumor subtype?","choices":[
                    {"text":"Basal <span class='note'>triple-negative</span>","value":0},
                    {"text":"Luminal A <span class='note'>ER/PR-positive, HER2-negative</span>","value":0.5},
                    {"text":"HER2 <span class='note'>HER2-positive, ER/PR-negative</span>","value":1.5},
                    {"text":"Luminal B <span class='note'>triple-positive</span>","value":1.5}
                ]},
                {"question":"How many brain metastases does the patient have?","choices":[
                    {"text":"1","value":0.5},
                    {"text":"> 1","value":0}
                ]},
                {"question":"Does the patient have extra-cranial metastases?","choices":[
                    {"text":"Yes","value":0},
                    {"text":"No","value":0.5}
                ]},
                {"question":"Who's using this calculator? Please select the option that most closely describes you.","choices":[
                    {"text":"Patient / Family","value":0},
                    {"text":"Radiation Oncologist","value":0},
                    {"text":"Medical Oncologist","value":0},
                    {"text":"Neurosurgeon","value":0},
                    {"text":"Primary Care Provider","value":0},
                    {"text":"Other Physician","value":0},
                    {"text":"Resident in training","value":0},
                    {"text":"Medical Student","value":0},
                    {"text":"Other","value":0}
                ]}
            ],
        "data":
            [
                {"low":0, "high":1, "value":6, "range":"2.5 - 12.3"},
                {"low":1.5, "high":2, "value":12.9, "range":"5.6 - 27"},
                {"low":2.5, "high":3, "value":23.5, "range":"11.1 - 47"},
                {"low":3.5, "high":4, "value":36.3, "range":"18.5 - 78.1"}
            ]
    },
    {
        "category":"Renal Cell Carcinoma",
        "choices":["KPS:","Extra-cranial met.:","Hgb count:","Number of met.:","User demo:"],
        "questions":
            [
                {"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
                    {"text":"&lt; 80","value":0},
                    {"text":"80","value":1},
                    {"text":"90 - 100","value":2}
                ]},
                {"question":"Does the patient have extra-cranial metastases?","choices":[
                    {"text":"Yes","value":0},
                    {"text":"No","value":0.5}
                ]},
                {"question":"What is the patient's hemoglobin count?","choices":[
                    {"text":"&le; 11.1 g/dL","value":0},
                    {"text":"11.2 - 12.5 g/dL or unknown","value":0.5},
                    {"text":"&ge; 12.6 g/dL","value":1}
                ]},
                {"question":"How many brain metastases does the patient have?","choices":[
                    {"text":"1 - 4","value":0.5},
                    {"text":"&ge; 5","value":0}
                ]},
                {"question":"Who's using this calculator? Please select the option that most closely describes you.","choices":[
                    {"text":"Patient / Family","value":0},
                    {"text":"Radiation Oncologist","value":0},
                    {"text":"Medical Oncologist","value":0},
                    {"text":"Neurosurgeon","value":0},
                    {"text":"Primary Care Provider","value":0},
                    {"text":"Other Physician","value":0},
                    {"text":"Resident in training","value":0},
                    {"text":"Medical Student","value":0},
                    {"text":"Other","value":0}
                ]}
            ],
        "data":
            [
                {"low":0, "high":1, "value":4, "range":"2 - 8"},
                {"low":1.5, "high":2, "value":12, "range":"5 - 24"},
                {"low":2.5, "high":3, "value":17, "range":"8 - 36"},
                {"low":3.5, "high":4, "value":35, "range":"13 - 61"}
            ]
    },
    {
        "category":"Gastro-intestinal Cancer",
        "choices":["KPS:","Age:","Number of met.:","Extra-cranial met.:","User demo:"],
        "questions":
            [
                {"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
                    {"text":"< 80","value":0},
                    {"text":"80","value":1},
                    {"text":"90 - 100","value":2}
                ]},
                {"question":"What is the patient's age?","choices":[
                    {"text":"greater than or equal to 60 years","value":0},
                    {"text":"less than 60 years","value":0.5}
                ]},
                {"question":"How many brain metastases does the patient have?","choices":[
                    {"text":"1","value":1},
                    {"text":"2 - 3","value":0.5},
                    {"text":"> 3","value":0}
                ]},
                {"question":"Does the patient have extra-cranial metastases?","choices":[
                    {"text":"Yes","value":0},
                    {"text":"No","value":0.5}
                ]},
                {"question":"Who's using this calculator? Please select the option that most closely describes you.","choices":[
                    {"text":"Patient / Family","value":0},
                    {"text":"Radiation Oncologist","value":0},
                    {"text":"Medical Oncologist","value":0},
                    {"text":"Neurosurgeon","value":0},
                    {"text":"Primary Care Provider","value":0},
                    {"text":"Other Physician","value":0},
                    {"text":"Resident in training","value":0},
                    {"text":"Medical Student","value":0},
                    {"text":"Other","value":0}
                ]}
            ],
        "data":
            [
                {"low":0, "high":1, "value":3.4, "range":"1.6 - 8.3"},
                {"low":1.5, "high":2, "value":6.5, "range":"2.7 - 16.9"},
                {"low":2.5, "high":3, "value":10.8, "range":"4.2 - 21.4"},
                {"low":3.5, "high":4, "value":17, "range":"8.8 - 29.7"}
            ]
    },
    {
        "category":"Lung Cancer<br />Adenocarcinoma",
        "choices":["Age:","KPS:","Extra-cranial met.:","Number of met.:","Gene status:","User demo:"],
        "questions":
            [
                {"question":"What is the patient's age?","choices":[
                    {"text":"&ge; 70 years","value":0},
                    {"text":"< 70 years","value":0.5}
                ]},
                {"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
                    {"text":"&le; 70","value":0},
                    {"text":"80","value":0.5},
                    {"text":"90 - 100","value":1}
                ]},
                {"question":"Does the patient have extra-cranial metastases?","choices":[
                    {"text":"Yes","value":0},
                    {"text":"No","value":1}
                ]},
                {"question":"How many brain metastases does the patient have?","choices":[
                    {"text":"> 4","value":0},
                    {"text":"1 - 4","value":0.5}
                ]},
                {"question":"Please select the corresponding gene status.","choices":[
                    {"text":"EGFR or ALK positive","value":1},
                    {"text":"EGFR and ALK neg/unknown","value":0}
                ]},
                {"question":"Who's using this calculator? Please select the option that most closely describes you.","choices":[
                    {"text":"Patient / Family","value":0},
                    {"text":"Radiation Oncologist","value":0},
                    {"text":"Medical Oncologist","value":0},
                    {"text":"Neurosurgeon","value":0},
                    {"text":"Primary Care Provider","value":0},
                    {"text":"Other Physician","value":0},
                    {"text":"Resident in training","value":0},
                    {"text":"Medical Student","value":0},
                    {"text":"Other","value":0}
                ]}
            ],
        "data":
            [
                {"low":0, "high":1, "value":6.9, "range":"2.6 - 15.3"},
                {"low":1.5, "high":2, "value":13.7, "range":"5.5 - 24.6"},
                {"low":2.5, "high":3, "value":26.5, "range":"10.7 - 53.8"},
                {"low":3.5, "high":4, "value":46.8, "range":"25.8 - "}
            ]
    }
];
