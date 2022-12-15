import Button from "../../components/Categories/Button";
import { RootState, useAppSelector } from "../../redux/store";

export interface ICategory {
  id: number;
  category_name: string;
}

interface ICategories {
  limit: number;
  handleClick(): void;
}

export default function Categories(props: ICategories) {
  const categories = useAppSelector(
    (state: RootState) => state.allcategoriesReducer.categories
  );

  return (
    <>
      {categories
        ? categories.map((category: ICategory, index: number) => {
            return <Button handleClick={props.handleClick} key={index} category={category} />;
          })
        : "Loading.."}
    </>
  );
}
