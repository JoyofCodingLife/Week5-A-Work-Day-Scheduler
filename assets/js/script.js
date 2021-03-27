// List of all Variables

 // Current Date Section
 var currentDay = moment().format("dddd, MMMM Do YYYY");
 $('#currentDay').text(currentDay);

 // Buttons
 var saveButton = $(".saveBtn");
 var saveNotesButton = $(".saveNotesBtn");
 var deleteNotesButton = $(".deleteNotesBtn");

// List of all Functions

 // Each timeblock is color coded to indicate whether it is in the past, present, or future
 function timeblockColor() {
     var hour = moment().hours();
     
     //
     $(".time-block").each(function() {
         var currentHour = parseInt($(".time-block").attr("id"));  
         
         if (currentHour < hour) {
             $(".time-block").addClass("past")
         } else
         if (currentHour === hour) {
             $(".time-block").addClass("present");
         } else 
         if (currentHour > hour) {
             $(".time-block").addClass("future");
         }
     })
 };
 
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

// Extra bit - NOTEPAD

  // Save Notes button 
  saveNotesButton("click", function() {
     var notesEntry = $(".notes").text();
 
     localStorage.setItem(notesEntry);
 });
 
 // When refresh the page is refreshed, then the saved events persist
 function savedNotes() {
     var storedNotes = localStorage.getItem(notesEntry);
     if(storedNotes !== null) {
         $(".notes").text(storedNotes);
    }
 };


 savedNotes();