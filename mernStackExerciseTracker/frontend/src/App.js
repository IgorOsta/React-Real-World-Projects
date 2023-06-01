import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" App ">
      {/* //* stores the current location in the browser's address bar using clean
      //* URLs and navigates using the browser's built-in history stack.
       */}
      <BrowserRouter>
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
