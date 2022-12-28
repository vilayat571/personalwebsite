import { Iblog } from "../../components/Main/Recomendedblogs";
import Blogpagediv from "./Blogpagediv";

interface IFilteredData {
  filteredData: any;
}

export default function Filtereddata(props: IFilteredData) {
  return (
    <div
      className={
        props.filteredData.length > 0
          ? "h-auto w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-y-6  gap-x-12"
          : "h-auto w-full grid grid-cols-3"
      }
    >
      {props.filteredData.length > 0 ? (
        props.filteredData.map((blog: Iblog, index: number) => {
          return <Blogpagediv blog={blog} key={index} />;
        })
      ) : (
        <h1 className="text-center col-span-3 text-[#a9adc1]">
          Don't have any blog
        </h1>
      )}
    </div>
  );
}
