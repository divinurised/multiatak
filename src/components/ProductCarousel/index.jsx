import { useEffect, useState } from 'react';
import { Container } from './styles';
import Carousel from 'react-elastic-carousel';
import ProductsCart from '../../assets/icones_home/carrinho-produtos.svg';

import BeltProduct from '../../assets/fotos_de_produtos/belt.jpg';
import SoundProduct from '../../assets/fotos_de_produtos/alto falante.jpg';
import AntennaProduct from '../../assets/fotos_de_produtos/antena.jpg';
import BulbsProduct from '../../assets/fotos_de_produtos/lampadas.jpg';
import BlackHoodieProduct from '../../assets/fotos_de_produtos/black-hoodie.jpg';
import RedHoodieProduct from '../../assets/fotos_de_produtos/red-hoodie.jpg';
import GrayHoodieProduct from '../../assets/fotos_de_produtos/gray-hoodie.jpg';
import GreenHoodieProduct from '../../assets/fotos_de_produtos/green-hoodie.jpg';
import BlackTshirtProduct from '../../assets/fotos_de_produtos/black-tshirt.jpg';
import RedTshirtProduct from '../../assets/fotos_de_produtos/red-tshirt.jpg';

function ProductCarousel({ title, item1, item2, item3, item4 }) {
	const [itemImage1, setItemImage1] = useState('');
	const [itemImage2, setItemImage2] = useState('');
	const [itemImage3, setItemImage3] = useState('');
	const [itemImage4, setItemImage4] = useState('');
	const [currentWidth, setCurrentWidth] = useState();
	window.addEventListener(
		'resize',
		function (event) {
			setCurrentWidth(window.innerWidth);
		},
		true
	);
	useEffect(() => {
		function verifyImage() {
			if (item1.name === 'belt') {
				setItemImage1(BeltProduct);
			} else if (item1.name === 'red-tshirt') {
				setItemImage1(RedTshirtProduct);
			} else if (item1.name === 'black-tshirt') {
				setItemImage1(BlackTshirtProduct);
			} else if (item1.name === 'black-hoodie') {
				setItemImage1(BlackHoodieProduct);
			} else if (item1.name === 'gray-hoodie') {
				setItemImage1(GrayHoodieProduct);
			} else if (item1.name === 'green-hoodie') {
				setItemImage1(GreenHoodieProduct);
			} else if (item1.name === 'red-hoodie') {
				setItemImage1(RedHoodieProduct);
			} else if (item1.name === 'sound') {
				setItemImage1(SoundProduct);
			} else if (item1.name === 'bulb') {
				setItemImage1(BulbsProduct);
			} else if (item1.name === 'antenna') {
				setItemImage1(AntennaProduct);
			}
			if (item2.name === 'belt') {
				setItemImage2(BeltProduct);
			} else if (item2.name === 'red-tshirt') {
				setItemImage2(RedTshirtProduct);
			} else if (item2.name === 'black-tshirt') {
				setItemImage2(BlackTshirtProduct);
			} else if (item2.name === 'black-hoodie') {
				setItemImage2(BlackHoodieProduct);
			} else if (item2.name === 'gray-hoodie') {
				setItemImage2(GrayHoodieProduct);
			} else if (item2.name === 'green-hoodie') {
				setItemImage2(GreenHoodieProduct);
			} else if (item2.name === 'red-hoodie') {
				setItemImage2(RedHoodieProduct);
			} else if (item2.name === 'sound') {
				setItemImage2(SoundProduct);
			} else if (item2.name === 'bulb') {
				setItemImage2(BulbsProduct);
			} else if (item2.name === 'antenna') {
				setItemImage2(AntennaProduct);
			}
			if (item3.name === 'belt') {
				setItemImage3(BeltProduct);
			} else if (item3.name === 'red-tshirt') {
				setItemImage3(RedTshirtProduct);
			} else if (item3.name === 'black-tshirt') {
				setItemImage3(BlackTshirtProduct);
			} else if (item3.name === 'black-hoodie') {
				setItemImage3(BlackHoodieProduct);
			} else if (item3.name === 'gray-hoodie') {
				setItemImage3(GrayHoodieProduct);
			} else if (item3.name === 'green-hoodie') {
				setItemImage3(GreenHoodieProduct);
			} else if (item3.name === 'red-hoodie') {
				setItemImage3(RedHoodieProduct);
			} else if (item3.name === 'sound') {
				setItemImage3(SoundProduct);
			} else if (item3.name === 'bulb') {
				setItemImage3(BulbsProduct);
			} else if (item3.name === 'antenna') {
				setItemImage3(AntennaProduct);
			}
			if (item4.name === 'belt') {
				setItemImage4(BeltProduct);
			} else if (item4.name === 'red-tshirt') {
				setItemImage4(RedTshirtProduct);
			} else if (item4.name === 'black-tshirt') {
				setItemImage4(BlackTshirtProduct);
			} else if (item4.name === 'black-hoodie') {
				setItemImage4(BlackHoodieProduct);
			} else if (item4.name === 'gray-hoodie') {
				setItemImage4(GrayHoodieProduct);
			} else if (item4.name === 'green-hoodie') {
				setItemImage4(GreenHoodieProduct);
			} else if (item4.name === 'red-hoodie') {
				setItemImage4(RedHoodieProduct);
			} else if (item4.name === 'sound') {
				setItemImage4(SoundProduct);
			} else if (item4.name === 'bulb') {
				setItemImage4(BulbsProduct);
			} else if (item4.name === 'antenna') {
				setItemImage4(AntennaProduct);
			}
		}
		verifyImage();
	}, [item1.name, item2.name, item3.name, item4.name]);
	const [widthCheck, setWidthCheck] = useState(0);
	useEffect(() => {
		const getCurrentWidth = () => {
			window.addEventListener(
				'resize',
				function (event) {
					setCurrentWidth(window.innerWidth);
				},
				true
			);
			if (currentWidth <= 1060) {
				setWidthCheck(2);
			} else {
				setWidthCheck(4);
			}
		};
		getCurrentWidth();
	}, [currentWidth]);
	return (
		<Container>
			<div className="carousel-wrapper">
				<h2>{title}</h2>
				<Carousel
					itemsToScroll={8}
					itemsToShow={widthCheck}
					className="carousel-container"
				>
					<div className="carousel-item">
						<div>
							<img src={itemImage1} alt="Produto" />
							<p>{item1.title}</p>
							<strong>
								{item1.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item1.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
					<div className="carousel-item">
						<div>
							<img src={itemImage2} alt="Produto" />
							<p>{item2.title}</p>
							<strong>
								{item2.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item2.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
					<div className="carousel-item">
						<div>
							<img src={itemImage3} alt="Produto" />
							<p>{item3.title}</p>
							<strong>
								{item3.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item3.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
					<div className="carousel-item">
						<div>
							<img src={itemImage4} alt="Produto" />
							<p>{item4.title}</p>
							<strong>
								{item4.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item4.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
					<div className="carousel-item">
						<div>
							<img src={itemImage1} alt="Produto" />
							<p>{item1.title}</p>
							<strong>
								{item1.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item1.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
					<div className="carousel-item">
						<div>
							<img src={itemImage2} alt="Produto" />
							<p>{item2.title}</p>
							<strong>
								{item2.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item2.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
					<div className="carousel-item">
						<div>
							<img src={itemImage3} alt="Produto" />
							<p>{item3.title}</p>
							<strong>
								{item3.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item3.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
					<div className="carousel-item">
						<div>
							<img src={itemImage4} alt="Produto" />
							<p>{item4.title}</p>
							<strong>
								{item4.price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</strong>
							<p>
								Em <strong>1x </strong>de{' '}
								<strong>
									{item4.price.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								</strong>
								s/ juros
							</p>
						</div>
						<div className="mobile-buy">
							<input type="number" value="1" name="quantity" min="1" max="10" />
							<button>
								<img src={ProductsCart} alt="Comprar" />
							</button>
						</div>
						<div className="buy-container">
							<img src={ProductsCart} alt="Comprar" />
							<h4>Comprar</h4>
						</div>
					</div>
				</Carousel>
			</div>
		</Container>
	);
}

export default ProductCarousel;
