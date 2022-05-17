import { React, useState } from "react";
import s from "./Tweet.module.scss";
import tweet from "../../../data/Tweet.json";
import TweetItem from "./TweetItem";
function Tweet() {
  const [datas, setDatas] = useState(tweet);
  return (
    <div className={s.tweets}>
      <div>
        {datas.map((data,key) => {
          return <TweetItem key={key} data={data} />;
        })}
      </div>
    </div>
  );
}

export default Tweet;
