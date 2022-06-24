var config_data = `
{
  "title":"Scouting 2022",
  "page_title":"Rapid React",
  "elements":{
    "pit": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
      },
      "Drivetrain":{
        "code":"dt",
        "type":"radio",
        "choices":{
          "sw":"Swerve<br>",
          "wcd":"WCD<br>",
          "cus":"Custom<br>",
          "kit":"Kit"
        },
        "number_of_wheels":{
          "code":"wh",
          "title":"Number of Wheels"
          "type":"counter"
          },
    }
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022casj",
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
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
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
    "matchscouting": {
      "Taxi During Auto": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Auto Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Auto Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
       "Auto Cargo Missed": {
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
      "Telop Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Telop Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
       "Telop Cargo Missed": {
        "code":"tl",
        "title": "Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
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
    },
    "specific": {
      
    }
    }
  }
}`;
