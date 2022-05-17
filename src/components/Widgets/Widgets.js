import React from "react";
import Follow from "./Follow/Follow";
import Search from "./Search/Search";
import Trends from "./Trends/Trends";
import s from "./Widgets.module.scss";

function Widgets() {
  return (
    <div className={s.widgets}>
      <Search/>
      <Trends/>
      <Follow/>
    </div>
  );
}

export default Widgets;
