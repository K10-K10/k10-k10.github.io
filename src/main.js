import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './pages/home/home';
import NotFound from './pages/404/404';
import RGB from './pages/RGB/RGB';
import SE from './pages/SE/SE';

function main() {
	return (
		<Router>
			<Header />
			<div id='main'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/RGB" element={<RGB />} />
					<Route path="/SE" element={<SE />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default main
