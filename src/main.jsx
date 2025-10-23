import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '@layouts/Header/header';
import Footer from '@layouts/Footer/footer';
import Head from '@layouts/Head/Head';

import Home from '@pages/home/home';
import NotFound from '@pages/404/404';
import RGB from '@pages/Tools/RGB/RGB';
import Github from '@pages/Tools/Github/Github';
import Ant from '@pages/Tools/Ants/Ants';
import About from '@pages/About/About';
import Projects_home from '@pages/Projects/Projects';
import Blog_home from '@pages/Blog/Blog';
import BlogPost from '@layouts/BlogPost/BlogPost';
import Tools_home from '@pages/Tools/Tools';
import Docs from '@pages/Docs/Docs';

export default function Main() {
	return (
		<Router>
			<Head title={'Home'} linkTitle={'Home'} description={"K10-K10 site - top page"} />
			<Header />
			<div id='main'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Tools/RGB' element={<RGB />} />
					<Route path='/Tools/Github' element={<Github />} />
					<Route path='/Tools/Ants' element={<Ant />} />
					<Route path='/About' element={<About />} />
					<Route path='/Blog' element={<Blog_home />} />
					<Route path='/Blog/:headName' element={<BlogPost />} />
					<Route path='/Projects' element={<Projects_home />} />
					<Route path='/Tools' element={<Tools_home />} />
					<Route path='*' element={<NotFound />} />
					<Route path='/Docs' element={<Docs />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}
