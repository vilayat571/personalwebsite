import Authordiv from "./Authordiv";

export default function Authormain() {
  return (
    <div
      className="xl:w-2/3 lg:w-2/3 md:w-full sm:w-full 
 flex sm:flex-col xl:flex-row lg:flex-row md:flex-col gap-x-20
 gap-y-8 items-start border-t py-8 border-[#4b4c53]"
    >
      <Authordiv />
    </div>
  );
}
