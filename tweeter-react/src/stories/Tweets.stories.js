import React from "react";
import { Tweets } from "../components/Tweets";

export default { title: "Tweet Container" };

export const emptyTweet = () => <Tweets />;

export const populatedTweet = () => {
  const tweets = [
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
  ]

  return <Tweets {...tweets} />;
};
