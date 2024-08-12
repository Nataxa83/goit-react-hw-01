import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline = false }) {
  return (
    <div className={css.friendsBoxItem}>
      <img className={css.friendsAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
      <p
        className={clsx(css.isOnline, {
          [css.online]: isOnline === true,
          [css.offline]: isOnline === false,
        })}
      >
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
