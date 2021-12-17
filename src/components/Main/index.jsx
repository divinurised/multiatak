import { useState } from 'react';
import ProductCarousel from '../ProductCarousel';
import { Container } from './styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LeftCategory from '../../assets/icones_home/enfeite-mais-vendidos-esq.svg';
import RightCategory from '../../assets/icones_home/enfeite-mais-vendidos-dir.svg';
import Products from '../../services/api.json';

import NewsletterLogo from '../../assets/Logo_Newsletter.png';

function Main() {
	function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}
	return (
		<Container>
			<div className="separator-container">
				<img src={LeftCategory} alt="" />
				<img src={RightCategory} alt="" />
			</div>
			<ProductCarousel
				item1={Products[0]}
				item2={Products[1]}
				item3={Products[2]}
				item4={Products[3]}
				title="Mais Vendidos"
			/>
			<ProductCarousel
				item1={Products[0]}
				item2={Products[1]}
				item3={Products[2]}
				item4={Products[3]}
				title="Mais Populares"
			/>
			<div className="newsletter-container first-newsletter">
				<div>
					<div className="newsletter-logo">
						<img src={NewsletterLogo} alt="" />
						<h5>Cadastre-se e receba promoções e ofertas exclusivas!</h5>
					</div>
					<div>
						<form action="submit">
							<div>
								<input type="text" placeholder="Nome" />
								<input type="email" placeholder="E-mail" />
							</div>
							<button type="submit">Enviar</button>
						</form>
					</div>
				</div>
			</div>
			<ProductCarousel
				item1={Products[4]}
				item2={Products[5]}
				item3={Products[6]}
				item4={Products[7]}
				title="Se Vista com estilo"
			/>
			<ProductCarousel
				item1={Products[8]}
				item2={Products[5]}
				item3={Products[6]}
				item4={Products[9]}
				title="O frio está chegando"
			/>
			<div className="menu-container">
				<h2>Principais Departamentos</h2>
				<Box sx={{ width: '100%' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="Som Automotivo" {...a11yProps(0)} />
							<Tab label="Bancos e Acessórios" {...a11yProps(1)} />
							<Tab label="Leds" {...a11yProps(2)} />
							<Tab label="Roupas Baby" {...a11yProps(3)} />
							<Tab label="Camisetas Estampadas" {...a11yProps(4)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						<ProductCarousel
							item1={Products[1]}
							item2={Products[1]}
							item3={Products[1]}
							item4={Products[1]}
						/>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<ProductCarousel
							item1={Products[1]}
							item2={Products[2]}
							item3={Products[3]}
							item4={Products[4]}
						/>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<ProductCarousel
							item1={Products[1]}
							item2={Products[2]}
							item3={Products[3]}
							item4={Products[4]}
						/>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<ProductCarousel
							item1={Products[1]}
							item2={Products[2]}
							item3={Products[3]}
							item4={Products[4]}
						/>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<ProductCarousel
							item1={Products[1]}
							item2={Products[2]}
							item3={Products[3]}
							item4={Products[4]}
						/>
					</TabPanel>
				</Box>
			</div>
			<div className="newsletter-container second-newsletter">
				<div>
					<div className="newsletter-logo">
						<img src={NewsletterLogo} alt="" />
						<h5>Cadastre-se e receba promoções e ofertas exclusivas!</h5>
					</div>
					<div>
						<form action="submit">
							<div>
								<input type="text" placeholder="Nome" />
								<input type="email" placeholder="E-mail" />
							</div>
							<button type="submit">Enviar</button>
						</form>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Main;
