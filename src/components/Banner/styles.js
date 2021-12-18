import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	> img {
		z-index: 0;
		width: 100%;
	}

	.banner-container {
		display: flex;
		position: relative;
		.mobile-banner {
			display: none;
		}
		.nextPreviousImage {
			position: absolute;
			z-index: 2;
			fill: var(--background);
			border-radius: 50%;
			cursor: pointer;
			opacity: 0.6;
			top: 40%;
			&.right {
				right: 20%;
			}
			&.left {
				left: 20%;
			}
		}
		.left-triangle {
			left: 0%;
			background: transparent;
			position: absolute;
			z-index: 1;
			transform: rotate(-90deg);
			pointer-events: none;
			img {
				width: 45.3rem;
			}
		}
		.right-triangle {
			right: 0%;
			background: transparent;
			position: absolute;
			z-index: 1;
			transform: rotate(-180deg);
			pointer-events: none;
			img {
				width: 45.3rem;
			}
		}
	}
	@media (max-width: 1250px) {
		.right-triangle,
		.left-triangle {
			display: none;
		}
	}
	@media (max-width: 830px) {
		.mobile-banner {
			display: block !important;
			width: 100vw;
			height: 100%;
		}
		.desktop-banner {
			display: none;
		}
		.nextPreviousImage {
			display: none;
		}
	}
`;
export const BenefitsContainer = styled.div`
	width: 1120px;
	display: flex;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 2px;
	font-size: 0.8rem;
	margin-top: -30px;
	z-index: 1;
	color: gray;
	background: #eeeeee;
	box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
	div {
		display: flex;
		align-items: center;
		padding: 1.5rem 2rem;
		background: white;
		gap: 10px;
		height: 7rem;
		img {
			width: 2rem;
			height: 2rem;
		}
	}
	@media (max-width: 1160px) {
		width: 90%;
	}
	@media (max-width: 960px) {
		grid-template-columns: 1fr 1fr;
		text-align: center;
		margin-top: 20px;
		div {
			flex-direction: column;
			align-items: center;
			gap: 15px;
		}
	}
	@media (max-width: 550px) {
		div {
			flex-direction: column;
			align-items: center;
			gap: 20;
			font-size: 100%;
		}
	}
`;
export const MiniBannerContainer = styled.div`
	width: 1120px;
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20px;
	background: #fff;
	z-index: 1;
	img {
		width: calc(50% - 0.5rem);
		cursor: pointer;
	}
	@media (max-width: 1160px) {
		width: 90%;
	}
	@media (max-width: 960px) {
		flex-wrap: wrap;
		gap: 20px;
		img {
			width: 100%;
		}
	}
`;
