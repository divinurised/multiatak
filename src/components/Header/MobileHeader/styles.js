import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 10rem;
	display: none;
	.header-container {
		height: 5rem;
		display: flex;
		background: #fff;
		.toggle-menu {
			display: flex;
			> div {
				display: flex;
				justify-content: center;
				align-items: center;
				background: var(--light-gray);
				height: 100%;
				width: 5rem;
				img {
					height: 80%;
					padding: 20%;
				}
			}
			img:nth-child(2) {
				height: 100%;
			}
		}
		.header-wrapper {
			width: 100vw;
			display: flex;
			justify-content: space-between;
			align-items: center;
			> img {
				width: 30%;
			}
			> div {
				display: flex;
				align-items: center;
				justify-content: space-between;
				max-width: 30%;
				position: relative;
				img:nth-child(1) {
					height: 1%;
				}
				img:nth-child(2) {
					height: 5rem;
				}
				p {
					font-size: 100%;
					position: absolute;
					color: #fff;
					z-index: 3;
					left: 70%;
					top: 10%;
					font-weight: 500;
				}
			}
		}
	}
	.search-container {
		height: 5rem;
		display: flex;
		align-items: center;
		z-index: 1;
		background: var(--dark-gray);
		> img {
			height: 100%;
			z-index: 2;
		}
		form {
			width: 100%;
			display: flex;
			background: var(--light-gray);
			align-items: center;
			height: 70%;
			margin-left: -60px;

			input {
				font-size: 1rem;
				margin-left: 50px;
				height: 70%;
				background: var(--light-gray);
				padding: 0.5rem;
				color: gray;
				border: none;
				width: 100%;
			}
			button {
				border: none;
				background: transparent;
				margin-right: 30px;
				img {
					width: 1.5rem;
				}
			}
		}
	}
	@media (max-width: 1160px) {
		display: flex;
	}
	@media (max-width: 830px) {
		height: 8rem;
		.header-container {
			height: 4rem;
			.toggle-menu {
				> div {
					width: 4rem;
				}
			}
		}
		.header-wrapper {
			> div {
				img:nth-child(2) {
					height: 4rem;
				}
			}
		}
		.search-container {
			height: 4rem;
		}
	}
	@media (max-width: 700px) {
		height: 6rem;
		.header-container {
			height: 3rem;
			.toggle-menu {
				> div {
					width: 3rem;
				}
			}
		}
		.header-wrapper {
			> div {
				gap: 15px;
				img:nth-child(1) {
					height: 1.5rem !important;
				}
				img:nth-child(2) {
					height: 3rem !important;
				}
			}
		}
		.search-container {
			height: 3rem;
			form {
				width: calc(100% + 50px);
			}
		}
	}
	@media (max-width: 500px) {
		height: 4rem;
		.header-container {
			height: 2rem;
			.toggle-menu {
				> div {
					width: 2rem;
				}
			}
		}
		.header-wrapper {
			> img {
				width: 20% !important;
			}
			> div {
				gap: 15px;
				font-size: 0.7rem;
				img:nth-child(1) {
					height: 1.5rem !important;
				}
				img:nth-child(2) {
					height: 2rem !important;
				}
			}
		}
		.search-container {
			height: 2rem;
			form {
				width: calc(100% + 50px);
				input {
					font-size: 0.8rem;
				}
				button {
					img {
						width: 1rem;
					}
				}
			}
		}
	}
`;

export const MenuToggled = styled.div`
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: fit-content;
	z-index: 3;
	background: var(--dark-gray);
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	color: #fff;
	gap: 40px;
	padding: 0 0 4rem;
	> p {
		margin-left: auto;
		padding: 0.5rem;
		color: var(--strong);
		cursor: pointer;
	}
	img {
		width: 80%;
	}
	.categories-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		&:not(:last-child) {
			border-bottom: 5px solid var(--light-gray);
		}
		div:last-child {
			margin-bottom: 20px;
		}
		> div {
			display: flex;
			gap: 20px;
			width: 80%;
			padding: 0.5rem;
			:hover {
				border-bottom: 2px solid var(--strong);
			}
			img {
				width: 2rem;
			}
		}
	}
`;
