import "../App.css";
import { useEffect, useState } from "preact/hooks";

function SearchBar() {
  return (
    <input
      type="search"
      class="mx-auto my-1 rounded-full py-1 px-3 bg-beige outline-none placeholder:text-center"
      placeholder="search your secrets..."
    />
  );
}

interface OTPOpts {
  strnum: string;
}

function OTP({ strnum }: OTPOpts) {
  const sixDigitCode: number[] = strnum.split("").map((e) => parseInt(e));
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const id = setInterval(() => {
      if (timeLeft == 0) {
        setTimeLeft(60);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timeLeft]);

  return (
    <div className="otp flex-1">
      <div className="slots flex gap-x-2">
        {sixDigitCode.map((code) => {
          return (
            <div className="slot text-xl border-1 px-0.5 rounded-sm">
              {code}
            </div>
          );
        })}
      </div>
      <div className="timer mt-2">
        <img src="src/assets/timer.svg" class="size-6" alt="" />
        <div className="time-left">
          {timeLeft}
        </div>
      </div>
    </div>
  );
}

function Cluster() {
  return (
    <div className="cluster border-1 rounded-md bg-beige grid grid-cols-[25%_75%] py-2">
      <div className="icon-container flex justify-center items-center">
        <img src="src/assets/user.svg" class="size-12" alt="" />
      </div>
      <div className="metadata flex flex-col whitespace-normal break-all gap-y-2">
        <div className="cluster-name text-xl font-semibold">
          Google password
        </div>
        <div className="cluster-email text-xs">
          akbarpersonalmode@gmail.com
        </div>
        <OTP strnum="123456" />
      </div>
    </div>
  );
}

function Clusters() {
  return (
    <div className="mx-4 flex-1">
      <div className="clusters grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-3 gap-x-2">
        <Cluster />
      </div>
    </div>
  );
}

export default function ClusterList() {
  return (
    <div class="m-1 flex flex-col gap-y-2">
      <SearchBar />
      <Clusters />
    </div>
  );
}
