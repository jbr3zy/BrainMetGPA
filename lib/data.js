// A global JSON array containing question/answer values for GPA calculation
var queryData = [
	{
		"category":"Lung Cancer",
		"choices":["Age:","KPS:","Extra-cranial met.:","Number of met.:"],
		"questions":
			[
				{"question":"What is the patient's age?","choices":[
					{"text":"> 60 years","value":0},
					{"text":"50 - 60 years","value":0.5},
					{"text":"< 50 years","value":1}
				]},
				{"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
					{"text":"< 70","value":0},
					{"text":"70 - 80","value":0.5},
					{"text":"90 - 100","value":1}
				]},
				{"question":"Does the patient have extra-cranial metastases?","choices":[
					{"text":"Yes","value":0},
					{"text":"No","value":1}
				]},
				{"question":"How many brain metastases does the patient have?","choices":[
					{"text":"> 3","value":0},
					{"text":"2 - 3","value":0.5},
					{"text":"1","value":1}
				]}
			],
		"data":
			[ 
				{"low":0, "high":1, "value":3, "range":"1.6 - 8.9"},
				{"low":1.5, "high":2, "value":5.5, "range":"2.2 - 14.3"},
				{"low":2.5, "high":3, "value":9.4, "range":"4.1 - 20.6"},
				{"low":3.5, "high":4, "value":14.8, "range":"7.4 - 28.5"}
			]
	},
	{
		"category":"Melanoma",
		"choices":["KPS:","Number of met.:"],
		"questions":
			[
				{"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
					{"text":"< 70","value":0},
					{"text":"70 - 80","value":1},
					{"text":"90 - 100","value":2}
				]},
				{"question":"How many brain metastases does the patient have?","choices":[
					{"text":"> 3","value":0},
					{"text":"2 - 3","value":1},
					{"text":"1","value":2}
				]}
			],
		"data":
			[ 
				{"low":0, "high":1, "value":3.4, "range":"1.6 - 6.0"},
				{"low":1.5, "high":2, "value":4.7, "range":"2.5 - 11.0"},
				{"low":2.5, "high":3, "value":8.8, "range":"4.6 - 14.6"},
				{"low":3.5, "high":4, "value":13.2, "range":"7.1 - 25.8"}
			]
	},
	{
		"category":"Breast Cancer",
		"choices":["Age:","KPS:","Tumor subtype:"],
		"questions":
			[
				{"question":"What is the patient's age?","choices":[
					{"text":"greater than or equal to 60 years","value":0},
					{"text":"less than 60 years","value":0.5}
				]},
				{"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
					{"text":"< 50","value":0},
					{"text":"60","value":0.5},
					{"text":"70 - 80","value":1},
					{"text":"90 - 100","value":1.5}
				]},
				{"question":"What is the patient's tumor subtype?","choices":[
					{"text":"Basal <span class='note'>triple-negative</span>","value":0},
					{"text":"Luminal A <span class='note'>ER/PR-positive, HER2-negative</span>","value":1},
					{"text":"HER2 <span class='note'>HER2-positive, ER/PR-negative</span>","value":1.5},
					{"text":"Luminal B <span class='note'>triple-positive</span>","value":2.0}
				]}
			],
		"data":
			[ 
				{"low":0, "high":1, "value":3.4, "range":"1.4 - 7.3"},
				{"low":1.5, "high":2, "value":7.7, "range":"3.0 - 15.2"},
				{"low":2.5, "high":3, "value":15.1, "range":"5.9 - 27.4"},
				{"low":3.5, "high":4, "value":25.3, "range":"12.8 - 45.8"}
			]
	},
	{
		"category":"Renal Cell Carcinoma",
		"choices":["KPS:","Number of met.:"],
		"questions":
			[
				{"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
					{"text":"< 70","value":0},
					{"text":"70 - 80","value":1},
					{"text":"90 - 100","value":2}
				]},
				{"question":"How many brain metastases does the patient have?","choices":[
					{"text":"> 3","value":0},
					{"text":"2 - 3","value":1},
					{"text":"1","value":2}
				]}
			],
		"data":
			[ 
				{"low":0, "high":1, "value":3.3, "range":"1.3 - 7.5"},
				{"low":1.5, "high":2, "value":7.3, "range":"2.9 - 15.8"},
				{"low":2.5, "high":3, "value":11.3, "range":"5.0 - 18.9"},
				{"low":3.5, "high":4, "value":14.8, "range":"6.6 - 32.2"}
			]
	},
	{
		"category":"Gastro-intestinal Cancer",
		"choices":["KPS:"],
		"questions":
			[
				{"question":"What is the patient's Karnofsky Performance Score (KPS)","choices":[
					{"text":"< 70","value":0},
					{"text":"70","value":1},
					{"text":"80","value":2},
					{"text":"90","value":3},
					{"text":"100","value":4}
				]}
			],
		"data":
			[ 
				{"low":0, "high":1, "value":3.1, "range":"1.8 - 6.2"},
				{"low":2, "high":2, "value":4.4, "range":"2.4 - 10.4"},
				{"low":3, "high":3, "value":6.9, "range":"4.1 - 15.2"},
				{"low":4, "high":4, "value":13.5, "range":"9.9 - 27.1"}
			]
	}
];
