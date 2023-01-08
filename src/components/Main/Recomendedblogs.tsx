import { memo, useEffect } from "react";
import Blogsdiv from "../../parts/Main/Blogsdiv";
import { fetchBlogs } from "../../redux/reducers/blogsReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

export interface Iblog {
  body: string;
  created_date: string;
  description: string;
  image: string;
  title: string;
  id: number;
}

export default memo(function Recomendedblogs() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogs = useAppSelector((state: RootState) => state.blogsReducer.blogs);

  return (
    <div
      className="h-auto w-full grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
    sm:gap-y-10 md:gap-y-12 xl:gap-y-12 lg:gap-y-12 sm:gap-x-0 md:gap-x-8 xl:gap-x-0 lg:gap-x-4"
    >
      <Blogsdiv blogs={blogs && blogs} />
    </div>
  );
});
