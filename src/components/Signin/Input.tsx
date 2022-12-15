import React from "react";

interface IInputP {
  id: string;
  value: string;
  placeholder: string;
  type: string;
  stil: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Input(props: IInputP) {
  return (
    <input
      className={props.stil}
      onChange={(e) => props.handleChange(e)}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      required={true}
    />
  );
}
