interface IAllfilter {
  handleClick(): void;
}
export default function Allfilter(props: IAllfilter) {
  return (
    <button
      onClick={props.handleClick}
      className="rounded-sm text-center tracking-[0.2px] py-3 px-6
               text-sm text-white bg-[#2e3039]"
    >
      all
    </button>
  );
}
