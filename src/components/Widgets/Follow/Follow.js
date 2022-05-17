import { React, useState } from "react";
import s from "./Follow.module.scss";
import data from "../../../data/Follow.json";
import FollowItem from "./FollowItem";

function Follow() {
  const [datas, setDatas] = useState(data);
  return (
    <div className={s.follows}>
      <h3>Who to Follow</h3>
      {datas.map((data, key) => {
        return <FollowItem key={key} data={data} />;
      })}
      <a href="#" className={s.more}>
        Show More
      </a>
    </div>
  );
}

export default Follow;
