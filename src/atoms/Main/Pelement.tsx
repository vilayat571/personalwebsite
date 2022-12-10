interface IPelement {
  text: string;
  stil: string;
}

export default function Pelement(props: IPelement) {
  return <p style={{lineHeight:"45px"}} className={props.stil}>{props.text}</p>;
}
