import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header/header";
import Footer from "./layouts/Footer/footer";
import Home from "./pages/home/home";
import NotFound from "./pages/404/404";
import RGB from "./pages/Tools/RGB/RGB";
import Github from "./pages/Tools/Github/Github"
import About from "./pages/About/About";
import Projects_home from "./pages/Projects/Projects";
import Blog_home from "./pages/Blog/Blog";
import BlogPost from "./layouts/BlogPost/BlogPost";
import Tools_home from "./pages/Tools/Tools";

function main() {
	return (
		<Router>
			<Header />
			<div id="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Tools/RGB" element={<RGB />} />
					<Route path="/Tools/Github" element={<Github />} />
					<Route path="/About" element={<About />} />
					<Route path="/Blog" element={<Blog_home />} />
					<Route path="/Blog/:id" element={<BlogPost />} />
					<Route path="/Projects" element={<Projects_home />} />
					<Route path="/Tools" element={<Tools_home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default main;
