import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/404/Notfound";
import Blogs from "./pages/Blogs";
import Singleblog from "./pages/Blogs/[id]";
import Main from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Singleblog />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
