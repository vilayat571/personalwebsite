import Profilelayout from "../../layout/Profilelayout";
import { useEffect, useState } from "react";
import { Iblog } from "../../components/Main/Recomendedblogs";
import { Link } from "react-router-dom";

export default function Watchlist() {
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    const details = localStorage.getItem("userDetails");

    fetch(
      `https://api.vilayatsafarov.com/api/v1/account/wish-list/${
        details && JSON.parse(details).id
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log('Blogs',blogs.wish_list)

  return (
    <Profilelayout>
      <div className="text-white text-xl p-[60px]">
        <div
          className={
            "h-auto w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-y-6 gap-x-12"
          }
        >
          {blogs.length > 0 ? (
            blogs.map((blog: Iblog, index: number) => {
              return (
                <div className=" my-6 flex flex-col items-start" key={index}>
                  <Link className="w-full" to={`/blogs/${blog.id}`}>
                    <img
                      className="rounded-lg  border-0 w-full h-[480px]"
                      src={blog.image}
                      alt=""
                    />
                  </Link>
                  <div className=" mt-0 flex flex-col">
                    <div
                      style={{ lineHeight: "30px" }}
                      className="line-clamp-2 mt-4 text-xl text-white "
                      dangerouslySetInnerHTML={{ __html: blog.body }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-center col-span-3 text-[#a9adc1]">
              Don't have any blog
            </h1>
          )}
        </div>
      </div>
    </Profilelayout>
  );
}
