interface IPelement {
  text: string;
  stil: string;
}

export default function Pelement(props: IPelement) {
  return <p style={{lineHeight:"50px"}} className={props.stil}>{props.text}</p>;
}
