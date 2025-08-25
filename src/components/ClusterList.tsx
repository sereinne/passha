import { Fragment, FunctionComponent } from "preact";
import "../App.css";
import { useEffect, useRef, useState } from "preact/hooks";

function SearchBar() {
  return (
    <input
      type="search"
      class="mx-auto my-1 rounded-full py-1 px-3 bg-beige dark:bg-green outline-none placeholder:text-center"
      placeholder="search your secrets..."
    />
  );
}

function ClusterCreationDialog() {
  return (
    <dialog class="border-2 rounded-md bg-beige dark:bg-green mx-auto my-auto px-2 py-1">
      <h1 class="font-bold text-center">Create New Cluster</h1>
      <form class="grid grid-cols-[20%_80%] gap-y-3 my-1">
        <label for="cluster-name" class="font-semibold self-center">Name</label>
        <input
          name="cluster-name"
          type="text"
          class="border-1 rounded-sm px-2 py-1"
          required
        />
        <label for="cluster-password" class="font-semibold self-center">
          Password
        </label>
        <div className="cluster-password flex gap-x-2">
          <input
            name="cluster-password"
            type="password"
            class="border-1 rounded-sm px-2 py-1"
          />
          <button type="button" className="hide-password cursor-pointer">
            <img src="src/assets/eye.svg" class="size-8" alt="" />
          </button>
          <button type="button" className="generate-password cursor-pointer">
            <img src="src/assets/cycle.svg" class="size-8" alt="" />
          </button>
        </div>
        <label for="cluster-otp" class="font-semibold self-center">
          OTP url
        </label>
        <input
          name="cluster-otp"
          type="text"
          class="border-1 rounded-sm px-2 py-1"
        />
        <label for="submission" class="font-semibold self-center">
        </label>
        <input
          type="submit"
          value="create"
          class="border-1 px-2 py-1 font-semibold rounded-full cursor-pointer w-[20%] ml-auto"
        />
      </form>
    </dialog>
  );
}

function AddCluster() {
  const clusterCreationDialog = useRef(null);

  function showClusterCreation() {
    if (clusterCreationDialog.current) {
      const dialog: HTMLDialogElement = clusterCreationDialog.current.base;
      dialog.showModal();
    }
  }

  return (
    <Fragment>
      <button
        onClick={showClusterCreation}
        type="button"
        class="cursor-pointer bg-beige dark:bg-green dark:border-none border-2 transition duration-150 ease-out rounded-md flex justify-center items-center hover:shadow-lg"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="size-12"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          </g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 12H20M12 4V20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
            </path>
          </g>
        </svg>
      </button>
      <ClusterCreationDialog ref={clusterCreationDialog} />
    </Fragment>
  );
}

interface ClusterOpts {
  clusterName: string;
  clusterPassword: string;
}

function Cluster({ clusterName, clusterPassword }: ClusterOpts) {
  const maxTime = 30;
  const [timer, setTimer] = useState(maxTime);

  const decrement = () => {
    if (timer == 0) {
      setTimer(maxTime);
    } else {
      setTimer(timer - 1);
    }
  };

  useEffect(() => {
    const timerId = setInterval(decrement, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timer]);
  // TODO: fetch image dynamically.
  return (
    <div className="cluster bg-beige dark:bg-green dark:border-none border-2 rounded-md grid grid-cols-[0.25fr_0.75fr] px-2">
      <div className="cluster-favicon flex justify-center items-center">
        <img
          src="http://www.google.com/s2/favicons?domain=www.google.com"
          class="size-10"
        />
      </div>
      <div className="cluster-metadata flex flex-col justify-around">
        <h1 className="cluster-name font-bold text-xl">
          {clusterName}
        </h1>
        <div className="cluster-pass flex gap-x-2">
          <input
            type="password"
            value={clusterPassword}
            class="w-full"
            readonly
          />
          <div className="copy-btn cursor-pointer">
            <img src="src/assets/copy.svg" class="size-6" alt="" />
          </div>
        </div>
        <div className="cluster-otp ">
          <div className="cluster-otp-digits flex justify-evenly gap-x-1">
            <div className="digit border-2 rounded-sm w-5 text-center font-semibold">
              2
            </div>
            <div className="digit border-2 rounded-sm w-5 text-center font-semibold">
              3
            </div>
            <div className="digit border-2 rounded-sm w-5 text-center font-semibold">
              1
            </div>
            <div className="digit border-2 rounded-sm w-5 text-center font-semibold">
              4
            </div>
            <div className="digit border-2 rounded-sm w-5 text-center font-semibold">
              9
            </div>
            <div className="digit border-2 rounded-sm w-5 text-center font-semibold">
              0
            </div>
            <div className="copy-btn cursor-pointer">
              <img src="src/assets/copy.svg" class="size-6" alt="" />
            </div>
          </div>
          <div className="cluster-otp-timer font-bold text-end">
            {timer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClusterList() {
  return (
    <div class="mx-3 my-1 flex flex-col gap-y-3">
      <SearchBar />
      <div className="clusters grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 auto-rows-max gap-2 flex-1">
        <Cluster
          clusterName="Google Account"
          clusterPassword="somesafesecretpassword"
        />
        <Cluster
          clusterName="Discord Account"
          clusterPassword="somesafesecretpasswordforDiscord"
        />
        <Cluster
          clusterName="Github Account"
          clusterPassword="somesafesecretpasswordforgithub"
        />
        <Cluster
          clusterName="Github Second Account"
          clusterPassword="somesafesecretpasswordforgithubsecond"
        />
        <Cluster
          clusterName="Instagram"
          clusterPassword="somesafesecretpasswordforinstagram"
        />
        <Cluster
          clusterName="LinkedIn"
          clusterPassword="somesafesecretpasswordforlinkedin"
        />
        <Cluster
          clusterName="Github Account"
          clusterPassword="somesafesecretpasswordforgithub"
        />
        <AddCluster />
      </div>
    </div>
  );
}
