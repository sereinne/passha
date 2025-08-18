//import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import NavBar from "./components/Navbar.tsx";

function App() {
  return (
    <main class="h-screen font-poppins grid grid-cols-[3.75rem_auto] bg-white dark:bg-black">
      <NavBar />
    </main>
  );
}

export default App;
