import { memo } from "react";
import Blog from "../../components/Blogs/Blog";
import { Iblog } from "../../components/Main/Recomendedblogs";

interface IBlogsdiv {
  blogs: any;
}

export default memo(function Blogsdiv(props: IBlogsdiv) {
  return (
    <>
      {props.blogs &&
        props.blogs.slice(0, 3).map((blog: Iblog, index: number) => {
          return <Blog key={index} blog={blog} />;
        })}
    </>
  );
});
