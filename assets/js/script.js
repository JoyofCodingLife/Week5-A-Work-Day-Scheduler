// List of all Variables

 // Current Date Section
 var currentDay = moment().format("dddd, MMMM Do YYYY");
 $('#currentDay').text(currentDay);

 // Buttons
 var saveButton = $(".saveBtn");
 var clearButton = $("#clearBtn")
 var saveNotesButton = $("#saveNotesBtn");
 var deleteNotesButton = $("#deleteNotesBtn");
 var notesEntry = $("#notes")
 var storageOfNotes = localStorage.getItem("notesStorage")
 
 notesEntry.val(storageOfNotes)
 //console.log(storageOfNotes)

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

// EXTRA BITS

 //Clear All Button
 clearButton.on("click", function() {
     localStorage.clear();
     $(".description").val("");
 });

 // Save Notes Button
 saveNotesButton.on("click", function(){
     //console.log(notesEntry.val())
     var notesToSave = notesEntry.val();
     localStorage.setItem("notesStorage", notesToSave)
 })