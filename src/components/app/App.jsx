import './App.module.css';
import Profile from '../profile/Profile.jsx';
import { userData } from '../../userData.json';
import FriendList from '../friendlist/FriendList.jsx';
import { friends } from '../../friends.json';
import TransactionHistory from '../transactionhistory/TransactionHistory.jsx';
import { transactions } from '../../transactions.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* Щоб компонент працював правильно, переконайтеся, що ви передаєте масив об'єктів друзів у вигляді параметру friends. Також переконайтеся, що об'єкти друзів у масиві мають властивості, які очікує ваш компонент FriendList, наприклад, id, avatar, name, isOnline. */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
