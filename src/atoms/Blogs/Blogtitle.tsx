export default function Blogtitle(props: any) {
  return (
    <div className="text-[#a9adc1] text-2xl mt-6 flex justify-between">
      <span className="line-clamp-1">{props.title}</span>
    </div>
  );
}
