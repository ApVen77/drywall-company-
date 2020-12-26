var currentTime= new Date();
var daysOfTheWeek= new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"); 
var dow= document.getElementById("week-day");
dow.innerHTML= daysOfTheWeek[currentTime.getDay()]; 

var time= document.getElementById("time");
time.innerHTML= currentTime.getHours()+":" + currentTime.getMinutes();