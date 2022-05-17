import React from "react";
import s from "./Follow.module.scss";

function FollowItem({ data }) {
  return (
    <div className={s.follow}>
      <img src={data.profilePicture} alt="profilePicture" />
      <div className={s.user}>
        <p> {data.name} </p>
        <p> @ {data.userName}</p>
      </div>
      <button className={s.btn} >Follow</button>
    </div>
  );
}

export default FollowItem;
