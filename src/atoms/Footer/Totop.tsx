import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ITotop {
  handleClick(): void;
}

export default function Totop() {
  const handleClick: ITotop["handleClick"] = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      onClick={() => handleClick()}
      className="transition-all transform text-white
        w-12 h-12 flex justify-center -z-10
     items-center border-2 p-1 hover:border-white 
     rounded-full border-[#494a51] "
    >
      <ExpandMoreIcon className={"rotate-180"} fontSize="medium" />
    </button>
  );
}
