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

// ****************DON'T FORGET THE DATE!!!!!! RIGHT NOW ITS IN MS FORMAT!!!!!
const createTweetElement = (tweetObj) => {
  // Takes in a tweet tweetObject
  return `
  <br>
  <article class="recent-tweets">
  <header class="tweetpost">
    <div class="tweeter-profile">
      <img src=${tweetObj.user.avatars} alt="Newton" />
      <h3>${tweetObj.user.name}</h3>
    </div>
    <h3 class="profile-link">${tweetObj.user.handle}</h3>
  </header>
  <div class="content">
    <p>
      ${tweetObj.content.text}
    </p>
  </div>
  <footer>
    <p class="tweet-date">${tweetObj.created_at}</p>
    <div class="tweet-reactions">
      <i class="fab fa-font-awesome-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>
<br>`;
  // returns a tweet <article> element
};

// LOOP THROUGH THE ARRAY OF TWEET OBJECTS
const renderTweets = (tweetsArr) => {
  $.each(tweetsArr, (i, tweetObj) => {
    // creates an article element out of each object and appends
    // it to the page section
    $("#tweets-container").append(createTweetElement(tweetObj));
  });
};

// CALL THE FUNCTION TO LOAD DB
$(document).ready(function() {
  renderTweets([
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1613821770770
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1613908170770
    }
  ]);
})
