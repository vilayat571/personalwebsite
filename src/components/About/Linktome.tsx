import Redirecthome from "../../atoms/About/Redirecthome";

export interface ILinktome {
  text: string;
}

export default function Linktome(props: ILinktome) {
  return (
    <div
      className="flex items-start mt-6 xl:mb-0
    md:mb-20 sm:mb-20 lg:mb-0 w-full"
    >
      <Redirecthome text={props.text}  />
    </div>
  );
}
