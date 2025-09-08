import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layouts/main/header';
import Footer from './layouts/main/footer';
import Home from './pages/home/home';
import NotFound from './pages/404/404';
import RGB from './pages/RGB/RGB';
import SE from './pages/SE/SE';
import Github from './pages/Github/Github'
import About from './pages/About/About';

function main() {
	return (
		<Router>
			<Header />
			<div id='main'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/RGB" element={<RGB />} />
					<Route path="/SE" element={<SE />} />
					<Route path="/Github" element={<Github />} />
					<Route path="/About" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default main;
