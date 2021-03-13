import React, { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Profile } from "./components/Profile";
import { TweetForm } from "./components/TweetForm";
import { Tweet } from "./components/Tweet";

const initialTweetData = [
  {
    name: "Yam",
    handle: "@yamyam",
    profile_image:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Lettered_Ara%C3%A7ari.jpg",
    text: "Yay, I just tweeted!",
    date: "2 days ago",
  },
  {
    name: "Howard Zinn",
    handle: "@yoitshowy",
    profile_image:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Howard_Tayler_with_friendly_gargoyle.png",
    text: "I am just gonna tweet a long message and see what's up!!",
    date: "3 days ago",
  },
  {
    name: "Amy Mansell",
    handle: "@heyitsamy",
    profile_image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Amy_Acker_at_Fan_Expo_2015_%2826841033473%29_%28cropped%29.jpg",
    text: "I dig hexagons, yo!",
    date: "15 days ago",
  },
  {
    name: "Newton",
    handle: "@apple",
    profile_image:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Sir_Isaac_Newton_%281643-1727%29.jpg",
    text: "Apples and oranges bruh!",
    date: "50 days ago",
  },
];

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const tweets = tweetData.map((tweetData, index) => {
    return (
      <Tweet
        key={index}
        name={tweetData.name}
        handle={tweetData.handle}
        profile_image={tweetData.profile_image}
        text={tweetData.text}
        date={tweetData.date}
      />
    );
  });

  const addNewTweet = (text) => {
    const newTweet = {
      name: "Yam",
      handle: "@yamyam",
      profile_image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Lettered_Ara%C3%A7ari.jpg",
      text,
      date: "5 days ago",
    };

    setTweetData([newTweet, ...tweetData]);
  };

  return (
    <>
      <div className="App">
        <Navigation />
        <div id="content-layout">
          <Profile />
          <main className="container">
            <TweetForm addNewTweet={addNewTweet} />
            {tweets}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
