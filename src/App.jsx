import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/Views/JsxTheorie";
import HookUseState from "./components/views/HookUseState";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<JsxTheorie />} />
        <Route path="/hook-use-state" element={<HookUseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
