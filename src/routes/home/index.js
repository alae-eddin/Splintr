import { h } from 'preact';
import style from './style.css';
import SplintrSelect from '../../components/splintr-select';
import SplintrButton from '../../components/splintr-button';


const _splintrSelect = [
	{
		label: "Country",
		options: [
			{ 
				text: "United Kingdom",
				value: "uk"
			},
			{ 
				text: "Germany",
				value: "de"
			},
			{ 
				text: "UAE",
				value: "ar"
			},
		]
	},
	{
		label: "Payment",
		options: [
			{ 
				text: "Splintr Payments",
				value: "sp"
			},
			{ 
				text: "Splintr Checkout",
				value: "sc"
			}
		]
	},
	{
		label: "Select language",
		options: [
			{ 
				text: "English",
				value: "en"
			}
		]
	},
]


const Home = () => (
	<div class={style.home}>
		<div class={style.left}>
			<div class={style.wrapper}>
				<div class={style.page__title}>Welcome to the Demo Store</div>
				<div class={style.page__paragraph}>
					<div class={style.paragraph__description}>
					Splintr connects millions of shoppers and retailers around the world by offering flexible ways to pay. It’s the easiest way for business owners to increase conversion, average order value, and customer satisfaction. Select a payment method and country to get started.
					</div>
					<div class={style.selection__container}>
						<SplintrSelect _data={_splintrSelect[0]} />
						<SplintrSelect _data={_splintrSelect[1]} />
						<SplintrSelect _data={_splintrSelect[2]} />
						<SplintrButton name="Start Demo" link="/products"/>
					</div>
				</div>
			</div>
		</div>
		<div class={style.right}>2</div>
	</div>
);

export default Home;
