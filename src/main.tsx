import { BrowserRouter as Router, useRoutes, RouteObject } from "react-router-dom";
import Header from "@layouts/Header/Header";
import Footer from "@layouts/Footer/Footer";
import Head from "@layouts/Head/Head";

import Home from "@pages/Home/Home";
import NotFound from "@pages/404/404";
import RGB from "@pages/Tools/RGB/RGB";
import Github from "@pages/Tools/Github/Github";
import Ant from "@pages/Tools/Ants/Ants";
import About from "@pages/About/About";
import Blog_home from "@pages/Blog/Blog";
import BlogPost from "@layouts/BlogPost/BlogPost";
import Tools_home from "@pages/Tools/Tools";
import Docs from "@pages/Docs/Docs";

const redirect = sessionStorage.getItem("redirect");
if (redirect) {
    sessionStorage.removeItem("redirect");
    window.history.replaceState(null, "", redirect);
}

const routesConfig: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Blog", element: <Blog_home /> },
  { path: "/Blog/:headName", element: <BlogPost /> },
  { path: "/Docs", element: <Docs /> },
  
  {
    path: "/Tools",
    children: [
      { path: "", element: <Tools_home /> },
      { path: "RGB", element: <RGB /> },
      { path: "Github", element: <Github /> },
      { path: "Ants", element: <Ant /> },
    ]
  },
  
  { path: "*", element: <NotFound /> }
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
      <main>
        {element}
      </main>
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
