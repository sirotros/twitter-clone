import React from "react";
import s from "./Trends.module.scss";
function TrendsItem({ data }) {
  return (
    <a href="#" className={s.trendItem}>
      <div className={s.content}>
        <p>{data.category}</p>
        <p className={s.title}># {data.title}</p>
        <p>{data.tweetCount}</p>
      </div>
      <div className={s.options}>.</div>
    </a>
  );
}

export default TrendsItem;
