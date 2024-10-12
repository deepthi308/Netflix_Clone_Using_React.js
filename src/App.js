import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
// import { IsUserRedirect, ProtectedRoute } from "./helpers/routes.js";
import useAuthListener from "./hooks/use-auth-listener.js";

export default function App() {
  const { user } = useAuthListener();
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Routes>
      </Router>
    </>
  );
}
