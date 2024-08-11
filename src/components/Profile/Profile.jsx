import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img className={css.profileAvatar} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.statsList}>
          <span className={css.statsItem}>Followers</span>
          <span className={css.statsQNT}>{followers}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.statsItem}>Views</span>
          <span className={css.statsQNT}>{views}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.statsItem}>Likes</span>
          <span className={css.statsQNT}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
