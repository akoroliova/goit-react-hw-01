import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={css.friendListContainer}>
      <ul className={css.friendListElement}>
        {friends.map(eachItem => {
          return (
            <li key={eachItem.id} className={css.friendListItemElement}>
              <FriendListItem
                avatar={eachItem.avatar}
                name={eachItem.name}
                isOnline={eachItem.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
