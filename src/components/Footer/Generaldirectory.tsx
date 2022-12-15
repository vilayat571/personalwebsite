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

export default function Generaldirectory(props: IMainDirectory) {
  const urls: IUrls["urls"] = [
    {
      url: "",
      name: "FAQ",
    },
    {
      url: "",
      name: "Terms of use",
    },
    {
      url: "",
      name: "Privacy police",
    },

    {
      url: "",
      name: "My mission",
    },
  ];

  return (
    <div className={props.stil}>
      <Directory urls={urls} />
    </div>
  );
}
