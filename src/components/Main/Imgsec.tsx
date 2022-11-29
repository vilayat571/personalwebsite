import React from 'react'
import Logo from '../../assets/images/img1.png';


function Imgsec() {
  return (
    <div className="col-span-1 flex xl:justify-end xl:items-start lg:justify-end lg:items-start md:justify-center md:items-start sm:justify-center sm:items-start">
      <img
        style={{ rotate: "0deg" }}
        className="border-0 w-full relative"
        src={Logo}
        alt="rocket"
      />
      
    </div>
  );
}

export default Imgsec;