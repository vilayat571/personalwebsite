import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/404/Notfound";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs";
import Singleblog from "./pages/Blogs/[url]";
import Main from "./pages/Main/Main";
import Termsofuse from "./pages/Termsofuse/Termsofuse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Singleblog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/termsofuse" element={<Termsofuse />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
