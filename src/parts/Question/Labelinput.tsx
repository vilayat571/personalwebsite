import React from "react";

interface ILabelInput {
  header: string;
  content: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
  value: string;
}

export default function Labelinput(props: ILabelInput) {
  return (
    <label
      htmlFor={props.id}
      className=" md:w-full sm:w-full lg:w-4/5 xl:w-3/4 py-6 rounded-md bg-[#2e3039] justify-center px-6
     items-start flex flex-col"
    >
      <p className="text-left text-lg text-[#fff] w-full"> {props.header}</p>
      <p className="text-left text-sm mt-1 mb-3 text-[#a9adc1] w-full">
        {props.content}
      </p>
      <input
        className=" outline-none  bg-transparent font-thin
     border border-gray-600 text-white  focus:text-white h-20 rounded-md lg:w-4/5 sm:w-full md:w-full xl:w-4/5 indent-4"
        onChange={(e) => props.handleChange(e)}
        id={props.id}
        value={props.value}
        placeholder=""
        type="text"
        required={true}
      />
    </label>
  );
}
