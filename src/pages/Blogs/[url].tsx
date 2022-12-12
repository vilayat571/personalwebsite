import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Toblogs from "../../atoms/Main/Toblogs";
import Layout from "../../layout/Layout";
import profile from "../../assets/images/me.png";
import { lineHeight } from "@mui/system";

interface IBlog {
  author: number | string;
  body: string;
  description: string;
  id: number;
  image: string;
  title: string;
}

export default function SingleBlog() {
  const { id } = useParams();

  const [blog, setBlog] = useState<IBlog | any>(null);

  useEffect(() => {
    const url = `https://api.vilayatsafarov.com/api/v1/blog/${id}/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  console.log(blog);

  return (
    <Layout>
      <div>
        <Helmet>
          <title>The Vilayat Safarov's blog</title>
        </Helmet>
        {blog ? (
          <div className=" w-full flex mt-24 flex-col justify-between items-center ">
            <div className="w-2/3 mb-8  flex justify-between items-center">
              <div className=" text-left mb-0 text-3xl text-[#fff] ">
                {blog.title}
              </div>

              <div>
                <Toblogs text="Go back " url="/" />
              </div>
            </div>
            <img
              className=" w-2/3 h-[600px] object-cover rounded-md border-0"
              src={blog.image}
              alt=""
            />
            <div className=" w-2/3 text-2xl mt-6 text-[#a9adc1]">
              {blog.description}
            </div>

            <div
              className=" w-2/3 text-lg mt-4 text-white"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          </div>
        ) : (
          ":Loading.."
        )}
        <div className=" mt-24 flex justify-center items-center">
          <div className="w-2/3 flex gap-20 items-start border-t py-8 border-[#4b4c53]">
            <img
              className="w-[140px] border-0 object-cover rounded-3xl"
              src={profile}
              alt=""
            />
            <div className="mt-2 flex flex-col gap-2 items-start">
              <h1 className="text-white text-lg tracking-[0.8px] ">
                Written by Vilayat Safarov
              </h1>
              <p
                style={{ lineHeight: "28px" }}
                className="text-[#a9adc1] w-4/5 tracking-[0.6px] "
              >
                Vilayat Safarov is a software developer. At the same time, he is
                a blogger, motivator and mentor. The main purpose of Wilayat is
                to help people, because Wilayat thinks that it is also helping
                itself. Vilayat is Muslim and lives in Baku, Azerbaijan.
              </p>
              <Toblogs text={'Learn more about author'} url='/' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
