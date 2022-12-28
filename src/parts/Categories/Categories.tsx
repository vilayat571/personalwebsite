import Button from "../../components/Categories/Button";

export interface ICategory {
  id: number;
  category_name: string;
  category: ICategory;
}

interface ICategories {
  limit: number;
  handleClick(id: number): void;
  name: string;
  id: number;
}

export default function Categories(props: ICategories) {
  return (
    <>
      <Button
        handleClick={props.handleClick}
        categoryID={props.id}
        category={props.name}
      />
    </>
  );
}
