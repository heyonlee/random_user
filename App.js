import { useEffect, useState } from "react";
import Header from "./Header";
import "./App.css";
import fetchUser from "./rando_user";
import UserSummary from "./components/UserSummary";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const refreshUser = async () => {
    try {
      const result = await fetchUser();
      const userData = result.data.results[0];
      setCurrentUser(prev=>userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshUser();
  },[]);

  return (
    <div className="App">
      <Header />
      <UserSummary userData={currentUser} />


      <button onClick={refreshUser}>Click</button>
     
    </div>
  );
}

export default App;
