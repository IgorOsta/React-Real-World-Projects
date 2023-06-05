import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className=" App ">
      {/* //* stores the current location in the browser's address bar using clean
      //* URLs and navigates using the browser's built-in history stack.
       */}
      <BrowserRouter>
        <NavBar />
        <div className=" pages ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
