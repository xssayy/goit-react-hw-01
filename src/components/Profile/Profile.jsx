import style from "./Profile.module.css";

const Profile = ({
  userData: { username, tag = "usertag", location, avatar, stats },
}) => {
  return (
    <div className={style.profile}>
      <div>
        <img className={style.avatar} src={avatar} alt="User avatar" />
        <p className={style.username}>{username}</p>
        <p className={style.usertag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.statList}>
        <li className={style.statListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={style.statListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.statListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
