import Profile from "./components/Profile/Profile";
import user from "./data/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./data/data.json";
import FriendList from "./components/FriendList/FriendList"
import friends from "./data/friends.json"
import TransactionHistory from "./components/Transactions/Transactions";
import transactions from "./data/transactions.json";

import "./App.css";

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
