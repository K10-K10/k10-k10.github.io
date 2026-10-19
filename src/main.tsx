import Content from "@components/Content";
import Footer from "@components/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./page/about";

function Home() {
  return (
    <>
      <h1>K10-K10</h1>
      <Content>
        <h1>Blog</h1>
      </Content>
    </>
  );
}

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blog" element={<Blogs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
