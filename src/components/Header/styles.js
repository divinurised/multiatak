import styled from 'styled-components';

export const Container = styled.div`
	height: 12rem;
	width: 100%;

	display: flex;
	align-items: center;
	flex-direction: column;

	background: var(--light-gray);
`;
export const HeaderContainer = styled.header`
	width: 1120px;

	display: flex;
	align-items: center;
	:before {
		content: '';
		width: 1000px;
		height: 7rem;

		position: absolute;
		margin-left: -1000px;
		z-index: 2;

		background: #fff;
	}
`;
export const LogoContainer = styled.div`
	width: 15rem;
	height: 7rem;

	display: flex;
	align-items: center;
	z-index: 1;

	background: #fff;
	img {
		width: 10rem;
		margin-right: 5rem;
		cursor: pointer;
	}
	img:nth-child(2) {
		width: 7rem;
	}
`;
export const TextAreaContainer = styled.div`
	width: 30rem;
	display: flex;
	form {
		width: 100%;
		z-index: 0;
		background: #242424;
		input {
			width: 90%;
			padding: 0.7rem;
			margin-left: 4rem;
			color: #fff;
			background: #242424;
			border: none;
		}
	}
	img {
		width: 6rem;
		z-index: 1;
		margin-left: -30px;
		cursor: pointer;
	}
`;
export const InfoContainer = styled.div`
	margin-left: 5rem;
	color: #fff;
	display: flex;
	.info-item {
		display: flex;
		align-items: center;
		cursor: pointer;
		font-size: 0.9rem;
		:first-child {
			margin-right: 3rem;
		}
		svg {
			margin-left: 5px;
		}
		img {
			margin-right: 10px;
		}
	}
	img {
		width: 1.2rem;
	}
`;
export const NavContainer = styled.nav`
	width: 1120px;
	height: 5rem;
	display: flex;
	background: var(--dark-gray);
	color: #fff;
	position: relative;
	:after {
		content: '';
		width: 1000px;
		height: 5rem;

		position: absolute;
		/* margin-right: -2000px; */
		right: -84%;
		z-index: 0;

		background: #fff;
	}

	.departament-container {
		display: flex;
		align-items: center;
		img {
			width: 5rem;
			height: fit-content;
			cursor: pointer;
		}
		p {
			cursor: pointer;
			img {
				width: 1.7rem;
				margin-right: 10px;
			}
			width: 10rem;
			height: 5rem;
			display: flex;
			align-items: center;
			background: var(--light-gray);
		}
	}
	:before {
		content: '';
		width: 1000px;
		margin-left: -1000px;
		height: 5rem;
		background: var(--light-gray);
		position: absolute;
		z-index: 2;
	}
	ul {
		list-style: none;
		display: flex;
		align-items: center;
		font-size: 0.8rem;
		li {
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-right: 20px;
			cursor: pointer;
			color: gray;
			> div {
				height: 4rem;
				display: flex;
				align-items: center;
			}
			img {
				width: 1.5rem;
				margin-right: 10px;
			}
			:nth-child(5) {
				img {
					width: 2rem;
				}
			}
			:nth-child(6) {
				img {
					width: 2rem;
				}
			}
			.red {
				display: none;
			}
			:hover {
				.red {
					display: block;
				}
				.gray {
					display: none;
				}
				.path {
					opacity: 1;
				}
			}
		}
		.path {
			opacity: 0;
			width: 6rem;
			height: 1rem;
			-webkit-clip-path: polygon(7% 74%, 82% 73%, 75% 100%, 0% 100%);
			clip-path: polygon(7% 75%, 82% 73%, 75% 100%, 0% 100%);
			background: red;
		}
		> img {
			width: 11rem;
			cursor: pointer;
			z-index: 1;
		}
		> p {
			margin-left: -55px;
			margin-top: -50px;
			font-size: 1rem;
			z-index: 2;
		}
	}
`;
