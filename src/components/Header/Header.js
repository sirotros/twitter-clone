import React from "react";
import s from "./Header.module.scss";
import HeaderItem from "./HeaderItem";
import Profile from "../../img/Profile.jpeg";
import { BsTwitter, BsBookmark, BsFileText } from "react-icons/bs";
import { BiHomeCircle, BiHash, BiEnvelope } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgMoreO } from "react-icons/cg";

const headerLinks = [
  {
    name: "Home",
    icon: <BiHomeCircle />,
  },
  {
    name: "Explore",
    icon: <BiHash />,
  },
  {
    name: "Notifications",
    icon: <MdNotifications />,
  },
  {
    name: "Messages",
    icon: <BiEnvelope />,
  },
  {
    name: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    name: "Lists",
    icon: <BsFileText />,
  },

  {
    name: "Profile",
    icon: <VscAccount />,
  },
  {
    name: "More",
    icon: <CgMoreO />,
  },
];

function Header() {
  return (
    <header className={s.header}>
      <div>
        <BsTwitter className={s.logo} />
        <ul>
          {headerLinks.map((data, key) => {
            return <HeaderItem key={key} name={data.name} icon={data.icon} />;
          })}
        </ul>
        <button type="submit" className={s.btn}>
          Tweet
        </button>
      </div>
      <div className={s.profile}>
        <img src={Profile} className={s.profileImage} alt="profile" />
        <div className={s.profileInfo}>
          <span className={s.profileName}>Yasin Özgür Çakm...</span>
          <span className={s.userName}>@sirotros</span>
        </div>
        <div className={s.dot}>.</div>
      </div>
    </header>
  );
}

export default Header;
