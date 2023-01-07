interface IBldescription {
  title: string;
  body: string;
}

export default function Bldescription(props: IBldescription) {
  return (
    <div className=" mt-0 flex flex-col">
      <div className="text-xl  flex justify-between items-center text-[#fff] mt-6">
        <span>{props.title}</span>
      </div>

      <div
        style={{ lineHeight: "26px" }}
        className="line-clamp-2 text-lg mt-1 text-[#dfdcdc] "
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
    </div>
  );
}
