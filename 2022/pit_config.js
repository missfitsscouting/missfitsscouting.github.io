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
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
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
        "title": "Intake During Auto",
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
      "Shot Map": {
        "code":"ss",
        "title": "Shoot Map",
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
    "pit_gen" : {
      "Robot Length (in)": {
        "code":"prl",
        "type":"text"
      },
      "Robot Width (in)": {
        "code":"prw",
        "type":"text"
      },
      "Robot Height (in)": {
        "code":"prh",
        "type":"text"
      },
      "Robot Weight (lb)": {
        "code":"pw",
        "type":"text"
      },
      "Robot Speed (ft/s)": {
        "code":"ps",
        "type":"text"
      },
      "Programming Language": {
        "code":"pl",
        "type":"text"
      }
    },
    "pit_auto" : {
      "Starting Location":{
        "code":"sl",
        "type":"text"
      },
      "Taxi?":{
        "code":"pa",
        "type":"bool"
      },
      "Lower hub balls":{
        "code":"lhb",
        "type":"counter"
      },
      "Upper hub balls":{
        "code":"uhb",
        "type":"counter"
      },
      "Auto description":{
        "code":"ad",
        "type":"text"
      }
    },
    "pit_teleop" : {
      "Cargo Capacity":{
        "code":"cc",
        "type":"counter"
      },
      "Cycle time (s)":{
        "code":"pa",
        "type":"text"
      },
      "Shot destination":{
        "code":"sd",
        "type":"radio",
        "choices":{
          "upper hub":"1<br>",
          "lower hub":"2<br>",
          "both":"2<br>"
        },
        "defaultValue":"x"
      },
      "Shot location":{
        "code":"sl",
        "type":"text"
      },
      "Reliability (x/2)":{
        "code":"rr",
        "type":"counter"
      }
    },
    "pit_shooting" : {
      "Min Distance":{
        "code":"min",
        "type":"text"
      },
      "Max Distance":{
        "code":"max",
        "type":"text"
      }
    },
    "pit_climb" : {
      "Time Taken (s)":{
        "code":"ctt",
        "type":"text"
      },
      "Starting Rung":{
        "code":"pa",
        "type":"radio",
        "choices":{
          "lower":"1<br>",
          "mid":"2<br>"
        },
        "defaultValue":"x"
      },
      "Ending Rung":{
        "code":"pa",
        "type":"radio",
        "choices":{
          "lower":"1<br>",
          "mid":"2<br>",
          "high":"3<br>",
          "traversal":"4<br>"
        },
        "defaultValue":"x"
      }
    },
    "pit_mechanisms" : {
      "Drive train type":{
        "code":"dtt",
        "type":"text"
      },
      "Outtake type":{
        "code":"ott",
        "type":"text"
      },
      "Climber type":{
        "code":"ctt",
        "type":"text"
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
        "title": "Defense Rating",
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
       "Enemy Balls": {
        "code":"hc",
        "title": "Enemy Balls",
        "type":"bool"
      },
      "Shot Prevention": { 
        "code":"pvnt",
        "title": "Shot Prevention",
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
