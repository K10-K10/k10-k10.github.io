import { BrowserRouter as Router, useRoutes, RouteObject } from "react-router-dom";
import Header from "@layouts/Header/Header";
import Footer from "@layouts/Footer/Footer";
import Head from "@layouts/Head/Head";

import Home from "@pages/home/Home";
import NotFound from "@pages/404/404";
import RGB from "@pages/tools/rgb/RGB";
import Github from "@pages/tools/github/Github";
import Ant from "@pages/tools/ants/Ants";
import About from "@pages/about/About";
import Blog_home from "@pages/blog/Blog";
import BlogPost from "@layouts/BlogPost/BlogPost";
import Tools_home from "@pages/tools/Tools";
import Docs from "@pages/docs/Docs";
import TuiDocs from "@pages/docs/tuilib/tuilib_home";
import TuiPost from "@pages/docs/tuilib/tuilib_post";
import { Children } from "react";

const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

const routesConfig: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog_home /> },
  { path: "/blog/:headName", element: <BlogPost /> },
  { path: "/docs", element: <Docs /> },
  {
    path: "/docs/tuilib",
    children: [
      { path: "", element: <TuiDocs /> },
      { path: "docs*", element: <TuiPost /> },
    ],
  },

  {
    path: "/tools",
    children: [
      { path: "", element: <Tools_home /> },
      { path: "rgb", element: <RGB /> },
      { path: "github", element: <Github /> },
      { path: "ants", element: <Ant /> },
    ],
  },

  { path: "*", element: <NotFound /> },
];

function AppContent() {
  const element = useRoutes(routesConfig);
  return (
    <div id="app-layout">
      <Head
        title={"K10-K10 - Home"}
        linkTitle={"Home"}
        description={
          "K10-K10 - Personal portfolio, projects, tools, and blog. Explore software development work and creative projects."
        }
        pageUrl="https://K10-K10.github.io/"
      />
      <Header />
      <main>{element}</main>
      <Footer />
    </div>
  );
}

export default function Main() {
  const baseName = import.meta.env.BASE_URL;

  return (
    <Router basename={baseName}>
      <AppContent />
    </Router>
  );
}
