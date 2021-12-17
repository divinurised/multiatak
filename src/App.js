import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/global';
import Main from './components/Main';
import MobileHeader from './components/Header/MobileHeader';

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
