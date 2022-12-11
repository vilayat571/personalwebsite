import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../redux/reducers/blogsReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

interface Iblog {
  body: string;
  created_date: string;
  description: string;
  image: string;
  title: string;
  id:number;
}

export default function Recomendedblogs() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const blogs = useAppSelector((state: RootState) => state.blogsReducer.blogs);

  return (
    <div className="h-auto w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4">
      {blogs
        ? blogs.map((blog: Iblog, index: number) => {
            return (
              <Link to={`/blogs/${blog.id}`} className="" key={index}>
                <img
                  className="rounded-md w-[380px] h-[480px]"
                  src={blog.image}
                  alt=""
                />
                <div
                  style={{ lineHeight: "44px" }}
                  className="line-clamp-2 mt-4 text-2xl text-white "
                  dangerouslySetInnerHTML={{ __html: blog.body }}
                />
              </Link>
            );
          })
        : "Loading..."}
    </div>
  );
}
