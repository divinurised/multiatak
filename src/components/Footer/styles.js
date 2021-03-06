import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: var(--light-gray);
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2,
	h3 {
		text-transform: uppercase;
		font-weight: normal;
		margin-bottom: 20px;
	}
	> div {
		display: flex;
		width: 1140px;
	}
	.back-to-top {
		width: 1190px;
		height: 5rem;
		z-index: 2;
		button {
			border: none;
			background: none;
			margin-top: -5rem;
			margin-left: auto;
			cursor: pointer;
			img {
				width: 5rem;
			}
		}
	}
	.info-container {
		justify-content: space-between;
		gap: 50px;
		padding: 0 0 3rem;
		width: 70%;
		a,
		p {
			display: block;
			color: white;
			text-decoration: none;
			font-size: 0.9rem;
			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
		.social-media-container {
			img {
				width: 1.5rem;
				height: 1.5rem;
				cursor: pointer;
				&:last-child {
					margin-left: 20px;
				}
			}
		}
	}
	.payment-container {
		width: 70%;
		> div {
			display: flex;
			&:first-child {
				margin-right: 3rem;
			}
		}
		h3 {
			margin-right: 30px;
		}
		img {
			height: 1.8rem;
			&:not(:first-child) {
				margin-left: 10px;
			}
		}
	}
	.footer-logo-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		padding: 3rem 0;
		border-top: 1px solid #252525;
		text-align: center;
		img {
			width: 10rem;
		}
		p {
			margin-top: 30px;
			color: #6d6d6d;
			font-size: 0.8rem;
		}
	}
	.created-by-container {
		display: flex;
		justify-content: center;
		width: 100%;
		background: #fff;

		img {
			pointer-events: none;
			margin-top: 5px 0;
		}
	}
	@media (max-width: 1200px) {
		> div,
		.back-to-top {
			width: 90%;
			z-index: 2;
		}
	}
	@media (max-width: 930px) {
		font-size: 80%;
		.payment-container {
			flex-wrap: wrap;
		}
	}
	@media (max-width: 730px) {
		.back-to-top {
			width: 100%;
			button {
				margin-right: auto;
			}
		}
		.info-container {
			flex-direction: column;
			font-size: 1rem;
			width: 90%;
		}
		h3 {
			font-size: 1.5rem;
		}
		gap: 20px;
		.payment-container {
			width: 90%;
			gap: 20px;
			> div {
				flex-direction: column;
			}
		}
	}
`;
