import { Container, MenuToggled } from './styles';

import Menuicon from '../../../assets/icones_home/menu-hamburguer.svg';
import GrayTriangle from '../../../assets/icones_home/icones_header/triangulo-cinza.svg';
import WhiteTriangle from '../../../assets/icones_home/icones_header/triangulo-branco.svg';
import Logo from '../../../assets/icones_home/logo/logo-header.svg';
import AccountIcon from '../../../assets/icones_home/icones_header/minha-conta-mobile.svg';
import AccountIconWhite from '../../../assets/icones_home/icones_header/minha-conta.svg';
import CartIcon from '../../../assets/icones_home/icones_header/carrinho.svg';
import SearchIconMobile from '../../../assets/icones_home/icones_header/lupa-sozinha.svg';
import FooterLogo from '../../../assets/icones_home/logo/logo-footer.svg';
import ProductsCart from '../../../assets/icones_home/carrinho-produtos.svg';

import FlashlightIcon from '../../../assets/icones_home/icones_categorias/farois-lanternas-vermelho.svg';
import SoundVideoIcon from '../../../assets/icones_home/icones_categorias/som-e-video-vermelho.svg';
import InternalAccessoriesIcon from '../../../assets/icones_home/icones_categorias/acessorios-internos-vermelho.svg';
import ExternalAccessoriesIcon from '../../../assets/icones_home/icones_categorias/acessorios-externos-vermelho.svg';
import ClothingsIcon from '../../../assets/icones_home/icones_categorias/vestuarios-vermelho.svg';
import ChildrenIcon from '../../../assets/icones_home/icones_categorias/infantil-vermelho.svg';

function MobileHeader() {
	const showMobileMenu = () => {
		document.getElementById('toggler').style.display = 'flex';
	};
	const closeMobileMenu = () => {
		document.getElementById('toggler').style.display = 'none';
	};
	window.onload = function () {
		document.getElementById('hero').addEventListener('click', function () {
			document.getElementById('toggler').style.display = 'none';
		});
	};
	return (
		<Container>
			<div className="header-container">
				<div className="toggle-menu">
					<div onClick={showMobileMenu}>
						<img src={Menuicon} alt="Menu" />
					</div>
					<img src={GrayTriangle} alt="Triângulo cinza" />
				</div>
				<div className="header-wrapper">
					<img src={Logo} alt="Logo" />
					<div>
						<img src={AccountIcon} alt="Minha Conta" />
						<img src={CartIcon} alt="Carrinho" />
						<p>0</p>
					</div>
				</div>
			</div>
			<div className="search-container">
				<img src={WhiteTriangle} alt="Triângulo branco" />
				<form action="">
					<input type="text" placeholder="Digite aqui o que você procura..." />
					<button type="submit">
						<img src={SearchIconMobile} alt="Pesquisar" />
					</button>
				</form>
			</div>
			<MenuToggled id="toggler">
				<p onClick={closeMobileMenu}>X</p>
				<img src={FooterLogo} alt="Logo" />
				<h2>Departamentos</h2>
				<div className="categories-container">
					<div>
						<img src={SoundVideoIcon} alt="Som e Vídeo" />
						<p>Som e Vídeo</p>
					</div>
					<div>
						<img src={FlashlightIcon} alt="Faróis, Lanternas e Iluminação" />
						<p>Faróis, Lanternas e Iluminação</p>
					</div>
					<div>
						<img src={InternalAccessoriesIcon} alt="Acessórios Internos" />
						<p>Acessórios Internos</p>
					</div>
					<div>
						<img src={ExternalAccessoriesIcon} alt="Acessórios Externos" />
						<p>Acessórios Externos</p>
					</div>
					<div>
						<img src={ClothingsIcon} alt="Vestuários" />
						<p>Vestuários</p>
					</div>
					<div>
						<img src={ChildrenIcon} alt="Infantil" />
						<p>Infantil</p>
					</div>
				</div>
				<div className="categories-container">
					<div>
						<img src={AccountIconWhite} alt="Minha Conta" />
						<p>Minha Conta</p>
					</div>
					<div>
						<p>0</p>
						<img src={ProductsCart} alt="Carrinho" />
						<p>Carrinho</p>
					</div>
				</div>
			</MenuToggled>
		</Container>
	);
}

export default MobileHeader;
