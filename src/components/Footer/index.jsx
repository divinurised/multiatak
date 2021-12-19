import { Container } from './styles';

import BackToTopIcon from '../../assets/icones_home/volte-ao-topo.svg';
import FacebookIcon from '../../assets/icones_home/facebook.svg';
import InstagramIcon from '../../assets/icones_home/Instagram.svg';
import VisaIcon from '../../assets/visa.png';
import MastercardIcon from '../../assets/master.png';
import PagseguroIcon from '../../assets/pag-seguro.png';
import EloIcon from '../../assets/elo.png';
import HipercardIcon from '../../assets/hiper.png';
import Billet from '../../assets/boleto.png';
import CorreiosIcon from '../../assets/correios.png';
import PacIcon from '../../assets/pac.png';
import SedexIcon from '../../assets/sedex.png';
import FooterLogo from '../../assets/icones_home/logo/logo-footer.svg';
import EvaFooterLogo from '../../assets/eva-footer.PNG';

function Footer() {
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	return (
		<Container>
			<div className="back-to-top">
				<button onClick={scrollToTop}>
					<img src={BackToTopIcon} alt="Volte ao topo" />
				</button>
			</div>
			<div className="info-container">
				<div>
					<h3>Institucional</h3>
					<a href="/">Política de Venda</a>
					<a href="/">Política de Privacidade</a>
					<a href="/">Trocas e Devoluções</a>
					<a href="/">Entrega</a>
				</div>
				<div>
					<h3>Acesso Rápido</h3>
					<a href="/">Som e Vídeo</a>
					<a href="/">Faróis, Lanterna e Iluminação</a>
					<a href="/">Acessórios Internos</a>
					<a href="/">Acessórios Externos</a>
					<a href="/">Vestuário</a>
					<a href="/">Infantil</a>
				</div>
				<div>
					<h3>Contato</h3>
					<a href="mailto:contato@multiatak.com.br">contato@multiatak.com.br</a>
					<a href="tel:+5517991490815">(17) 99149-0815</a>
					<p>
						Rua Azevedo Rangel, 18 - Centro
						<br /> Urupês-SP, CEP: 15850-000
					</p>
				</div>
				<div className="social-media-container">
					<h3>Redes Sociais</h3>
					<img src={FacebookIcon} alt="Facebook" />
					<img src={InstagramIcon} alt="Instagram" />
				</div>
			</div>
			<div className="payment-container">
				<div>
					<h3>Meios de Pagamento</h3>
					<div>
						<img src={VisaIcon} alt="Visa" />
						<img src={MastercardIcon} alt="mastercard" />
						<img src={PagseguroIcon} alt="pagseguro" />
						<img src={EloIcon} alt="Elo" />
						<img src={HipercardIcon} alt="Hipercard" />
						<img src={Billet} alt="Boleto" />
					</div>
				</div>
				<div>
					<h3>Meios de Envio</h3>
					<div>
						<img src={CorreiosIcon} alt="Correios" />
						<img src={PacIcon} alt="PAC" />
						<img src={SedexIcon} alt="Sedex" />
					</div>
				</div>
			</div>
			<div className="footer-logo-container">
				<img src={FooterLogo} alt="Multiatak" />
				<p>
					Copyright Multiatak - 2020. Todos os direitos reservados,
					13.704.114/0001-64
				</p>
			</div>
			<div className="created-by-container">
				<img src={EvaFooterLogo} alt="Eva Commerce" />
			</div>
		</Container>
	);
}

export default Footer;
