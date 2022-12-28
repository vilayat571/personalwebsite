import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Iblog } from "../../components/Main/Recomendedblogs";
import Layout from "../../layout/Layout";
import { getBlogs } from "../../redux/reducers/allBlogsReducer";
import { getCategories } from "../../redux/reducers/allcategoriesReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import Categories from "../../parts/Categories/Categories";
import Searhcbar from "../../parts/Blogs/Searhcbar";
import Loadmore from "../../components/Blogs/Loadmore";
import Allfilter from "../../atoms/Blogs/Allfilter";
import Filterdiv from "../../components/Blogs/Filterdiv";
import Filtereddata from "../../parts/Blogs/Filtereddata";

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

export default React.memo(function Blogs() {
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
        <meta
          name="description"
          content="Learn interview questions from Vilayat Safarov and read blogs: Html & Css & Javascript & React JS and more."
        />
        <meta
          name="keywords"
          content="Vilayat Safarov - Software Developer | Web | SEO"
        />
      </Helmet>
      <div className="flex mt-16 gap-12 flex-col items-center w-full h-auto">
        <Searhcbar query={query} handleChange={(e) => handleChange(e)} />
        <Filterdiv>
          <Allfilter handleClick={() => handleClick(-1)} />
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
        </Filterdiv>
        <Filtereddata filteredData={filteredData} />
        <Loadmore handleLimit={() => handleLimit()} />
      </div>
    </Layout>
  );
});
