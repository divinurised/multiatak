import { Container, BenefitsContainer, MiniBannerContainer } from './styles';
import MainBanner from '../../assets/banners/banner-principal-desk.jpg';
import TruckIcon from '../../assets/icones_home/truck.svg';
import CreditCardIcon from '../../assets/icones_home/credit-card.svg';
import LockIcon from '../../assets/icones_home/lock.svg';
import CircleIcon from '../../assets/icones_home/circle.svg';
import CarBanner from '../../assets/banners/mini-banner-esq.jpg';
import SoundBanner from '../../assets/banners/mini-banner-dir.jpg';
import WhiteTriangle from '../../assets/icones_home/icones_header/triangulo-branco.svg';

function Banner() {
	return (
		<Container>
			<div className="banner-container">
				<div className="left-triangle">
					<img src={WhiteTriangle} alt="" />
				</div>
				<div className="right-triangle">
					<img src={WhiteTriangle} alt="" />
				</div>
				<img src={MainBanner} alt="Banner Principal" />
			</div>
			<BenefitsContainer>
				<div>
					<img src={TruckIcon} alt="" />
					<p>Entregamos para todo o país.</p>
				</div>
				<div>
					<img src={CreditCardIcon} alt="" />
					<p>Parcelamos no cartão.</p>
				</div>
				<div>
					<img src={LockIcon} alt="" />
					<p>Site seguro e confiável.</p>
				</div>
				<div>
					<img src={CircleIcon} alt="" />
					<p>Primeira troca grátis.</p>
				</div>
			</BenefitsContainer>
			<div className="right-triangle"></div>
			<MiniBannerContainer>
				<img src={CarBanner} alt="" />
				<img src={SoundBanner} alt="" />
			</MiniBannerContainer>
		</Container>
	);
}

export default Banner;