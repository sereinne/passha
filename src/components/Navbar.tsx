import "../App.css";
import { useState } from "preact/hooks";

interface BtnOptions {
  text: string;
  iconPath: string;
  bottom: boolean;
  toggleCond: boolean;
  toggler: () => void;
}

function NavBtn({ text, iconPath, bottom, toggleCond, toggler }: BtnOptions) {
  const toggleBottom = bottom ? "mt-auto" : "";
  const shouldToggle = toggleCond ? "bg-beige-dark dark:bg-light-green" : "";
  return (
    <button
      onClick={toggler}
      type="button"
      class={`flex flex-col justify-center items-center rounded-md py-1 gap-y-1 transition duration-250 ease-out cursor-pointer ${toggleBottom} ${shouldToggle}`}
    >
      <img src={iconPath} class="size-6" alt="" />
      <p class="font-semibold text-[0.5rem]">{text}</p>
    </button>
  );
}

export default function NavBar() {
  const [activeButtonName, setActiveButton] = useState("clusters");
  const navBtnTemplates = [
    {
      text: "account",
      iconPath: "src/assets/user.svg",
      bottom: false,
      toggleCond: "account" === activeButtonName,
      toggler: () => setActiveButton("account"),
    },
    {
      text: "settings",
      iconPath: "src/assets/settings.svg",
      bottom: false,
      toggleCond: "settings" === activeButtonName,
      toggler: () => setActiveButton("settings"),
    },
    {
      text: "clusters",
      iconPath: "src/assets/cluster.svg",
      bottom: false,
      toggleCond: "clusters" === activeButtonName,
      toggler: () => setActiveButton("clusters"),
    },
    {
      text: "import",
      iconPath: "src/assets/import.svg",
      bottom: false,
      toggleCond: "import" === activeButtonName,
      toggler: () => setActiveButton("import"),
    },
    {
      text: "export",
      iconPath: "src/assets/export.svg",
      bottom: false,
      toggleCond: "export" === activeButtonName,
      toggler: () => setActiveButton("export"),
    },
    {
      text: "about",
      iconPath: "src/assets/info.svg",
      bottom: true,
      toggleCond: "about" === activeButtonName,
      toggler: () => setActiveButton("about"),
    },
  ];

  return (
    <nav class="bg-beige dark:bg-green text-gray flex flex-col gap-y-4 py-1 px-1">
      {navBtnTemplates.map(
        ({ text, iconPath, bottom, toggleCond, toggler }) => {
          return (
            <NavBtn
              text={text}
              iconPath={iconPath}
              bottom={bottom}
              toggleCond={toggleCond}
              toggler={toggler}
            />
          );
        },
      )}
    </nav>
  );
}
