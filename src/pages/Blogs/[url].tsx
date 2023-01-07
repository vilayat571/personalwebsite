import { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import Author from "../../parts/Blogs/Author";
import Toblogs from "../../atoms/Main/Toblogs";

interface IBlog {
  author: number | string;
  body: string;
  description: string;
  id: number;
  image: string;
  title: string;
}

export default memo(function SingleBlog() {
  const { id } = useParams();

  const [blog, setBlog] = useState<IBlog | any>(null);

  useEffect(() => {
    const url = `https://api.vilayatsafarov.com/api/v1/blog/${id}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{blog ? blog.title : "The Vilayat Safarov blog "}</title>
          <meta
            name="description"
            content={
              blog
                ? `Learn about - ${blog.description}`
                : "Join people who have read Vilayat's many articles on JavaScript, TypeScript, React, Next JS, and more."
            }
          />
          <meta
            name="keywords"
            content="Learn React, learn JavaScript, learn TypeScript and learn about Software Development"
          />
          <meta property="og:url" content="https://vilayatsafarov.com" />
          <meta
            property="og:title"
            content={blog ? blog.title : "The Vilayat Safarov blog "}
          />
          <meta
            property="og:description"
            content={
              blog
                ? `Learn about - ${blog.description}`
                : "Join people who have read Vilayat's many articles on JavaScript, TypeScript, React, Next JS, and more."
            }
          />
        </Helmet>
        {blog ? (
          <div className=" w-full flex mt-44 flex-col justify-between items-center ">
            <div className="xl:w-2/3 lg:w-2/3 md:w-full sm:w-full mb-8  flex justify-between items-center">
              <div className=" text-left mb-0 text-2xl text-[#fff] ">
                {blog.title}
              </div>

              <div className="md:block xl:block lg:block sm:hidden">
                <Toblogs text="Go back " url="/" />
              </div>
            </div>
            <img
              className=" xl:w-2/3 lg:w-2/3 md:w-auto sm:w-auto 
              sm:h-auto md:h-auto lg:h-[600px] xl:h-[600px] object-cover rounded-md border-0"
              src={blog.image}
              alt=""
            />
            <div className=" xl:w-2/3 lg:w-2/3 md:w-full sm:w-full  text-xl mt-6 text-[#a9adc1]">
              {blog.description}
            </div>

            <div
              className=" xl:w-2/3 lg:w-2/3 md:w-full sm:w-full rounded-xl text-normal mt-4 text-white"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          </div>
        ) : (
          ":Loading.."
        )}

        <Author />
      </div>
    </Layout>
  );
});
