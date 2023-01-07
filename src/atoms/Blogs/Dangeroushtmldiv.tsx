export default function Dangeroushtmldiv(props: any) {
  return (
    <div
      style={{ lineHeight: "26px" }}
      className="line-clamp-2 mt-1 text-left text-lg w-full text-[#dfdcdc] "
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
  );
}
