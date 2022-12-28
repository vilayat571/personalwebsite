export default function Blogimage(props: any) {
  return (
    <img
      className="rounded-md lg:w-[380px] sm:w-[450px] md:w-[380px] xl:w-[380px]
  sm:h-[520px] object-cover lg:h-[480px] xl:h-[480px] md:h-[480px]"
      src={props.img}
      alt="blog appearance"
    />
  );
}
