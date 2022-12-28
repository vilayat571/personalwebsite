interface IQumessage {
  message: string;
}

export default function Qumessage(props: IQumessage) {
  return (
    <span
      className={
        props.message.length > 1
          ? props.message.indexOf("Sign") !== -1
            ? "fixed md:bottom-3 sm:bottom-3 lg:bottom-8 xl:bottom-8 xl:right-12 lg:right-12 sm:right-5 md:right-5 px-10 rounded-sm py-4 bg-[#fa1130] text-white"
            : "fixed md:bottom-3 sm:bottom-3 lg:bottom-8 xl:bottom-8 xl:right-12 lg:right-12 sm:right-5 md:right-5 px-10 rounded-sm py-4 bg-[#4bb543] text-white"
          : "hidden fixed bottom-8 "
      }
    >
      {props.message}
    </span>
  );
}
