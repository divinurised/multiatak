import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background: var(--background);
	padding-bottom: 50px;
	.newsletter-container {
		height: 4rem;
		width: 1140px;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 80px;
		margin-top: 30px;
		form {
			display: flex;
			width: fit-content;
			padding: 1rem;
		}
		> div {
			display: flex;
			align-items: center;
			.newsletter-logo {
				display: flex;
				align-items: center;
				img {
					margin-left: 20px;
				}
				h5 {
					color: var(--strong);
					margin: 0 10px 0 5px;
				}
			}
			> div {
				display: flex;
				align-items: center;
				input {
					color: var(--text-gray);
					padding: 0.5rem;
					border: 1px solid var(--text-gray);
					width: 45%;
					+ input {
						margin-left: 1rem;
					}
				}
				button {
					padding: 0.6rem 2rem;
					color: #fff;
					background: var(--strong);
					border: none;
					/* margin: 0 20px; */
					text-transform: uppercase;
					cursor: pointer;
				}
			}
		}
	}
	.second-newsletter {
		display: none;
	}
	.separator-container {
		z-index: 1;
		background: var(--background);
		width: 1400px;
		display: flex;
		justify-content: space-between;
		img {
			width: 5.1rem;
		}
	}
	.menu-container {
		width: 1140px;
		.MuiButtonBase-root {
			margin-top: 20px;
			text-transform: none;
			background: var(--lighter-gray);
		}
		.Mui-selected {
			background: #fff;
			color: #000;
			font-weight: bold;
		}
		div[role='tabpanel'] {
			background: #fff;
			height: 420px;
		}
		.MuiTabs-flexContainer {
			button:not(:last-child) {
				border-right: 1px solid var(--semi-light-gray);
			}
		}
		.MuiTabs-indicator {
			display: none;
		}
		.MuiBox-root {
			border-bottom: none;
		}
	}
	@media (max-width: 1400px) {
		.separator-container {
			width: 100%;
			margin-bottom: 20px;
		}
	}
	@media (max-width: 1160px) {
		.newsletter-container {
			width: 85%;
			input {
				width: 30%;
			}
		}
		.menu-container {
			display: none;
		}
		@media (max-width: 1060px) {
			.first-newsletter {
				display: none;
			}
			.second-newsletter {
				display: flex;
				margin-top: 80px;
				text-align: center;
			}
			.newsletter-container {
				height: 100%;
				padding: 1rem 0;
				width: 90%;
				padding: 1rem;
				> div {
					flex-direction: column;
					width: 100%;
					align-items: center;
					justify-content: space-between;
					.newsletter-logo {
						flex-direction: column;
						align-items: center;
						justify-content: center;
						img {
							margin: -4rem 0 20px;
							width: 4rem;
						}
						h5 {
							font-size: 1rem;
							margin: 0 !important;
						}
					}
					> div {
						width: 100%;
					}
					form {
						width: 100%;
						flex-direction: column;
						> div {
							display: flex;
							justify-content: space-between;
							margin: 10px 0;
						}
						input {
							padding: 1rem;
							width: 49%;
							margin: 0 !important;
						}
						button {
							width: 100%;
							padding: 1rem;
							margin: 0 !important;
						}
					}
				}
			}
		}
	}
`;
