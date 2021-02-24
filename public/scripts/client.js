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

const createTweetElement = (obj) => {
  // Takes in a tweet object
return `
  <br>
  <article class="recent-tweets">
  <header class="tweetpost">
    <div class="tweeter-profile">
      <img src=${obj.user.avatars} alt="Newton" />
      <h3>${obj.user.name}</h3>
    </div>
    <h3 class="profile-link">${obj.user.handle}</h3>
  </header>
  <div class="content">
    <p>
      ${obj.content.text}
    </p>
  </div>
  <footer>
    <p class="tweet-date">${obj.created_at}</p>
    <div class="tweet-reactions">
      <i class="fab fa-font-awesome-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>
<br>`
  // returns a tweet <article> element
};