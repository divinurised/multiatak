import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	/* max-width: 100; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	> img {
		z-index: 0;
		width: 100%;
	}

	.banner-container {
		display: flex;
		position: relative;
		.left-triangle {
			left: 0%;
			background: transparent;
			position: absolute;
			z-index: 0;
			transform: rotate(-90deg);
			pointer-events: none;
			img {
				width: 45.6rem;
			}
		}
		.right-triangle {
			right: 0%;
			background: transparent;
			position: absolute;
			z-index: 0;
			transform: rotate(-180deg);
			pointer-events: none;
			img {
				width: 45.6rem;
			}
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
	background: #eeeeee;
	box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
	div {
		display: flex;
		align-items: center;
		padding: 1.5rem 2rem;
		background: white;
		img {
			width: 2rem;
			height: 2rem;
			margin-right: 10px;
		}
	}
`;
export const MiniBannerContainer = styled.div`
	width: 1120px;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 3rem;
	background: #fff;
	z-index: 1;
	img {
		width: calc(50% - 1rem);
		cursor: pointer;
	}
`;
