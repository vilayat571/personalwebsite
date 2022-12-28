export default function Singlequestion(props: any) {
  return (
    <div
      className="col-span-1 border border-gray-600  xl:w-4/5 lg:w-4/5 sm:w-11/12 md:w-11/12 px-6   py-4"
    >
      <p className="text-white text-lg">{props.question.title}</p>
      <p className="text-[#a9adc1] mt-2 flex justify-between">
        <span>{props.question.subject}</span>
      </p>
    </div>
  );
}
