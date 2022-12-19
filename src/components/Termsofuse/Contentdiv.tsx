interface IContentdiv {
  title: string;
  content: string;
}

export default function Contentdiv(props: IContentdiv) {
  return (
    <div className="xl:mx-24 lg:mx-24 sm:mx-0 md:mx-0">
      <h1 className="text-white text-[28px] tracking-[0.3px] mb-8">
        {props.title}
      </h1>
      <p
        style={{ lineHeight: "30px", fontWeight: "100" }}
        className="text-[#a9adc1] tracking-[0.6px] "
      >
        {props.content}
      </p>
    </div>
  );
}
