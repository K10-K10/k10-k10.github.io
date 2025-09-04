import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './pages/home';
import RGB from './pages/RGB/RGB';
import SE from'./pages/SE/SE';

function main() {
	return (
		<BrowserRouter>
			<Header />
			<div id='main'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/RGB" element={<RGB />} />
					<Route path="/SE" element={<SE />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	)
}

export default main
