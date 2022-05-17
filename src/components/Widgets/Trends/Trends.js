import { React, useState } from "react";
import s from "./Trends.module.scss";
import data from "../../../data/Trends.json";
import TrendsItem from "./TrendsItem";
function Trends() {
  const [datas, setDatas] = useState(data);
  return (
    <div className={s.trends}>
      <h2>Trends for you</h2>
      {datas.map((data,key) => {
        return <TrendsItem key={key} data={data} />;
      })}
      <a href="#" className={s.more}>Show More</a>
    </div>
  );
}

export default Trends;
