import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/Views/JsxTheorie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JsxTheorie />} />
        <Route
          path="/test"
          style={{ color: "white" }}
          element={<h1>page TEST</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
