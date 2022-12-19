import { memo, useState } from "react";
import Message from "../../components/Signup/Message";
import Formnavigate from "./Formnavigate";

export default memo(function Signupform() {
  const [message, setMessage] = useState<string>("");
  return (
    <div className="flex justify-center h-screen items-center w-full">
      <Formnavigate setMessage={setMessage} />
      <Message message={message} />
    </div>
  );
});
