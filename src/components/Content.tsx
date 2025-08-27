interface ContentOpts {
  page: string;
}

export default function Content({ page }: ContentOpts) {
  switch (page) {
    case "account":
      return <h1>hello from account</h1>;
    case "clusters":
      return <h1>hello from clusters</h1>;
    case "import":
      return <h1>hello from import</h1>;
    case "export":
      return <h1>hello from export</h1>;
    case "About Passha":
      return <h1>hello from about passha</h1>;
  }
}
