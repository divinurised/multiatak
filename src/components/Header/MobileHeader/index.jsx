import { Container, MenuToggled } from './styles';

import Menuicon from '../../../assets/icones_home/menu-hamburguer.svg';
import GrayTriangle from '../../../assets/icones_home/icones_header/triangulo-cinza.svg';
import WhiteTriangle from '../../../assets/icones_home/icones_header/triangulo-branco.svg';
import Logo from '../../../assets/icones_home/logo/logo-header.svg';
import AccountIcon from '../../../assets/icones_home/icones_header/minha-conta-mobile.svg';
import CartIcon from '../../../assets/icones_home/icones_header/carrinho.svg';
import SearchIconMobile from '../../../assets/icones_home/icones_header/lupa-sozinha.svg';
import FooterLogo from '../../../assets/icones_home/logo/logo-footer.svg';

import FlashlightIconGray from '../../../assets/icones_home/icones_categorias/farois-lanternas-cinza.svg';
import SoundVideoIconGray from '../../../assets/icones_home/icones_categorias/som-e-video-cinza.svg';
import InternalAccessoriesIconGray from '../../../assets/icones_home/icones_categorias/acessorios-internos-cinza.svg';
import ExternalAccessoriesIconGray from '../../../assets/icones_home/icones_categorias/acessorios-externos-cinza.svg';
import ClothingsIconGray from '../../../assets/icones_home/icones_categorias/vestuarios-cinza.svg';
import ChildrenIconGray from '../../../assets/icones_home/icones_categorias/infantil-cinza.svg';

function MobileHeader() {
	const showMobileMenu = () => {
		document.getElementById('toggler').style.display = 'flex';
	};
	return (
		<Container>
			<div className="header-container">
				<div className="toggle-menu">
					<div onClick={showMobileMenu}>
						<img src={Menuicon} alt="" />
					</div>
					<img src={GrayTriangle} alt="" />
				</div>

				<div className="header-wrapper">
					<img src={Logo} alt="" />
					<div>
						<img src={AccountIcon} alt="" />
						<img src={CartIcon} alt="" />
						<p>0</p>
					</div>
				</div>
			</div>

			<div className="search-container">
				<img src={WhiteTriangle} alt="" />
				<form action="">
					<input type="text" placeholder="Digite aqui o que você procura..." />
					<button type="submit">
						<img src={SearchIconMobile} alt="" />
					</button>
				</form>
			</div>
			<MenuToggled id="toggler">
				<p>X</p>
				<img src={FooterLogo} alt="" />
				<div>
					<h2>Departamentos</h2>
					<div>
						<img src={FlashlightIconGray} alt="" />
						<p>ASdJSDJALSJ</p>
					</div>
				</div>
			</MenuToggled>
		</Container>
	);
}

export default MobileHeader;
