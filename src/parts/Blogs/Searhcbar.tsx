interface ISearhcbar {
  query: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Searhcbar(props: ISearhcbar) {
  return (
    <input
      onChange={props.handleChange}
      value={props.query}
      type="text"
      placeholder="Search.."
      className="xl:w-2/3 lg:w-2/3 md:w-11/12 sm:w-full h-14 outline-none
       placeholder:text-white text-white  text-[15px] tracking-[0.8px]
      indent-6 border border-gray-600 rounded-sm bg-transparent"
    />
  );
}
