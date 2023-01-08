import { ILayout } from "../../layout/Layout";

export default function ProfileChildren(props: ILayout) {
  return (
    <div className="col-span-4 lg:pl-9 sm:pl-5 md:pl-9 xl:pl-9 pt-[60px]">
      {props.children}
    </div>
  );
}
