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
      url: "/",
      name: "Home",
    },
    {
      url: "/blogs",
      name: "Blogs",
    },
    {
      url: "/about",
      name: "About",
    },
    {
      url: "/question",
      name: "Ask question",
    },
    {
      url: "/signin",
      name: "Sign in",
    },
    {
      url: "/signup",
      name: "Sign up",
    },
  ];

  return (
    <div className={props.stil}>
      <Directory urls={urls} />
    </div>
  );
}
