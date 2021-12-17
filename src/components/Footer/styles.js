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
		margin-bottom: 30px;
	}
	.back-to-top {
		width: 1190px;
		height: 5rem;
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
	> div {
		display: flex;
		width: 1140px;
	}
	.info-container {
		justify-content: space-between;

		a,
		p {
			display: block;
			color: white;
			text-decoration: none;
			font-size: 1rem;
			&:not(:last-child) {
				margin-bottom: 20px;
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
		margin-top: 70px;
		/* display: flex; */
		/* justify-content: space-between; */
		> div {
			display: flex;
			&:first-child {
				margin-right: 5rem;
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
		img {
			width: 10rem;
		}
		p {
			margin-top: 30px;
			color: #6d6d6d;
			font-size: 0.9rem;
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
`;
