import Directorytitle from "../../atoms/Footer/Directorytitle";
import { IUrls } from "../../components/Footer/Maindirectory";
import Urls from "../../components/Footer/Urls";

export default function Directory(props: IUrls) {
  return (
    <p className="flex flex-col gap-1 text-[#a9adc1]">
      <Directorytitle title={"Main pages"} />
      <Urls urls={props.urls} />
    </p>
  );
}
