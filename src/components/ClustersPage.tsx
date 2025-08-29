import { MutableRef, useRef, useState } from "preact/hooks";

interface ClusterInfo {
  clusterName: string;
  username: string;
  password: string;
  site: string;
}

export default function ClustersPage() {
  const dialogRef = useRef<HTMLDialogElement>();

  const [clusters, setClusters] = useState<Array<ClusterInfo>>([]);

  function showCredentialsPrompt() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }

  function getSubmission(e: SubmitEvent) {
    if (e.target) {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const clusterName = formData.get("credential-cluster")?.toString();
      const clusterUsername = formData.get("credential-username")?.toString();
      const clusterPassword = formData.get("credential-password")?.toString();
      const clusterSite = formData.get("credential-site")?.toString();

      const newClusterInfo: ClusterInfo = {
        clusterName: clusterName,
        username: clusterUsername,
        password: clusterPassword,
        site: clusterSite,
      };

      setClusters((oldCluster) => [...oldCluster, newClusterInfo]);
    }
  }

  return (
    <>
      <div className="clusters-page p-2 grid auto-rows-min gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {clusters.map((item) => (
          <Cluster
            site={item.site}
            clusterName={item.clusterName}
            password={item.password}
            username={item.username}
          />
        ))}
      </div>
      <button
        onClick={showCredentialsPrompt}
        type="button"
        class="bg-beige absolute bottom-3 right-3 cursor-pointer rounded-sm transition duration-200 ease-in-out shadow-sm hover:shadow-md hover:-translate-y-0.5 px-2 py-2 flex flex-col gap-y-2 justify-center items-center"
      >
        <img src="src/assets/plus.svg" class="size-12" alt="" />
      </button>
      <CredentialsPrompt
        dialogRef={dialogRef}
        submitFn={getSubmission}
      />
    </>
  );
}

interface CredentialsProps {
  dialogRef: MutableRef<HTMLDialogElement | undefined>;
  submitFn: (e: SubmitEvent) => void;
}

function CredentialsPrompt(
  {
    dialogRef,
    submitFn,
  }: CredentialsProps,
) {
  const passwordInputRef = useRef<HTMLInputElement>();
  const passwordInputToggleBtn = useRef<HTMLButtonElement>();
  const passwordInputGenerateBtn = useRef<HTMLButtonElement>();

  function toggleInputType() {
    if (passwordInputRef.current && passwordInputToggleBtn.current) {
      const typeAttrValue = passwordInputRef.current.getAttribute("type");
      if (typeAttrValue && typeAttrValue === "password") {
        passwordInputRef.current.setAttribute("type", "text");
      } else {
        passwordInputRef.current.setAttribute("type", "password");
      }
    }
  }

  return (
    <dialog
      ref={dialogRef}
      class="credential-input-dialog mx-auto my-auto px-2 py-1 bg-beige rounded-md "
    >
      <form onSubmit={submitFn} method="dialog" class="flex flex-col gap-y-2">
        <div className="cluster-name-credential flex flex-col">
          <p class="font-semibold">Name</p>
          <hr />
          <input
            name="credential-cluster"
            type="text"
            class="outline-none"
            placeholder="your cluster name..."
          />
        </div>
        <div className="username-credential flex flex-col">
          <p class="font-semibold">Username</p>
          <hr />
          <input
            name="credential-username"
            type="text"
            class="outline-none"
            placeholder="John Doe"
          />
        </div>
        <div className="password-credential flex flex-col gap-x-1">
          <p class="font-semibold">Password</p>
          <hr />
          <div className="password-field flex gap-x-1 gap-y-1">
            <input
              ref={passwordInputRef}
              name="credential-password"
              type="password"
              class="outline-none"
              placeholder="somesecurepassword"
            />
            <button
              ref={passwordInputToggleBtn}
              onClick={toggleInputType}
              type="button"
              class="toggle-text-to-password cursor-pointer"
            >
              <img src="src/assets/eye.svg" class="size-5" alt="" />
            </button>
            <button
              type="button"
              class="generate-password cursor-pointer"
            >
              <img src="src/assets/cycle.svg" class="size-5" alt="" />
            </button>
          </div>
        </div>
        <div className="site flex flex-col gap-x-1">
          <p class="font-semibold">Site</p>
          <hr />
          <input
            name="credential-site"
            type="text"
            class="outline-none"
            placeholder="google.com"
          />
        </div>
        <input
          type="submit"
          value="create"
          class="font-semibold ml-auto cursor-pointer"
        />
      </form>
    </dialog>
  );
}

function AddNewClusterBtn() {
  const credentialInputDialog = useRef(null);
  const passwordDialogField = useRef(null);

  function showCredentialInputDialog() {
    if (credentialInputDialog.current) {
      const credinput: HTMLDialogElement = credentialInputDialog.current;
      credinput.showModal();
    }
  }

  function toggleInputType() {
    if (passwordDialogField.current) {
      const passwordField: HTMLInputElement = passwordDialogField.current;
      const attributeType = passwordField.getAttribute("type");
      if (attributeType && attributeType === "password") {
        passwordField.setAttribute("type", "text");
      } else {
        passwordField.setAttribute("type", "password");
      }
    }
  }

  return (
    <>
      <button
        onClick={showCredentialInputDialog}
        type="button"
        class="bg-beige absolute bottom-3 right-3 cursor-pointer rounded-sm transition duration-200 ease-in-out shadow-sm hover:shadow-md hover:-translate-y-0.5 px-2 py-2 flex flex-col gap-y-2 justify-center items-center"
      >
        <img src="src/assets/plus.svg" class="size-12" alt="" />
      </button>
      <dialog
        ref={credentialInputDialog}
        class="credential-input-dialog mx-auto my-auto px-2 py-1 bg-beige rounded-md "
      >
        <form method="dialog" class="flex flex-col gap-y-2">
          <div className="cluster-name-credential flex flex-col">
            <p class="font-semibold">Name</p>
            <hr />
            <input
              type="text"
              class="outline-none"
              placeholder="your cluster name..."
            />
          </div>
          <div className="username-credential flex flex-col">
            <p class="font-semibold">Username</p>
            <hr />
            <input type="text" class="outline-none" placeholder="John Doe" />
          </div>
          <div className="password-credential flex flex-col gap-x-1">
            <p class="font-semibold">Password</p>
            <hr />
            <div className="password-field flex gap-x-1 gap-y-1">
              <input
                ref={passwordDialogField}
                type="password"
                class="outline-none"
                placeholder="somesecurepassword"
              />
              <button
                onClick={toggleInputType}
                type="button"
                class="toggle-text-to-password cursor-pointer"
              >
                <img src="src/assets/eye.svg" class="size-5" alt="" />
              </button>
              <button type="button" class="generate-password cursor-pointer">
                <img src="src/assets/cycle.svg" class="size-5" alt="" />
              </button>
            </div>
          </div>
          <input
            type="submit"
            value="create"
            class="font-semibold ml-auto cursor-pointer"
          />
        </form>
      </dialog>
    </>
  );
}

interface ClusterProps {
  clusterName: string;
  site: string;
  username: string;
  password: string;
  otp_url?: string;
}

function Cluster({ clusterName, site, username, password }: ClusterProps) {
  const usernameField = useRef(null);
  const passwordField = useRef(null);

  async function copyUsernameField() {
    if (globalThis.isSecureContext && usernameField.current) {
      const username: HTMLInputElement = usernameField.current;
      await navigator.clipboard.writeText(username.value);
    }
  }

  async function copyPasswordField() {
    if (globalThis.isSecureContext && passwordField.current) {
      const password: HTMLInputElement = passwordField.current;
      await navigator.clipboard.writeText(password.value);
    }
  }

  return (
    <button
      type="button"
      class="bg-beige rounded-sm transition duration-200 ease-in-out shadow-sm hover:shadow-md hover:-translate-y-0.5 px-2 py-2 flex flex-col gap-y-2 justify-center items-center"
    >
      <img src={`https://favicone.com/${site}?s=32`} alt="" />
      <h1 class="font-bold break-all text-2xl text-center">{clusterName}</h1>
      <div className="credentials flex flex-col gap-y-1">
        <div className="username flex gap-x-2">
          <input
            ref={usernameField}
            type="text"
            value={username}
            class="font-semibold"
            readonly
          />
          <button
            onClick={async () => await copyUsernameField()}
            type="button"
            className="copy-username cursor-pointer"
          >
            <img src="src/assets/copy.svg" class="size-6" alt="" />
          </button>
        </div>
        <div className="password flex gap-x-2">
          <input
            ref={passwordField}
            type="password"
            value={password}
            class="font-semibold"
            readonly
          />
          <button
            onClick={async () => await copyPasswordField()}
            type="button"
            className="copy-password cursor-pointer"
          >
            <img src="src/assets/copy.svg" class="size-6" alt="" />
          </button>
        </div>
      </div>
    </button>
  );
}
