import React from "react";
import "./Tweet.css";

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;
  return (
    <section id="tweets-container">
      <>
        {name && handle && profile_image && text && date && (
          <article className="recent-tweet">
            <header className="tweetpost">
              <div className="tweeter-profile">
                <img src={profile_image} />
                <h3>{name}</h3>
              </div>
              <h3 className="profile-link">{handle}</h3>
            </header>
            <div className="content">
              <p>{text}</p>
            </div>
            <footer>
              <p className="tweet-date">{date}</p>
              <div className="tweet-reactions">
                <i className="fab fa-font-awesome-flag" aria-hidden="true"></i>
                <i className="fas fa-retweet" aria-hidden="true"></i>
                <i className="fas fa-heart" aria-hidden="true"></i>
              </div>
            </footer>
          </article>
        )}
      </>
    </section>
  );
};
