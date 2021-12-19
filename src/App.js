import Header from './components/Header';
import MobileHeader from './components/Header/MobileHeader';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<div className="App">
			<Header />
			<MobileHeader />
			<Banner />
			<Main />
			<Footer />
			<GlobalStyle />
		</div>
	);
}

export default App;
