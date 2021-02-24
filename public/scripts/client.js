/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/**
 * Resizes the container for a new tweet
 * see auto-resizer.js
 */
$(document).ready(function () {
  $("textarea").autoResize();
});

/**
 * Character count for a new tweet
 */
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

/**
 * Gives the elapsed time since 
 * @author fearofawhackplanet
 * @link https://stackoverflow.com/users/207752/fearofawhackplanet
 */
const timeDifference = (previous) => {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;

  let current = Date.now();
  let elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
};

/**
 * From a tweet objects returns an article
 * @param {object} tweetObj
 * @returns {HTMLBodyElement} New Article (tweet)
 */
const createTweetElement = (tweetObj) => {
  // Takes in a tweet tweetObject
  return `
  <br>
  <article class="recent-tweets">
  <header class="tweetpost">
    <div class="tweeter-profile">
      <img src="${tweetObj.user.avatars}" alt="Newton" />
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
    <p class="tweet-date">${timeDifference(tweetObj.created_at)}</p>
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

/**
 * by using createTweetElement function appends the result to the page
 * @param {array} tweetsArr 
 * @returns {object}
 */
const renderTweets = (tweetsArr) => {
  $.each(tweetsArr, (i, tweetObj) => {
    // creates an article element out of each object and appends
    // it to the page section
    $("#tweets-container").append(createTweetElement(tweetObj));
  });
};

// CALL THE FUNCTION TO LOAD DB
$(document).ready(function () {
  renderTweets([
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1613821770770,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1613908170770,
    },
  ]);
});
