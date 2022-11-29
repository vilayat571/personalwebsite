interface IPelement {
  text: string;
  stil: string;
}

export default function Pelement(props: IPelement) {
  return <p className={props.stil}>
    {props.text}
  </p>
}
