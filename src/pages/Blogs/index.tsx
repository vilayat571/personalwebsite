import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Iblog } from "../../components/Main/Recomendedblogs";
import Layout from "../../layout/Layout";
import { getBlogs } from "../../redux/reducers/allBlogsReducer";
import { getCategories } from "../../redux/reducers/allcategoriesReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

interface IBlogs {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleClick(id: number): void;
  handleLimit():void;
}

interface ICategory {
  id: number;
  category_name: string;
}

export default function Blogs() {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState<string>("");

  const blogs = useAppSelector(
    (state: RootState) => state.allBlogsReducer.blogs
  );

  const categories = useAppSelector(
    (state: RootState) => state.allcategoriesReducer.categories
  );

const [limit,setLimit]=useState<number>(24);

const handleLimit:IBlogs['handleLimit']=()=>{
  setLimit(limit+12);
  console.log(limit)
}

  const handleChange: IBlogs["handleChange"] = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setQuery(e.target.value);
    //filteredData && window.scrollTo(0,600);
  };

  const handleClick: IBlogs["handleClick"] = (id) => {
    dispatch(getBlogs(id));
  };

  useEffect(() => {
    dispatch(getBlogs(-1));
    dispatch(getCategories());
  }, []);

  const filteredData =
    blogs &&
    blogs.filter((item: Iblog) => {
      return item.title.toLowerCase().indexOf(query.toLocaleLowerCase()) != -1;
    });

  return (
    <Layout>
      <Helmet>
        <title>The Vilayat Safarov blogs</title>
      </Helmet>
      <div className="flex mt-16 gap-12 flex-col items-center w-full h-auto">
        <input
          onChange={(e) => handleChange(e)}
          value={query}
          type="text"
          placeholder="Search a blog"
          className="w-2/3 h-14 outline-none text-white font-thin indent-6 border border-[#4b4c53] rounded-full bg-transparent"
        />

        <div className="flex flex-col mt-6 mb-4 gap-5 text-lg">
          <h1 className=" pl-3 w-full flex items-center text-left tracking-[0.6px] text-[#a9adc1]">
            Filter blogs by category
          </h1>
          <div className=" w-full gap-3 grid grid-cols-7">
            <button
              onClick={() => handleClick(-1)}
              className="rounded-full text-center tracking-[0.4px] py-3 px-6 text-sm text-white bg-[#2e3039]"
            >
              all blogs
            </button>
            {categories
              ? categories.map((category: ICategory, index: number) => {
                  return (
                
                      <button
                        onClick={() => handleClick(category.id)}
                        key={index}
                        className="rounded-full text-center tracking-[0.4px] py-3 px-6 text-sm text-white bg-[#2e3039]"
                      >
                        {category.category_name}
                      </button>
                  
                  );
                })
              : "Loading.."}
          </div>
        </div>
        <div
          className={
            filteredData.length > 0
              ? "h-auto w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4"
              : "h-auto w-full grid grid-cols-3"
          }
        >
          {filteredData.length > 0 ? (
            filteredData.map((blog: Iblog, index: number) => {
              return (
                <Link to={`/blogs/${blog.id}`} className=" my-6" key={index}>
                  <img
                    className="rounded-lg w-[380px] h-[480px]"
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
          ) : (
            <h1 className="text-center col-span-3 text-[#a9adc1]">
              Don't have any blog
            </h1>
          )}
        </div>
        <div className=" flex justify-start items-center text-white  w-full h-10 ">
          <button
          onClick={()=>handleLimit()} 
          className="border border-gray-500 text-gray-300 px-8 py-3"
        >
          Load more
          </button>
        </div>
      </div>
    </Layout>
  );
}
