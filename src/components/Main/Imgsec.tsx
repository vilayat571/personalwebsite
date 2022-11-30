import Logo from '../../assets/images/img1.png';


function Imgsec() {
  return (
    <div className="col-span-1 flex xl:justify-end xl:items-start sm:mt-16 md:mt-8 xl:mt-0 lg:mt-0  lg:justify-end lg:items-start md:justify-center md:items-start sm:justify-center sm:items-start">
      <img
        style={{ rotate: "0deg" }}
        className="border-0
        object-cover sm:h-96 md:h-96 xl:h-auto lg:h-auto relative"
        src={Logo}
        alt="rocket"
      />
      
    </div>
  );
}

export default Imgsec;