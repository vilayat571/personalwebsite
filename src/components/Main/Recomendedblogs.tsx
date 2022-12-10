import { useEffect } from "react";
import { fetchBlogs } from "../../redux/reducers/blogsReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

export default function Recomendedblogs() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const blogs = useAppSelector((state: RootState) => state.blogsReducer.blogs);

  console.log('Blogs',blogs);

  return (
    <div>
      <h1>Blogs</h1>
    </div>
  );
}
