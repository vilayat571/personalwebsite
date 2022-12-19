interface IMessage{
    message:string;
}

export default function Message(props:IMessage) {
  return (
    <span
    className={
      props.message.length > 1
        ? "rounded-md sm:bottom-3 absolute lg:bottom-8 xl:bottom-8 xl:right-8 lg:right-8 sm:right-5 md:right-5 px-10 py-3 bg-[#fa1130] text-white"
        : "hidden"
    }
  >
    {props.message}
  </span>
  )
}
