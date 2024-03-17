import Profile from "./components/Profile/Profile";
import FriendsList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

//=======DATA======//
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div>
      <Profile userData={userData} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
