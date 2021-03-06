import {
	Container,
	HeaderContainer,
	LogoContainer,
	TextAreaContainer,
	InfoContainer,
	NavContainer,
} from './styles';

import Logo from '../../assets/icones_home/logo/logo-header.svg';
import SearchIcon from '../../assets/icones_home/icones_header/botao-lupa.svg';
import ContactIcon from '../../assets/icones_home/icones_header/atendimento.svg';
import AccountIcon from '../../assets/icones_home/icones_header/minha-conta.svg';
import GrayTriangle from '../../assets/icones_home/icones_header/triangulo-cinza.svg';
import Menuicon from '../../assets/icones_home/menu-hamburguer.svg';
import WhiteTriangle from '../../assets/icones_home/icones_header/triangulo-branco.svg';
import SoundVideoIcon from '../../assets/icones_home/icones_categorias/som-e-video-vermelho.svg';
import FlashlightIcon from '../../assets/icones_home/icones_categorias/farois-lanternas-vermelho.svg';

import FlashlightIconGray from '../../assets/icones_home/icones_categorias/farois-lanternas-cinza.svg';
import SoundVideoIconGray from '../../assets/icones_home/icones_categorias/som-e-video-cinza.svg';
import InternalAccessoriesIconGray from '../../assets/icones_home/icones_categorias/acessorios-internos-cinza.svg';
import ExternalAccessoriesIconGray from '../../assets/icones_home/icones_categorias/acessorios-externos-cinza.svg';
import ClothingsIconGray from '../../assets/icones_home/icones_categorias/vestuarios-cinza.svg';
import ChildrenIconGray from '../../assets/icones_home/icones_categorias/infantil-cinza.svg';

import InternalAccessoriesIcon from '../../assets/icones_home/icones_categorias/acessorios-internos-vermelho.svg';
import ExternalAccessoriesIcon from '../../assets/icones_home/icones_categorias/acessorios-externos-vermelho.svg';
import ClothingsIcon from '../../assets/icones_home/icones_categorias/vestuarios-vermelho.svg';
import ChildrenIcon from '../../assets/icones_home/icones_categorias/infantil-vermelho.svg';
import CartIcon from '../../assets/icones_home/icones_header/carrinho.svg';
import { RiArrowDownSLine } from 'react-icons/ri';

function Header() {
	return (
		<Container>
			<HeaderContainer>
				<LogoContainer>
					<img src={Logo} alt="Logo" />
					<img src={WhiteTriangle} alt="" />
				</LogoContainer>
				<TextAreaContainer>
					<form>
						<input
							type="text"
							placeholder="Digite aqui o que voc?? procura..."
						></input>
					</form>
					<img src={SearchIcon} alt="Pesquisar" />
				</TextAreaContainer>
				<InfoContainer>
					<div className="info-item">
						<img src={ContactIcon} alt="Atendimento" />
						<p>Atendimento</p>
						<RiArrowDownSLine />
					</div>
					<div className="info-item">
						<img src={AccountIcon} alt="Minha conta" />
						<p>Minha conta</p>
						<RiArrowDownSLine />
					</div>
				</InfoContainer>
			</HeaderContainer>
			<NavContainer>
				<div className="departament-container">
					<p>
						<img src={Menuicon} alt="Menu" />
						Todos os <br />
						Departamentos
					</p>
					<img src={GrayTriangle} alt="Triangulo Cinza" />
				</div>
				<ul>
					<li>
						<div>
							<img className="red" src={SoundVideoIcon} alt="Som e V??deo" />
							<img
								className="gray"
								src={SoundVideoIconGray}
								alt="Som e V??deo"
							/>
							<p>
								Som e<br />
								V??deo
							</p>
						</div>
						<div className="path"></div>
					</li>
					<li>
						<div>
							<img
								className="red"
								src={FlashlightIcon}
								alt="Far??is,Lanternas e ilumina????o"
							/>
							<img
								className="gray"
								src={FlashlightIconGray}
								alt="Far??is,Lanternas e ilumina????o"
							/>
							<p>
								Far??is,Lanternas
								<br />e ilumina????o
							</p>
						</div>
						<div className="path"></div>
					</li>
					<li>
						<div>
							<img
								className="red"
								src={InternalAccessoriesIcon}
								alt="Acess??rios Internos"
							/>
							<img
								className="gray"
								src={InternalAccessoriesIconGray}
								alt="Acess??rios Internos"
							/>
							<p>
								Acess??rios
								<br />
								Internos
							</p>
						</div>
						<div className="path"></div>
					</li>
					<li>
						<div>
							<img
								className="red"
								src={ExternalAccessoriesIcon}
								alt="Acess??rios Internos"
							/>
							<img
								className="gray"
								src={ExternalAccessoriesIconGray}
								alt="Acess??rios Internos"
							/>
							<p>
								Acess??rios
								<br />
								Externos
							</p>
						</div>
						<div className="path"></div>
					</li>
					<li>
						<div>
							<img className="red" src={ClothingsIcon} alt="Vestu??rio" />
							<img className="gray" src={ClothingsIconGray} alt="Vestu??rio" />
							<p>Vestu??rio</p>
						</div>
						<div className="path"></div>
					</li>
					<li>
						<div>
							<img className="red" src={ChildrenIcon} alt="Infantil" />
							<img className="gray" src={ChildrenIconGray} alt="Infantil" />
							<p>Infantil</p>
						</div>
						<div className="path"></div>
					</li>
					<img src={CartIcon} alt="" />
					<p>0</p>
				</ul>
			</NavContainer>
		</Container>
	);
}

export default Header;
