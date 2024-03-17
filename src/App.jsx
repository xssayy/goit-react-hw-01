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
      <Profile
        avatar={userData.avatar}
        location={userData.location}
        stats={userData.stats}
        username={userData.username}
      />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
