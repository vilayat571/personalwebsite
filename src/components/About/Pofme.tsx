interface IPofme {
    text: string;
    stil: string;
  }
  
  export default function Pofme(props: IPofme) {
    return <p style={{lineHeight:"38px"}} className={props.stil}>{props.text}</p>;
  }
  
