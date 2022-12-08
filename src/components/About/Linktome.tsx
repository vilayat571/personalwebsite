import Redirecthome from "../../atoms/About/Redirecthome";

interface ILinktome {
  text: string;
  url: string;
}

export default function Linktome(props: ILinktome) {
  return (
    <div className="flex items-start mt-10 w-full">
     <Redirecthome text={props.text} url={props.url} />
    </div>
  );
}
