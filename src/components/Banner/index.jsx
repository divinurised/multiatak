import { Container, BenefitsContainer, MiniBannerContainer } from './styles';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import MainBanner from '../../assets/banners/banner-principal-desk.jpg';
import MainBannerMobile from '../../assets/banners/banner-principal-mobile.jpg';
import CarBanner from '../../assets/banners/mini-banner-esq.jpg';
import SoundBanner from '../../assets/banners/mini-banner-dir.jpg';
import WhiteTriangle from '../../assets/icones_home/icones_header/triangulo-branco.svg';
import TruckIcon from '../../assets/icones_home/truck.svg';
import CreditCardIcon from '../../assets/icones_home/credit-card.svg';
import LockIcon from '../../assets/icones_home/lock.svg';
import CircleIcon from '../../assets/icones_home/circle.svg';

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
				<BsChevronLeft className="nextPreviousImage left" size={40} />
				<BsChevronRight className="nextPreviousImage right" size={40} />
				<img
					src={MainBanner}
					alt="Banner Principal"
					className="desktop-banner"
				/>
				<img
					src={MainBannerMobile}
					alt="Banner Principal Mobile"
					className="mobile-banner"
				/>
			</div>
			<BenefitsContainer>
				<div>
					<img src={TruckIcon} alt="Frete" />
					<p>Entregamos para todo o país.</p>
				</div>
				<div>
					<img src={CreditCardIcon} alt="Cartão de Crédito" />
					<p>Parcelamos no cartão.</p>
				</div>
				<div>
					<img src={LockIcon} alt="Site Seguro" />
					<p>Site seguro e confiável.</p>
				</div>
				<div>
					<img src={CircleIcon} alt="Troca Grátis" />
					<p>Primeira troca grátis.</p>
				</div>
			</BenefitsContainer>
			<div className="right-triangle"></div>
			<MiniBannerContainer>
				<img src={CarBanner} alt="Mini Banner" />
				<img src={SoundBanner} alt="Mini Banner" />
			</MiniBannerContainer>
		</Container>
	);
}

export default Banner;
