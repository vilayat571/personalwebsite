import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/404/Notfound";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs";
import Singleblog from "./pages/Blogs/[url]";
import Question from "./pages/Question";
import Main from "./pages/Main/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup/Index";
import Termsofuse from "./pages/Termsofuse/Termsofuse";
import Myquestions from "./pages/Profile/Myquestions";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.clear();
   /*  document.onkeydown = function (e) {
      if (e.keyCode === 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        return false;
      }
      if (e.ctrlKey && e.keyCode === 85) {
        return false;
      }
    }; */
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Singleblog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/termsofuse" element={<Termsofuse />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/question" element={<Question />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account/questions" element={<Myquestions />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
