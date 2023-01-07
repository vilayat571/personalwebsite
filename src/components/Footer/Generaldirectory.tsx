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
      url: "/termsofuse",
      name: "FAQ",
    },
    {
      url: "/termsofuse",
      name: "Terms of use",
    },
    {
      url: "/termsofuse",
      name: "Privacy police",
    },

    {
      url: "/termsofuse",
      name: "My mission",
    },
  ];

  return (
    <div className={props.stil}>
      <Directory urls={urls} />
    </div>
  );
}
