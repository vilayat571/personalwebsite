import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Col1() {
  return (
    <div className=" col-span-1 ">
      <h1 className="text-white tracking-[0.3px] text-[1.2rem] font-medium  ">
        Vilayat Safarov
      </h1>
      <p className=" tracking-[0.3px] mt-2 text-[1rem] text-[#a9adc1]">
        The person who is working
        <br />
        for making our world better
      </p>
      <p className="text-white flex  mt-3">
       
      <a
          className="mr-2 text-3xl "
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="inherit" />
        </a>

        <a
          className="mr-2 text-3xl"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="inherit" />
        </a>
       
      </p>
    </div>
  );
}
