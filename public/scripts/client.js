/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//AUTO-RESIZE TO FIT CONTENT - (auto-resizer.js)
$(document).ready(function () {
  $("textarea").autoResize();
});

// CHARACTER COUNTER
$(document).ready(function () {
  $("#tweet-text")
    .keyup(function () {
      const counter = 140;
      let charCount = $(this).val().length;

      counter - charCount < 0
        ? $(".counter").css("color", "#AD0F00")
        : $(".counter").css("color", "#343A35");

      $(".counter").text(counter - charCount);
    })
    .keyup();
});