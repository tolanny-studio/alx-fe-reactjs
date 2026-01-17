import "./App.css";
import UserContext from "./components/UserContext";

import ProfilePage from "./components/ProfilePage";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <UserContext.provider value={userData}>
        <ProfilePage />
      </UserContext.provider>
      
    </>
  );
}

export default App;
