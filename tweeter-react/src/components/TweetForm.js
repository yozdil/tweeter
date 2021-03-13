import React, { useState } from "react";
import "./TweetForm.css";

export const TweetForm = (props) => {
  const { addNewTweet } = props;

  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const outputStyle = {
    color: tweetRemainingLength >= 0 ? "#343a35" : "#ad0f00",
  };

  const submitTweet = (event) => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  };

  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>
      <form onSubmit={ submitTweet } className="tweet-form" action="/tweets/" method="POST">
        <textarea
          value={tweetText}
          onChange={(event) => setTweetText(event.target.value)}
          placeholder="What are you humming about?"
          name="text"
          id="tweet-text"
        ></textarea>

        <span id="alert" hidden>
          ERROR
        </span>
        <div className="button-counter">
          <button id="post-tweet" type="submit">
            <i className="fas fa-feather-alt"></i> Tweet
          </button>
          <output
            style={outputStyle}
            name="counter"
            className="counter"
            for="tweet-text"
          >
            {140 - tweetText.length}
          </output>
        </div>
      </form>
    </section>
  );
};
