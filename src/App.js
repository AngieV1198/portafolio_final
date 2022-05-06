import UX from "Components/UX/UX";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/UX" element={<UX />}></Route>
        <Route
          path="*"
          element={
            <main style={{display:"flex", justifyContent:"center",alignItems:"center", minHeight: "100vh" }}>
              <p style={{fontSize: "3rem"}}>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
