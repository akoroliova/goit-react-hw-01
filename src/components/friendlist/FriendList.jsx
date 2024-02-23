import FriendListItem from './FriendListItem';

const FriendList = friends => {
  return (
    <div>
      <ul>
        {/* Кількість li залежить від кількості об'єктів в масиві */}
        <li>
          <FriendListItem />
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
