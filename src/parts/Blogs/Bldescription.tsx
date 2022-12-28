interface IBldescription{
    title:string;
    body:string;

}

export default function Bldescription(props:IBldescription) {
  return (
    <div className=" mt-0 flex flex-col">
    <div className="text-xl  flex justify-between items-center text-[#fff] mt-6">
      <span>{props.title}</span>
    </div>

    <div
      style={{ lineHeight: "30px" }}
      className="line-clamp-2 mt-4 text-xl text-white "
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
  </div>
  )
}
