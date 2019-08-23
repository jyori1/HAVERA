var bodyParts = document.getElementById("parts");
var dailyHeader = document.getElementById("dailyheader");
var test = document.getElementById("test");
var recEx = document.getElementById("recWork");
var mondayEx = document.getElementById("monWork");
var tueEx = document.getElementById("tueWork");
var wedRest = document.getElementById("wednesdayRest");
var thurEx = document.getElementById("thurWork");
var friEx = document.getElementById("friWork");
var satEx = document.getElementById("satWork");
var sunEx = document.getElementById("sunWork");
var armEx = document.getElementById("armWork");
var legEx = document.getElementById("legWork");
var abEx = document.getElementById("abWork");
var playList = document.getElementById("music");

// exercise
function show(shown, hidden) {
   document.getElementById(shown).style.display='block';
   document.getElementById(hidden).style.display='none';
   return false;
 }
// exercise

function initialHide() {
  // alert("hi");
  bodyParts.style.display = "none";
  dailyHeader.style.display = "none";
  mondayEx.style.display = "none";
  tueEx.style.display = "none";
  wedRest.style.display = "none";
  thurEx.style.display = "none";
  friEx.style.display = "none";
  satEx.style.display = "none";
  sunEx.style.display = "none";
  recEx.style.display = "none";
  armEx.style.display = "none";
  legEx.style.display = "none";
  abEx.style.display = "none";
  playList.style.display = "none";


}

function showArm(){
  armEx.style.display = "block";
  document.getElementById("options").style.display = "none";
  document.getElementById("parts").style.display = "none";
  playList.style.display = "block";
}

function showLeg() {
  legEx.style.display = "block";
  document.getElementById("options").style.display = "none";
  document.getElementById("parts").style.display = "none";
  playList.style.display = "block";
}

function showAb() {
  abEx.style.display = "block";
  document.getElementById("options").style.display = "none";
  document.getElementById("parts").style.display = "none";
  playList.style.display = "block";
}


function hello(){
  // alert("hiiii");
  document.getElementById("parts").style.display = "block";
  document.getElementById("options").style.display = "none";
}

function showRec(){
  recEx.style.display = "block";
  document.getElementById("options").style.display = "none";
  playList.style.display = "block";
}

function showDaily() {
  // alert("heeh");
  dailyHeader.style.display = "block";
    var d = new Date(); //to figure out what day it is (:
    var weekday = new Array(7);
    weekday[0] = "Sunday Workout";
    weekday[1] = "Monday Workout";
    weekday[2] = "Tuesday Workout";
    weekday[3] = "Wednesday Workout";
    weekday[4] = "Thursday Workout";
    weekday[5] = "Friday Workout";
    weekday[6] = "Saturday Workout";

    var n = weekday[d.getDay()];
    document.getElementById("workout").innerHTML = n;
    document.getElementById("options").style.display = "none";

    if (n == "Monday Workout") {
    monEx.style.display = "block";
    playList.style.display = "block";
    }
    else if (n == "Tuesday Workout") {
    tueEx.style.display = "block";
    playList.style.display = "block";
    }
    else if (n == "Wednesday Workout") {
    wedRest.style.display = "block";
    playList.style.display = "block";
    }
    else if (n == "Thursday Workout") {
    thurEx.style.display = "block";
    playList.style.display = "block";
    }
    else if (n == "Friday Workout") {
    friEx.style.display = "block";
    playList.style.display = "block";
    }
    else if (n == "Saturday Workout") {
    satEx.style.display = "block";
    playList.style.display = "block";
    }
    else if (n == "Sunday Workout") {
    sunEx.style.display = "block";
    playList.style.display = "block";
    }
}

initialHide();
