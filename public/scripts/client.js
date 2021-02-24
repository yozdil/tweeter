/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
 * For them malicious birds! :D
 */
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

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
      ${escape(tweetObj.content.text)}
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
 * In the New Tweet Container shows a customized error message
 * @param {string} Error-Message 
 */
const tweetError = (message) => {
  $("#alert").text(message)
  $("#alert").slideDown();
  setTimeout(() => {
    $("#alert").slideUp();
  }, 1500);
}

$(document).ready(function () {
  /**
   * by using createTweetElement function appends the result to the page
   * @param {array} tweetsArr
   * @returns {object}
   */
  const renderTweets = (tweetsArr) => {
    let timeArray = tweetsArr
      .sort((a, b) => a.created_at - b.created_at)
      .reverse();
    $.each(timeArray, (i, tweetObj) => {
      // creates an article element out of each object and appends
      // it to the page section
      $("#tweets-container").append(createTweetElement(tweetObj));
    });
  };

  /**
   * Fetching tweets with Ajax
   * On a successful fetch renderTweets the returning data
   */
  const loadTweets = () => {
    const url = "http://localhost:8080/tweets";
    $.ajax({
      url,
      method: "GET",
    })
      .done((data) => {
        $("#tweets-container").empty();
        // success! we're getting the data back :)
        renderTweets(data);
      })
      .fail((err) => {
        // fail case
        console.log(err.message);
      });
  };

  $("#tweets-container").on("reload", loadTweets).trigger("reload");

  /**
   * Resizes the container for new tweets for long messages
   * see auto-resizer.js
   */
  $("textarea").autoResize();

  /**
   * Character count for a new tweet
   */
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

  /**
   * Form Submission via JQuery
   */
  $(".tweet-form").submit(function (event) {
    event.preventDefault();
    if ($("#tweet-text").val().length === 0) {
      tweetError("We couldn't hear the humming, please type!!");
    } else if ($("#tweet-text").val().length > 140) {
      tweetError("You have a lot to hum, please hum shorter!!");
    } else {
      let message = $(this).serialize();
      $.post("/tweets", message).then(() => {
        $("#tweets-container").trigger("reload");
        $("#tweet-text").val("");
      });
    }
  });
});
