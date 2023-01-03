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
      className=" md:w-full sm:w-full lg:w-4/5 xl:w-3/4 
      xl:py-6 lg:py-6 md:py-0 sm:py-0 rounded-sm 
      xl:border md:border-0 sm:border-0 lg:border
       border-gray-600 justify-center items-start flex flex-col
       xl:px-6 lg:px-6 md:px-0 sm:px-0 xl:mb-0 md:mb-4 sm:mb-6 lg:mb-0"
    >
      <p className="text-left text-lg text-[#fff] w-full"> {props.header}</p>
      <p className="text-left text-sm mt-1 mb-3 text-[#a9adc1] w-full">
        {props.content}
      </p>
      <input
        className=" outline-none  bg-transparent font-thin
     border border-gray-600 text-white  focus:text-white h-20
      rounded-sm lg:w-11/12 sm:w-full md:w-full xl:w-11/12 indent-4"
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
