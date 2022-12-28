import Bldescription from "./Bldescription";
import Blimg from "./Blimg";

interface IBlogpageDiv {
  blog: any;
}

export default function Blogpagediv(props: IBlogpageDiv) {
  return (
    <div className=" my-6 flex flex-col items-start">
      <Blimg id={props.blog.id} image={props.blog.image} />
      <Bldescription body={props.blog.body} title={props.blog.title} />
    </div>
  );
}
