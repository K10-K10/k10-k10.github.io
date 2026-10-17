import Content from "@components/Content";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./page/about";

function Home() {
  return (
    <>
      <h1>K10-K10</h1>
      <Content>
        <p>K10-K10</p>
        <h1>Blog</h1>
        <h1>読書ログ</h1>
        <h1>
          <Link to="/about">About</Link>
        </h1>
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
      </Routes>
    </BrowserRouter>
  );
}
