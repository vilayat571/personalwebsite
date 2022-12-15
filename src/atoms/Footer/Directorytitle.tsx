interface ITitle {
  title: string;
}

export default function Directorytitle(props: ITitle) {
  return (
    <span className="text-white mb-2 tracking-[0.3px]">{props.title}</span>
  );
}
