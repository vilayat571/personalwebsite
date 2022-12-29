import main from "../../assets/images/main.webp";

export default function Imgsec() {
  return (
    <div
      className="col-span-1 flex xl:justify-end xl:items-start sm:mt-16 md:mt-8
    xl:mt-0 lg:mt-0  lg:justify-end lg:items-start md:justify-center -z-10
     md:items-start sm:justify-center sm:items-start"
    >
      <img
        style={{ rotate: "0deg" }}
        className=" xl:object-fill lg:object-fill md:object-fill sm:object-cover
         sm:h-96 md:h-96 xl:h-auto lg:h-auto border-0 relative"
        src={main}
        alt="programming analysis"
      />
    </div>
  );
}
