//import { useState } from "preact/hooks";
//import preactLogo from "./assets/preact.svg";
//import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  //const [greetMsg, setGreetMsg] = useState("");
  //const [name, setName] = useState("");

  // async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  // setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main class="h-screen grid grid-cols-[3.75rem_auto] bg-red-300">
      <nav class="border-2 rounded-md border-red-200">
        foo
      </nav>
      <input
        type="search"
        value="search something"
        class="border-2 rounded-md border-red-200"
      />
    </main>
  );
}

export default App;
