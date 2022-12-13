interface IPbrelement {
  stil: string;
  text1: string;
  text2: string;
}

export default function Pbrelement(props: IPbrelement) {
  return (
    <p className={props.stil}>
      {props.text1}
      <br />
      {props.text2}
    </p>
  );
}
