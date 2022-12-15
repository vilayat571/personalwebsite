import Directory from "../../parts/Footer/Directory";

export interface IUrls {
  urls: {
    url: string;
    name: string;
  }[];
}

interface IMainDirectory {
  stil: string;
}

export default function Maindirectory(props: IMainDirectory) {
  const urls: IUrls["urls"] = [
    {
      url: "",
      name: "Home",
    },
    {
      url: "",
      name: "Blogs",
    },
    {
      url: "",
      name: "Draft",
    },
    {
      url: "",
      name: "About",
    },
    {
      url: "",
      name: "Question",
    },
    {
      url: "",
      name: "Get started",
    },
  ];

  return (
    <div className={props.stil}>
      <Directory urls={urls} />
    </div>
  );
}
