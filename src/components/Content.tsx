import AboutPage from "./AboutPage.tsx";
import ClustersPage from "./ClustersPage.tsx";
import ImportPage from "./ImportPage.tsx";
import ExportPage from "./ExportPage.tsx";
import AccountPage from "./AccountPage.tsx";

interface ContentOpts {
  page: string;
}

export default function Content({ page }: ContentOpts) {
  switch (page) {
    case "account":
      return <AccountPage />;
    case "clusters":
      return <ClustersPage />;
    case "import":
      return <ImportPage />;
    case "export":
      return <ExportPage />;
    case "About Passha":
      return <AboutPage />;
  }
}
