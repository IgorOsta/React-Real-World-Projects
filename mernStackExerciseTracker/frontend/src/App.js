import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useAuthContext } from "./hooks/useUserContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div className=" App ">
      {/* //* stores the current location in the browser's address bar using clean
      //* URLs and navigates using the browser's built-in history stack.
       */}
      <BrowserRouter>
        <NavBar />
        <div className=" pages ">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="signup"
              element={!user ? <SignUp /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
