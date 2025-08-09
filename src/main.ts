import { invoke } from "@tauri-apps/api/core";

//let greetInputEl: HTMLInputElement | null;
//let greetMsgEl: HTMLElement | null;

// async function _greet() {
// if (greetMsgEl && greetInputEl) {
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//greetMsgEl.textContent = await invoke("greet", {
//  name: greetInputEl.value,
//});
// }

globalThis.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");
});
