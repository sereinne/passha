//import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import ClusterList from "./components/ClusterList.tsx";

function App() {
  return (
    <main class="h-screen font-poppins grid grid-cols-[3.75rem_auto] bg-white dark:bg-black">
      <NavBar />
      <ClusterList />
    </main>
  );
}

export default App;
