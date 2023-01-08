export default function Blogtitle(props: any) {
  return (
    <div className="text-[#fff] text-xl mt-3 flex justify-between">
      <span className="line-clamp-1">{props.title}</span>
    </div>
  );
}
