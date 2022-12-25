import { ILayout } from "../../layout/Layout";


export default function ProfileChildren(props:ILayout) {
  return (
    <div className="col-span-4 pl-9 pt-[60px]">
       {props.children}
    </div>
  )
}
