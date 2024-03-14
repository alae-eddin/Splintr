import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
// import style from './style.css';
import Header from '../../components/header';
import SplintrButton from '../../components/splintr-button';
import Footer from '../../components/footer';
import SplintrSelect from '../../components/splintr-select';
import LearnMoreModal from '../../components/learn-more-modal';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, updateCart } from '../../actions/cartActions';

const _productList = [
	{
		id: 1,
		name: "AIR FORCE 1 ’07 UNISEX",
		slug: "air-force-1-07-unisex",
		price: "90",
		images:[
			"/assets/images/shoes1.jpg",
			"/assets/images/shoes2.jpg",
			"/assets/images/shoes3.jpg"
		],
		optionList:[
			{
				label: "Size",
				options: [
					{ 
						text: "38",
						value: "38"
					},
					{ 
						text: "39",
						value: "39"
					},
					{ 
						text: "40",
						value: "40"
					},
					{ 
						text: "41",
						value: "41"
					},
					{ 
						text: "42",
						value: "42"
					},
				]
			},
			{
				label: "Color",
				options: [
					{ 
						text: "White",
						value: "white"
					},
					{ 
						text: "Black",
						value: "black"
					},
					{ 
						text: "Blue",
						value: "blue"
					},
				]
			}
		],
		overview: "The classic slip-on has a low profile, slip-on canvas upper with all-over checker print and elastic side accents. Exquisite and fashionable, these shoes will make your day just a little bit nicer."
	},
	{
		id: 2,
		name: "Classic Low Bridge Sunglasses",
		slug: "classic-low-bridge-sunglasses",
		price: "20",
		images:[
			"/assets/images/Sunglasses.jpg",
			"/assets/images/Sunglasses2.jpg",
			"/assets/images/Sunglasses3.jpg"
		],
		optionList:[],
		overview: "The classic slip-on has a low profile, slip-on canvas upper with all-over checker print and elastic side accents. Exquisite and fashionable, these shoes will make your day just a little bit nicer."
	},
	{
		id: 3,
		name: "Champion T-shirt",
		slug: "champion-t-shirt",
		price: "40",
		images:[
			"/assets/images/t_shirt1.jpg",
			"/assets/images/t_shirt2.jpg",
			"/assets/images/t_shirt3.jpg"
		],
		optionList:[
			{
				label: "Size",
				options: [
					{ 
						text: "S",
						value: "small"
					},
					{ 
						text: "L",
						value: "large"
					},
					{ 
						text: "XL",
						value: "xlarge"
					},
				]
			},
			{
				label: "Color",
				options: [
					{ 
						text: "White",
						value: "white"
					},
					{ 
						text: "Black",
						value: "black"
					},
					{ 
						text: "Blue",
						value: "blue"
					},
				]
			}
		],
		overview: "The classic slip-on has a low profile, slip-on canvas upper with all-over checker print and elastic side accents. Exquisite and fashionable, these shoes will make your day just a little bit nicer."
	},
]

const Product = ({ name, }) => {

	// const [ productList,setProductList] = useState(_productList)
	const [activeImage, setActiveImage] = useState("");
	const [imgFadeIn, setImageFadeIn] = useState("fade__in")

	const productList = useSelector(({carteState}) => carteState.productList)

	const carta = useSelector(({carteState}) => carteState.cart)

	const [calculatedPrice, setCalculatedPrice] = useState(null);

	const dispatch = useDispatch()

	const [ visible,setVisible] = useState(false)

	const showModal = () => {
	   setVisible(true)
	 }

	const hideModal = () => {
	   setVisible(false)
	 }

	// const [cartItem, setCartItem] = useState({item: null, count:cart.length>0 && cart.find(product => product.item.slug === name) ?  cart.find(product => product.item.slug === name).count : 0})
	// const [cartItem, setCartItem] = useState({item: null, count:})

	const [currentProduct,setCurrentProduct] = useState({});

	const changeImage = (e) => {
		// setImageFadeIn('fade__out')
		let index = e.currentTarget.getAttribute("data-index");
		// setTimeout(()=>{
		// 	setImageFadeIn('fade__in')
		// 	setActiveImage(currentProduct.images.[index])
		// },100)
		console.log("changeImage")
		console.log(currentProduct.images)
		setActiveImage(currentProduct.images[index])

	}


	const addItemToCart = () => {

		console.log('Show REDUX CARTA')
		console.log(carta);

		let product = {
			item: currentProduct
		}

		let indexItem;
		if (carta.length>0 && (indexItem = carta.findIndex(product => product.item.id === currentProduct.id))>-1) {
			console.log('Update Carta redux')
			console.log(indexItem)
			let _count = carta[indexItem].count+1
			dispatch(updateCart(_count,indexItem))
		}else{
			console.log('Add to  Carta redux')
			product.count = 1
			console.log(product)
			dispatch(addToCart(product))
		}

		//fix modal issue
		setVisible(false)
		
		
		// setCartItem(product)
		//(product)
	}

	useEffect(() => {

		setCurrentProduct(productList.find(p => p.slug === name))

		if (currentProduct.images){
			setImageFadeIn('fade__in')
			// console.log("Loaaad Imageeeeee")
			// console.log(currentProduct.images[0])
			setActiveImage(currentProduct.images[0])
		}
		setCalculatedPrice(Math.floor(currentProduct.price/6))

		// 	console.log('Updaaaaaaaaaaate CARDAAAAAAAAAAA')
		// 	console.log(name)
		// 	console.log(cart)
		// 	console.log(cart[0])
		// 	console.log(cart.find(product => product.item.name === name))
		// if (cart.length>0 && cart.find(product => product.item.slug === name)) {
		// 	let _cartItem ={
		// 		item: cartItem.item,
		// 		count: cart.find(product => product.item.slug === name).count
		// 	} 
		// 	setCartItem(_cartItem);
		// }


	},[currentProduct])

	return (
		<div>
			{/*<Header cartItem={cartItem}/>*/}
			<div class={`main__container`} >
				<div class="product__page">
					<div class="left__side">
						<div class="principal__img">
							<img src={activeImage}  class={imgFadeIn} key={activeImage}/>
						</div>
						<div class="gallery__img">
						{currentProduct.images && currentProduct.images.map((img,index)=> {

							return (<img src={img} class="image__list" onClick ={changeImage} data-index={index}   />)
						})}
						
						</div>
					</div>
					<div class="right__side">
						<div class="product__title">{currentProduct.name}</div>
						<div class="product__price">€{currentProduct.price}</div>
						<div class="box__info">
							<div class="badge">
								{/*
								<svg role="img" focusable="false" width="60px" height="30px" viewBox="0 0 60 30" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Klarna badge</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M55.5,30 L4.5,30 C2.025,30 0,27.975 0,25.5 L0,4.5 C0,2.0265 2.025,0 4.5,0 L55.5,0 C57.9735,0 60,2.0265 60,4.5 L60,25.5 C60,27.975 57.9735,30 55.5,30" fill="#FFB3C7"></path><path d="M45.74265,18.1758 C44.72265,18.1758 43.89615,17.3928 43.89615,16.4238 C43.89615,15.4578 44.72265,14.6733 45.74265,14.6733 C46.76265,14.6733 47.58915,15.4578 47.58915,16.4238 C47.58915,17.3928 46.76265,18.1758 45.74265,18.1758 L45.74265,18.1758 Z M47.59515,13.0188 L47.59515,13.4568 C47.02065,13.0638 46.32615,12.8313 45.57615,12.8313 C43.59165,12.8313 41.98365,14.4408 41.98365,16.4238 C41.98365,18.4083 43.59165,20.0163 45.57615,20.0163 C46.32615,20.0163 47.02065,19.7853 47.59515,19.3938 L47.59515,19.8288 L49.63515,19.8288 L49.63515,13.0188 L47.59515,13.0188 Z" fill="#000000"></path><path d="M16.04295,9.9843 L13.83045,9.9843 C13.83045,11.7963 12.99945,13.4583 11.54595,14.5473 L10.66995,15.2028 L14.06445,19.8303 L16.85445,19.8303 L13.73145,15.5733 C15.21045,14.0988 16.04295,12.1158 16.04295,9.9843" fill="#000000"></path><polygon fill="#000000" points="8.13525 19.83045 10.40025 19.83045 10.40025 9.98445 8.13525 9.98445"></polygon><polygon fill="#000000" points="17.51175 19.82745 19.64625 19.82745 19.64625 9.98445 17.51175 9.98445"></polygon><path d="M38.3613,12.8364 C37.5483,12.8364 36.7773,13.0899 36.2628,13.7874 L36.2628,13.0209 L34.2333,13.0209 L34.2333,19.8279 L36.2868,19.8279 L36.2868,16.2504 C36.2868,15.2154 36.9813,14.7084 37.8183,14.7084 C38.7123,14.7084 39.2283,15.2424 39.2283,16.2369 L39.2283,19.8279 L41.2638,19.8279 L41.2638,15.4974 C41.2638,13.9149 40.0038,12.8364 38.3613,12.8364" fill="#000000"></path><path d="M24.24015,18.1758 C23.22015,18.1758 22.39365,17.3928 22.39365,16.4238 C22.39365,15.4578 23.22015,14.6733 24.24015,14.6733 C25.26015,14.6733 26.08665,15.4578 26.08665,16.4238 C26.08665,17.3928 25.26015,18.1758 24.24015,18.1758 L24.24015,18.1758 Z M26.09265,13.0188 L26.09265,13.4568 C25.51815,13.0638 24.82365,12.8313 24.07365,12.8313 C22.08915,12.8313 20.48115,14.4408 20.48115,16.4238 C20.48115,18.4083 22.08915,20.0163 24.07365,20.0163 C24.82365,20.0163 25.51815,19.7853 26.09265,19.3938 L26.09265,19.8288 L28.13265,19.8288 L28.13265,13.0188 L26.09265,13.0188 Z" fill="#000000"></path><path d="M31.2846,13.90725 L31.2846,13.02075 L29.1981,13.02075 L29.1981,19.82775 L31.2891,19.82775 L31.2891,16.64925 C31.2891,15.57675 32.4516,15.00075 33.2571,15.00075 C33.2661,15.00075 33.2736,15.00075 33.2826,15.00075 L33.2826,13.02075 C32.4546,13.02075 31.6926,13.37625 31.2846,13.90725" fill="#000000"></path><path d="M51.7983,17.4126 C51.0918,17.4126 50.5188,17.9856 50.5188,18.6936 C50.5188,19.3986 51.0918,19.9716 51.7983,19.9716 C52.5048,19.9716 53.0778,19.3986 53.0778,18.6936 C53.0778,17.9856 52.5048,17.4126 51.7983,17.4126" fill="#000000"></path></g></svg>
								*/}
								<img class="splintr-pay" src="/assets/images/splintr-pay.jpg" />
							</div>
							<div class="text-wrapper">
								<p>Pay <b> ${calculatedPrice} </b> per month for 6 months</p>
								<a href="#" onClick={showModal}>Learn more</a>
							</div>
						</div>
						<div class="product__option">
							{currentProduct.optionList && currentProduct.optionList.map((option,index)=> {
								return(<SplintrSelect _data={option} />)
							})}
						</div>
						<div class="button__buy__ctn"><SplintrButton name="ADD TO BAG" onClick={addItemToCart}/></div>
						<div class="button__checkout__ctn"><SplintrButton name="Splintr. Express Checkout"/></div>
						<div class="product__desc__title"> Overview </div>
						<p class="product__discription">
							{currentProduct.overview}
						</p>
						{/* Start Modal*/}
							<LearnMoreModal visible={visible} price={calculatedPrice} closeModal={hideModal}/>
  				    	{/* End Modal*/}
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Product;
