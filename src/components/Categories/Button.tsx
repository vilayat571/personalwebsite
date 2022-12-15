import { ICategory } from "../../parts/Categories/Categories";

interface IButon{
    category:ICategory;
    handleClick(id: number): void;
}

export default function Button(props:IButon) {
  return (
    <button
      onClick={() => props.handleClick(props.category.id)}
      className="rounded-full text-center tracking-[0.4px] py-3 px-6 text-sm text-white bg-[#2e3039]"
    >
      {props.category.category_name}
    </button>
  );
}

