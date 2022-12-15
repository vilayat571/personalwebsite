export interface IBtn{
    text:string;
};

export default function Signbutton(props:IBtn) {
  return (
    <button
    className="border-none px-12 mt-2 text-sm rounded-sm py-3
bg-[#2e3039] text-[#fff] "
  >
    {props.text}
  </button>
  )
}
