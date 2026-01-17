import "./App.css";
import UserContext from "./components/UserContext";

import ProfilePage from "./components/ProfilePage";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <UserContext>
        <ProfilePage />
      </UserContext>
      
    </>
  );
}

export default App;
