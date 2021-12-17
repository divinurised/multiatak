import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	> div {
		display: flex;
		flex-direction: column;
		width: calc(1120px + 70px);
		h2 {
			margin: 0px 20px 20px;
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
		.mobile-buy {
			display: none;
		}
		cursor: pointer;
		width: 245px;
		height: 420px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		border-top: 5px solid #fff;
		> div {
			background: #fff;
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
			background: white;
			.buy-container {
				visibility: visible;
			}
		}
		p {
			font-size: 0.8rem;
			opacity: 0.8;
			margin: 10px 5px;
			text-overflow: ellipsis;
			word-wrap: break-word;
			overflow: hidden;
			max-height: 2.4em;
			line-height: 1.2em;
		}
		p:last-child {
			margin-top: 30px;
		}
		strong {
			color: var(--strong);
		}
	}

	@media (max-width: 1160px) {
		width: 100%;
		> div {
			width: 100%;
			.carousel-container {
				.rec-arrow-left {
					margin-right: -5%;
				}
				.rec-arrow-right {
					margin-left: -5%;
				}
			}
			.carousel-item {
				width: 95%;
				> div {
					width: 100%;
					> img {
						width: 150px;
						height: 150px;
					}
				}
			}
		}
	}
	@media (max-width: 1060px) {
		.carousel-item {
			height: 385px;
			> div {
				height: 385px;
			}
			.mobile-buy {
				width: 100%;
				display: flex;
				justify-content: space-around;
				padding: 0.5rem;
				height: 5rem;
				input {
					width: 90%;
					text-align: center;
					border: 1px solid gray;
					margin-right: 10px;
					font-size: 1.5rem;
					color: gray;
				}
				input[type='number']::-webkit-inner-spin-button,
				input[type='number']::-webkit-outer-spin-button {
					opacity: 1;
					background: red;
				}
				button {
					cursor: pointer;
					border: none;
					background: var(--dark-gray);
					max-width: 50%;
					img {
						width: 25%;
					}
				}
			}
			.buy-container {
				display: none !important;
			}
		}
		> div {
			.carousel-container {
				.rec-arrow-left {
					margin-right: -6%;
				}
				.rec-arrow-right {
					margin-left: -6%;
				}
			}
		}
	}
	@media (max-width: 700px) {
		.rec-arrow {
			display: none;
		}
	}
`;
