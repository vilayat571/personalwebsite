import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {  useNavigate } from "react-router-dom";
import { Iblog } from "../../components/Main/Recomendedblogs";
import Layout from "../../layout/Layout";
import { addToWisList } from "../../redux/reducers/addtolistReducer";
import { getBlogs } from "../../redux/reducers/allBlogsReducer";
import { getCategories } from "../../redux/reducers/allcategoriesReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

interface IBlogs {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleClick(id: number): void;
  handleLimit(): void;
  addtoWatchlist(id:number):void;
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

  const [limit, setLimit] = useState<number>(12);

  const handleLimit: IBlogs["handleLimit"] = useCallback(() => {
    setLimit(limit + 12);
    // window.scrollTo(0,document.body.scrollHeight-600)
  }, []);

  const handleChange: IBlogs["handleChange"] = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setQuery(e.target.value);
    },
    []
  );

  const handleClick: IBlogs["handleClick"] = useCallback((id) => {
    dispatch(getBlogs({ id: id, limit: limit }));
  }, []);

  useEffect(() => {
    dispatch(getBlogs({ id: -1, limit: limit }));
    dispatch(getCategories());
  }, [limit]);

  const navigate = useNavigate();

  const filteredData =
    blogs &&
    blogs.filter((item: Iblog) => {
      return item.title.toLowerCase().indexOf(query.toLocaleLowerCase()) != -1;
    });


  const [list,setList]=useState<any>([])

  const addtoWatchlist:IBlogs['addtoWatchlist'] = (id:number) => {
    setList([...list,id]);

    //dispatch(addToWisList(id));
    
  };

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
                <div
                 // to={`/blogs/${blog.id}`}
                  className=" my-6 flex flex-col items-start"
                  key={index}
                >
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
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={() => addtoWatchlist(blog.id)}
                      className="bg-[#2e3039] text-center mt-4 text-white py-3 px-12"
                    >
                      Add to watchlist
                    </button>
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
        <div className="py-8 flex justify-center items-center text-white  w-full h-10 ">
          <button
            onClick={() => handleLimit()}
            className="border border-gray-500 rounded-full text-gray-300 px-16 py-4"
          >
            Load more + (12)
          </button>
        </div>
      </div>
    </Layout>
  );
}
