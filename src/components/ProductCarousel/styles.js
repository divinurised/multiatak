import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	/* background: var(--background); */
	> div {
		display: flex;
		flex-direction: column;
		width: calc(1120px + 70px);
		h2 {
			margin: 0px 30px 20px;
		}
	}
	.carousel-container {
		display: flex;
		justify-content: center;
		.rec-swipable {
		}
		.rec-pagination {
			display: none;
		}
		.rec-arrow-left {
			margin-right: -60px;
			:after {
				content: '❮';
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				z-index: 1;
				color: black;
			}
		}
		.rec-arrow-right {
			margin-left: -60px;
			:after {
				content: '❯';
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				z-index: 1;
				color: black;
			}
		}
		.rec-arrow {
			border-radius: 0;
			box-shadow: none;
			position: relative;
			background: transparent;
			z-index: 1;
			margin-top: -8rem;
			:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				display: block;
				transform: rotate(45deg);
				box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
				z-index: 0;
				background: var(--background);
			}
			:hover {
				background: transparent;
				box-shadow: none;
			}
		}
	}
	.carousel-item {
		cursor: pointer;
		width: 245px;
		height: 420px;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		> div {
			background: white;
			width: 245px;
			height: 420px;
			> img {
				margin-top: 30px;
				height: 160px;
			}
		}
		.buy-container {
			visibility: hidden;
			height: 4rem;
			width: 95%;
			background: var(--dark-gray);
			display: flex;
			justify-content: center;
			align-items: center;
			text-transform: uppercase;
			color: #fff;
			margin: 5px;
			img {
				width: 1.5rem;
				height: fit-content;
				margin: 0 10px 0 0;
			}
		}
		:hover {
			border-top: 5px solid var(--strong);
			z-index: 2;
			background: white;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			.buy-container {
				visibility: visible;
			}
		}
		p {
			font-size: 0.8rem;
			opacity: 0.8;
			margin: 10px 5px;
		}
		p:last-child {
			margin-top: 30px;
		}
		strong {
			color: var(--strong);
		}
	}
`;
