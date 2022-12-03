interface IPromp {
  text: string;
  stil: string;
}

export default function Promop(props: IPromp) {
  return <p className={props.stil}>{props.text}</p>;
}
