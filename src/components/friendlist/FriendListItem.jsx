import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  function friendStatus() {
    if (isOnline === true) {
      return (
        <p className={css.onlineStatus} style={{ color: 'green' }}>
          Online
        </p>
      );
    }
    return (
      <p className={css.onlineStatus} style={{ color: 'red' }}>
        Offline
      </p>
    );
  }

  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {friendStatus()}
    </div>
  );
};

export default FriendListItem;
