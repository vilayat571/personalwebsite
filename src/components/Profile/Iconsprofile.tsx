import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { IMenuicons } from "../../atoms/Navbar/Menuicons";

export default function Iconsprofile(props: Partial<IMenuicons>) {
  return (
    <button
      onClick={props.changeMode}
      className=" mt-5 sm:block md:hidden xl:hidden lg:hidden text-white  
      w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
    >
      {!props.mode ? (
        <MenuOutlinedIcon fontSize="medium" />
      ) : (
        <CloseIcon fontSize="medium" />
      )}
    </button>
  );
}
