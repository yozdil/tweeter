import React from "react";
import { Tweet } from "../components/Tweet";

export default { title: "Singular Tweet" };

export const emptyTweet = () => <Tweet />;

export const populatedTweet = () => {
  const tweets = {
    name: "Yam",
    handle: "@yamyam",
    profile_image:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Lettered_Ara%C3%A7ari.jpg",
    text: "Yay, I just tweeted!",
    date: "2 days ago",
  };
  
  return <Tweet tweetData={tweets} />
};
