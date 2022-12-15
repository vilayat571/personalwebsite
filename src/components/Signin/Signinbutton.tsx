import Cancel from "../../atoms/Signin/Cancel";
import Signbutton, { IBtn } from "../../atoms/Signin/Signbutton";

export default function Signinbutton(props: IBtn) {
  return (
    <div className="flex gap-4">
      <Signbutton text={props.text} />
      <Cancel />
    </div>
  );
}
