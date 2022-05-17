import React from "react";
import s from "./Tweet.module.scss";
import { AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";

function TweetItem({ data }) {
  return (
    <div className={s.tweet}>
      <img
        src="https://pbs.twimg.com/profile_images/1326948740163399680/A8f3jATW_400x400.jpg"
        className={s.profilePicture}
        alt="profile picture"
      />
      <div className={s.tweetContent}>
        <div className={s.title}>
          {data.name}
          <span className={s.titleLight}>
            @{data.userName} - {data.timesTamp}
          </span>
        </div>
        <div className={s.content}> {data.tweet} {data.tweetImage && <img className={s.tweetImage} src={data.tweetImage} alt="Tweet Photos"/> } </div>
        <div className={s.actions}>
          <button>
            <MdOutlineModeComment className={s.actionsIcon} />
            {data.commentCount}
          </button>
          <button>
            <AiOutlineRetweet className={s.actionsIcon} /> {data.reTweetCount}
          </button>
          <button>
            <AiFillHeart className={s.actionsIcon} /> {data.likeCount}
          </button>
          <button>
            <FiShare />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
