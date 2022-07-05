var config_data = `
{
  "title":"Scouting 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022casj",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
       "Cargo Missed": {
        "code":"al",
        "title": "Cargo Missed",
        "type":"counter"
      },
      "Intake During Auto": {
        "code":"ac",
        "title": "Picked up more cargo? Butterdusted?",
        "type":"bool"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
       "Cargo Missed": {
        "code":"tl",
        "title": "Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Died/Tipped": {
        "code":"d",
        "title": "Died/Tipped?",
        "type":"bool"
      },
      "Seconds Disabled": {
        "code":"sec",
        "title":"Seconds Disabled",
        "type":"counter"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "a":"Attempted but failed<br>",
          "x":"Not attempted"
        },
        "defaultValue":"x"
      },
      "Time Left for Cimb": {
        "code":"be",
        "title": "Time Left for Hangar",
        "type":"text"
      },
      "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"ds",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "uno":"1<br>",
          "dos":"2<br>",
          "tres":"3<br>",
          "cuatro":"4<br>",
          "cinco":"5<br>",
          "seis":"6<br>",
          "siete":"7<br>",
          "ocho":"8<br>",
          "nueve":"9<br>",
          "diez":"10<br>",
          "na":"Not Assessed"          
        },
        "defaultValue":"x"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense?",
        "type":"radio",
        "choices":{
          "uno":"1<br>",
          "dos":"2<br>",
          "tres":"3<br>",
          "cuatro":"4<br>",
          "cinco":"5<br>",
          "seis":"6<br>",
          "siete":"7<br>",
          "ocho":"8<br>",
          "nueve":"9<br>",
          "diez":"10<br>",
          "na":"Not Assessed<br>",
          "x" :"Not attempted"
        },
        "defaultValue":"na"
      },
       "Strategically held enemy cargo during match?": {
        "code":"hc",
        "title": "Enemy Balls",
        "type":"bool"
      },
      "Strategically stalled opposing alliance defense?": {
        "code":"oap",
        "title": "Good D",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Confidence Rating": {
        "code":"cnf",
        "title": "Confidence Rating",
        "type":"radio",
        "choices":{
          "v":"Very Confident<br>",
          "a":"Average<br>",
          "n":"Not Confident"
      },
       "defaultValue":"a"
    }
    }
  }
}`;
