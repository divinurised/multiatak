import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	background: var(--background);
	padding-bottom: 120px;
	.newsletter-container {
		height: 4rem;
		width: 1140px;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 80px;
		margin-top: 20px;

		> div {
			display: flex;
			align-items: center;
			img {
				margin-left: 20px;
			}
			> div {
				display: flex;
				align-items: center;
				h5 {
					color: var(--strong);
					margin: 0 70px 0 5px;
				}
				input {
					color: var(--text-gray);
					padding: 0.5rem;
					border: 1px solid var(--text-gray);
					+ input {
						margin-left: 20px;
					}
				}
				button {
					padding: 0.6rem 2rem;
					color: #fff;
					background: var(--strong);
					border: none;
					margin: 0 20px;
					text-transform: uppercase;
					cursor: pointer;
				}
			}
		}
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
		/* height: 600px; */
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
`;
