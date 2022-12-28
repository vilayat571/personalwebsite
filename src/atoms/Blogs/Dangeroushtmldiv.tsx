export default function Dangeroushtmldiv(props: any) {
  return (
    <div
      style={{ lineHeight: "44px" }}
      className="line-clamp-2  text-left text-2xl w-full text-[#dfdcdc] "
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
  );
}
