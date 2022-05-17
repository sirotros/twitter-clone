import s from "./TweetBox.module.scss";
import image from "../../../img/Profile.jpeg";
import topTweet from "../../../img/topTweet.svg";
import imageIcon from "../../../img/image.svg";
import gif from "../../../img/gif.svg";
import statistics from "../../../img/statistics.svg";
import face from "../../../img/face.svg";
import schedule from "../../../img/schedule.svg";
import location from "../../../img/location.svg";

function TweetBox() {
  const resize = () => {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }
    if (tx.length > 280) {
    }
    function OnInput() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  };

  return (
    <div className={s.tweetbox}>
      <h1 className={s.title}>
        <span>Home</span>
        <span>
          <img src={topTweet} alt="topTweet" />
        </span>
      </h1>
      <form className={s.form}>
        <img src={image} className={s.logo} alt="" />
        <textarea
          placeholder="What's happening? "
          className={s.textarea}
          id="tweetBox"
          cols="50"
          maxLength="280"
          onChange={resize}
        ></textarea>
      </form>
      <div className={s.textBoxBtns}>
        <div className={s.icons}>
          <a href="#">
            <img
              className={s.textBoxIcon}
              src={imageIcon}
              alt="tweetbox icon"
            />
          </a>
          <a href="#">
            <img className={s.textBoxIcon} src={gif} alt="tweetbox icon" />
          </a>
          <a href="#">
            <img
              className={s.textBoxIcon}
              src={statistics}
              alt="tweetbox icon"
            />
          </a>
          <a href="#">
            <img className={s.textBoxIcon} src={face} alt="tweetbox icon" />
          </a>
          <a href="#">
            <img className={s.textBoxIcon} src={schedule} alt="tweetbox icon" />
          </a>
          <a href="#">
            <img className={s.textBoxIcon} src={location} alt="tweetbox icon" />
          </a>
        </div>
        <button className={s.btn}>Tweet</button>
      </div>
    </div>
  );
}

export default TweetBox;
