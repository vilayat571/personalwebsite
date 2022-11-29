import Headercontent from "../../components/Main/Headercontent";

function Header() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-auto">
    <Headercontent />

      
      <div
        className=" col-span-1 flex xl:justify-end xl:items-start
    lg:justify-end lg:items-start
    md:justify-center md:items-start
    sm:justify-center sm:items-start
    
    "
      >
        <img
          style={{ rotate: "24deg" }}
          className="border-0 relative bottom-0"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/space-4551802-3774571.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
