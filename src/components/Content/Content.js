import React from "react";
import TweetBox from "./TweetBox/TweetBox";
import s from "./Content.module.scss";
import Tweet from "./Tweet/Tweet";
function Content() {
  return (
    <div className={s.content}>
      <TweetBox />
      <Tweet />
    </div>
  );
}

export default Content;
