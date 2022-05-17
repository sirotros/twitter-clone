import React from "react";
import s from "./Header.module.scss";
function HeaderItem({ name, icon }) {
  return (
    <div className={s.headerItem}>
      <span className={s.icon}> {icon} </span>
      <span className={s.title}> {name} </span>
    </div>
  );
}

export default HeaderItem;
