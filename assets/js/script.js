// Current Date and Section
var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);
var currentTime = moment().format("h:mm a");
$('#currentTime').text(currentTime);