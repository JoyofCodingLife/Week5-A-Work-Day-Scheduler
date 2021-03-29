// List of all Variables

 // Current Date Section
 var currentDay = moment().format("dddd, MMMM Do YYYY");
 $('#currentDay').text(currentDay);

 // Buttons
 var saveButton = $(".saveBtn");
 var saveNotesButton = $(".saveNotesBtn");
 var deleteNotesButton = $(".deleteNotesBtn");
 var clearButton = $("#clearBtn")

// List of all Functions

 // Each timeblock is color coded to indicate whether it is in the past, present, or future
 function timeblockColor() {
     var hour = moment().hours();
     
     // Color Coding
     $(".time-block").each(function() {
         var currentHour = parseInt($(this).attr("id"));  
      
      if (currentHour > hour) {
       $(this).addClass("future");
      } else if (currentHour === hour) {
       $(this).addClass("present");
      } else {
       $(this).addClass("past");
      }
 })};
 
 // Save Button on timeblock saves entered event into a local storage
 saveButton.on("click", function() {
     var time = $(this).siblings(".hour").text();
     var information = $(this).siblings(".description").val();
 
     localStorage.setItem(time, information);
 });
 
 // When refresh the page is refreshed, then the saved events persist
 function savedEvents() {
     
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var storedInformation = localStorage.getItem(currentHour);
        
        if(storedInformation !== null) {
            $(this).siblings(".description").val(storedInformation);
         }
     });
 }

 // Invoke Functions
 timeblockColor();
 savedEvents();

 //Clear All Button
 clearButton.on("click", function() {
     localStorage.clear();
     $(".description").val("");
 })
