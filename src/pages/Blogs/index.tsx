import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Iblog } from "../../components/Main/Recomendedblogs";
import Layout from "../../layout/Layout";
import { getBlogs } from "../../redux/reducers/allBlogsReducer";
import { getCategories } from "../../redux/reducers/allcategoriesReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import Categories from "../../parts/Categories/Categories";
import Searhcbar from "../../parts/Blogs/Searhcbar";
import Loadmore from "../../components/Blogs/Loadmore";

interface IBlogs {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleClick(id: number): void;
  handleLimit(): void;
  addtoWatchlist(id: number): void;
}

export interface ICategory {
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
    setLimit((limit) => limit + 12);
  }, []);

  const handleChange: IBlogs["handleChange"] = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setQuery(e.target.value);
    },
    [query]
  );

  const handleClick: IBlogs["handleClick"] = useCallback(
    (id) => {
      dispatch(getBlogs({ id: id, limit: limit }));
    },
    [dispatch, limit]
  );

  useEffect(() => {
    dispatch(getBlogs({ id: -1, limit: limit }));
    dispatch(getCategories());
  }, [dispatch, limit]);

  const filteredData =
    blogs &&
    blogs.filter((item: Iblog) => {
      return item.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
    });

  return (
    <Layout>
      <Helmet>
        <title>The Vilayat Safarov blogs</title>
      </Helmet>
      <div className="flex mt-16 gap-12 flex-col items-center w-full h-auto">
        <Searhcbar query={query} handleChange={(e) => handleChange(e)} />

        <div className="flex flex-col mt-6 mb-4 gap-5 text-lg">
              <div className=" w-full gap-3 grid xl:grid-cols-9 lg:grid-cols-7
           md:grid-cols-5 sm:grid-cols-3 ">
            <button
              onClick={() => handleClick(-1)}
              className="rounded-sm text-center tracking-[0.2px] py-3 px-6
               text-sm text-white bg-[#2e3039]"
            >
              all 
            </button>
            {categories
              ? categories.map((category: ICategory, index: number) => {
                  return (
                    <Categories
                      key={index}
                      limit={limit}
                      name={category.category_name}
                      id={category.id}
                      handleClick={() => handleClick(category.id)}
                    />
                  );
                })
              : ""}
          </div>
        </div>
        <div
          className={
            filteredData.length > 0
              ? "h-auto w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-y-6  gap-x-12"
              : "h-auto w-full grid grid-cols-3"
          }
        >
          {filteredData.length > 0 ? (
            filteredData.map((blog: Iblog, index: number) => {
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
                    <div className="text-xl  flex justify-between items-center text-[#a9adc1] mt-6">
                      <span>{blog.title}</span>
                    </div>

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
     
          <Loadmore handleLimit={() => handleLimit()} />
      
      </div>
    </Layout>
  );
}
