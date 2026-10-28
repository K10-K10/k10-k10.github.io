import Content from "@components/Content";
import Footer from "@components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/about";
import Blog from "./page/blog";
import styles from "./main.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Content title="K10-K10">
        <Link to="/blog"><h1>Blog</h1></Link>
      </Content>
    </>
  );
}

export default function Main() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
