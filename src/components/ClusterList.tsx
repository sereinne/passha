import { Component, Fragment } from "preact";
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

function DialogBox() {
  const inputPasswordRef = useRef(null);
  function generateSafePassword() {
    if (inputPasswordRef.current) {
      const inputElem: HTMLInputElement = inputPasswordRef.current;
      inputElem.value = "foobarbaz";
    }
  }

  function togglePassword() {
    if (inputPasswordRef.current) {
      const inputElem: HTMLInputElement = inputPasswordRef.current;
      const passwordType = inputElem.getAttribute("type");
      if (passwordType && passwordType === "password") {
        inputElem.setAttribute("type", "text");
      } else {
        inputElem.setAttribute("type", "password");
      }
    }
  }

  return (
    <dialog class="border-2 bg-beige rounded-md mx-auto my-auto px-2 py-1">
      <form class="flex flex-col">
        <h1 class="text-center font-bold">New Cluster</h1>
        <div className="cluster-name flex gap-x-2 justify-center items-center my-2">
          <label class="font-semibold" for="cluster-name">Cluster Name</label>
          <input
            type="text"
            name="cluster-name"
            class="border-1 rounded-md py-1 px-2"
            required
          />
        </div>
        <div className="cluster-password flex justify-center gap-x-2 items-center my-2">
          <label for="cluster-name" class="font-semibold">Password</label>
          <input
            ref={inputPasswordRef}
            type="password"
            name="cluster-password"
            class="border-1 rounded-md py-1 px-2 w-[65%] ml-auto"
          />
          <div
            className="toggle-password cursor-pointer"
            onClick={togglePassword}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
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
                  d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>{" "}
                <path
                  d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </g>
            </svg>
          </div>
          <div
            className="generate-password cursor-pointer"
            onClick={generateSafePassword}
          >
            <svg
              fill="#000000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="size-6"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
              </g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.074 6.074 0 0 1 3.414-1.736L8.989 1.8a8.112 8.112 0 0 0-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752 5.51.301-.015-5.834-2.307 2.323zm6.647-11.959l.015 5.834 2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 0 1-3.414 1.736l.069 2.076a8.122 8.122 0 0 0 4.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754-5.51-.3z">
                </path>
              </g>
            </svg>
          </div>
        </div>
        <div className="cluster-otp flex gap-x-2 justify-center items-center my-2">
          <label for="cluster-otp" class="font-semibold">OTP url</label>
          <input
            type="text"
            name="cluster-otp"
            class="border-1 rounded-md py-1 px-2 ml-auto"
          />
        </div>
        <input
          type="submit"
          value="create"
          class="border-1 font-semibold rounded-md px-2 py-1 cursor-pointer"
        />
      </form>
    </dialog>
  );
}

function AddCluster() {
  const dialogRef = useRef(null);

  function showNewClusterTemplate() {
    //const dialog = dialogRef.current;
    //if (dialog) {
    //  const assigned: HTMLDialogElement = dialog;
    //  assigned.showModal();
    //}
    const dialog = dialogRef.current;
    if (dialog) {
      const dialog_component: HTMLDialogElement = dialog.base;
      dialog_component.showModal();
    }
  }

  return (
    <Fragment>
      <button
        onClick={showNewClusterTemplate}
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
      <DialogBox ref={dialogRef} />
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
