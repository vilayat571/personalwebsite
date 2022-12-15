import { memo } from "react";
import Footer from "../../components/Footer/Footer";

function Footermain() {
  return (
    <div className="w-full pt-32 mb-20 border-t border-[#4b4c53] flex justify-center items-center">
      <Footer />
    </div>
  );
}
export default memo(Footermain);
