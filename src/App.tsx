//import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Content from "./components/Content.tsx";
import { useState } from "preact/hooks";

function App() {
  const [activePage, setActivePage] = useState("clusters");
  return (
    <div class="region-divider h-screen grid grid-cols-[3.75rem_auto]">
      <Navbar activePage={activePage} switchPage={setActivePage} />
      <Content page={activePage} />
    </div>
  );
}

export default App;
