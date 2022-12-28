interface ILoadmore {
  handleLimit(): void;
}

export default function Loadmore(props: ILoadmore) {
  return (
    <div className="py-8 flex justify-center items-center text-white  w-full h-10 ">
      <button
        onClick={props.handleLimit}
        className="border border-gray-500 rounded-full text-gray-300 px-16 py-4"
      >
        Load more + (12)
      </button>
    </div>
  );
}
