interface ISigninP {
  stil: string;
  content: string;
}

export default function Signtitle(props: ISigninP) {
  return <p className={props.stil}>{props.content}</p>;
}
