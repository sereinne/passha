import "../App.css";
import { Dispatch, StateUpdater, useState } from "preact/hooks";

interface NavBtnOpts {
  iconName: string;
  iconPath: string;
  isInBottom: boolean;
  isActive: boolean;
  activator: () => void;
  pageSwitcher: () => void;
}

function NavBtn(
  { iconName, iconPath, isInBottom, isActive, activator, pageSwitcher }:
    NavBtnOpts,
) {
  return (
    <button
      onClick={() => {
        activator();
        pageSwitcher();
      }}
      type="button"
      class={`${
        isInBottom ? "mt-auto" : ""
      } cursor-pointer flex flex-col justify-center items-center gap-y-1`}
    >
      <div
        className={`icon ${
          isActive ? "bg-beige-dark" : ""
        } px-2 py-1 rounded-md`}
      >
        <img src={`src/assets/${iconPath}`} class="size-6" alt="" />
      </div>
      <p class="font-semibold text-xs">{iconName}</p>
    </button>
  );
}

interface NavbarOpts {
  activePage: string;
  switchPage: Dispatch<StateUpdater<string>>;
}

export default function Navbar({ activePage, switchPage }: NavbarOpts) {
  const [activeBtn, setActiveBtn] = useState(activePage);
  const preDefinedButtons: Array<NavBtnOpts> = [
    {
      iconName: "account",
      iconPath: "settings.svg",
      isInBottom: false,
      isActive: "account" === activeBtn,
      activator: () => setActiveBtn("account"),
      pageSwitcher: () => switchPage("account"),
    },
    {
      iconName: "clusters",
      iconPath: "cluster.svg",
      isInBottom: false,
      isActive: "clusters" === activeBtn,
      activator: () => setActiveBtn("clusters"),
      pageSwitcher: () => switchPage("clusters"),
    },
    {
      iconName: "import",
      iconPath: "import.svg",
      isInBottom: false,
      isActive: "import" === activeBtn,
      activator: () => setActiveBtn("import"),
      pageSwitcher: () => switchPage("import"),
    },
    {
      iconName: "export",
      iconPath: "export.svg",
      isInBottom: false,
      isActive: "export" === activeBtn,
      activator: () => setActiveBtn("export"),
      pageSwitcher: () => switchPage("export"),
    },
    {
      iconName: "About Passha",
      iconPath: "info.svg",
      isInBottom: true,
      isActive: "About Passha" === activeBtn,
      activator: () => setActiveBtn("About Passha"),
      pageSwitcher: () => switchPage("About Passha"),
    },
  ];
  return (
    <nav class="bg-beige flex flex-col gap-y-5 py-3 px-2">
      {preDefinedButtons.map((cfg) => {
        return (
          <NavBtn
            iconName={cfg.iconName}
            iconPath={cfg.iconPath}
            isInBottom={cfg.isInBottom}
            isActive={cfg.isActive}
            activator={cfg.activator}
            pageSwitcher={cfg.pageSwitcher}
          />
        );
      })}
    </nav>
  );
}
