import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";

export interface IMenuicons {
  mode: boolean;
  changeMode(): void;
};

export default function Menuicons(props: IMenuicons) {
  return (
    <button
      onClick={() => props.changeMode()}
      className="transition-all transform
    sm:block md:block xl:hidden lg:hidden text-white  w-14 h-14 flex justify-center items-center border-2 p-1 hover:border-white rounded-full border-[#494a51] "
    >
      {!props.mode ? (
        <MenuOutlinedIcon fontSize="medium" />
      ) : (
        <CloseIcon fontSize="medium" />
      )}
    </button>
  );
}
