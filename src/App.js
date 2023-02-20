import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/home/Home';

function App() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='App'>
			<Home />
		</div>
	);
}
export default App;
