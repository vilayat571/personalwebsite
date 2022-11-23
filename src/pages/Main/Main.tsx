import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../layout/Layout";
import { fetchUser } from "../../redux/reducers/registerUserReducer";
import { RootState, useAppDispatch } from "../../redux/store";

interface IUser {
  body: string;
  title: string;
  id: number;
  userId: number;
  handleDown(): void;
}

export default function Main() {
  const data = useSelector(
    (state: RootState) => state.registerUserReducer.data
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleDown: IUser["handleDown"] = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Layout>
      <button
        className="text-white px-6 py-2 border-[1px] border-white mb-4"
        onClick={() => handleDown()}
      >
        Down
      </button>
      <div>
        {data &&
          data.map((user: Partial<IUser>) => {
            return (
              <h1 className="text-white mb-4" key={user.id}>
                {user.body}
              </h1>
            );
          })}
      </div>
    </Layout>
  );
}
