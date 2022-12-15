import Signupcontent from "../../components/Signup/Signupcontent";
import Signupform from "../../parts/Signup/Signupform";

export default function Signup() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 w-full h-screen">
      <Signupcontent />
      <Signupform />
    </div>
  );
}
