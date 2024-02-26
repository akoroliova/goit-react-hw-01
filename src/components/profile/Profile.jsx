import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div>
        <div className={css.avatar}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={css.username}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLoc}>{location}</p>
      </div>
      <ul className={css.statContainer}>
        <li className={css.stat}>
          <span className={css.statName}>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.statName}>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>

        <li className={css.stat}>
          <span className={css.statName}>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
