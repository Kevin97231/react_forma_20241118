import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/Views/JsxTheorie";
import HookUseState from "./components/views/HookUseState";
import Navbar from "./components/Navbar";
import Flux from "./components/views/Flux";
import Formulaire from "./components/views/Formulaire";
import Exercice from "./components/views/Exercice";
import { UseEffect } from "./components/views/UseEffect";
import { CycleDeVie } from "./components/views/CycleDeVie";
import { RequeteApi } from "./components/views/RequeteApi";
import { HookPersonnalise } from "./components/views/HookPersonnalise";
import { ExerciceApi } from "./components/views/ExerciceApi";
import { HookUseMemo } from "./components/views/HookUseMemo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<JsxTheorie />} />
        <Route path="/hook-use-state" element={<HookUseState />} />
        <Route path="/flux" element={<Flux />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/exercice" element={<Exercice />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/cycle-de-vie" element={<CycleDeVie />} />
        <Route path="/requete" element={<RequeteApi />} />
        <Route path="/hook-perso" element={<HookPersonnalise />} />
        <Route path="/exercice-api" element={<ExerciceApi />} />
        <Route path="/hook-use-memo" element={<HookUseMemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
