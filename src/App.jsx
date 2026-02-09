import { Routes, Route } from "react-router";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import SignInForm from "./components/SignInForm/SignInForm.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import HootList from "./components/HootList/HootList.jsx";
import HootDetails from "./components/HootDetails/HootDetails.jsx";
import HootEditForm from "./components/HootEditForm/HootEditForm.jsx";

const App = () => {
  const { user } = useContext(UserContext);
  const hoots = [];

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            <Route path="/hoots" element={<HootList hoots={hoots} />} />
            <Route path="/hoots/:hootId" element={<HootDetails />} />
            <Route path="/hoots/:hootId/edit" element={<HootEditForm />} />
          </>
        ) : (
          <>
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
