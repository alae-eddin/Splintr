import { h } from 'preact';
import { Link } from 'preact-router/match';
import {useEffect, useState, useRef} from "preact/hooks";
import style from './style.css';
import Cart from '../../components/cart';
import { useSelector, useDispatch } from 'react-redux'
import LearnMoreModal from '../learn-more-modal';
import SplintrButton from '../splintr-button';

const Header = (props) => {
	const [showCart, setShowCart] = useState(false);
	const [fadeOut, setFadeOut] = useState("");
	// const [cart, setCart] = useState(useSelector(state => state.cart));
	const [count, setCount] = useState(0);
	const cartNode = useRef();

	const [calculatedPrice, setCalculatedPrice] = useState(0);

	const cart = useSelector(({carteState}) => carteState.cart)
	const total = useSelector(({carteState}) => carteState.total)
	const shouldHideCart = useSelector(({carteState}) => carteState.shouldHideCart)
const totala = useSelector(({carteState}) => carteState.total)

	const [ visible,setVisible] = useState(false)

	const showModal = () => {
	   setVisible(true)
	   hideCart();
	}

	const hideModal = () => {
	   setVisible(false)
	 }

	function hideCart(){
		setFadeOut(style.fade__out__top);
		setTimeout(() => {
			setShowCart(false)
			setFadeOut("");
		},500)
	}

	const toggleCart = () => {
		// setShowCart(!showCart)
		// console.log('cart')
		// console.log(cart)
		// console.log(useSelector(state => state.cart))

		// setCount(count+1)
		// console.log(props.cartItem.item.id)
		if (showCart == true) hideCart()
		if (showCart == false){
			setShowCart(true)
			setVisible(false)
		}
		
	}

	useEffect(() => {
		console.log("On Init HEADER shouldHideCart")
		console.log(props)
		console.log(shouldHideCart)
	},[])
	useEffect(() => {

	    if (showCart) {
	      document.addEventListener('mousedown', clickOutsideCart);
	    } else {
	      document.removeEventListener('mousedown', clickOutsideCart);
	    }
	    return () => {
	      document.removeEventListener('mousedown', clickOutsideCart);
	    };
    }, [showCart]);

	const clickOutsideCart = (e) => {
		// console.log(e)
		// console.log(e.target)
		// console.log(cartNode.current)
		if (cartNode.current && cartNode.current.contains(e.target) || e.target.classList.contains("js_add_cart") ) {
		// inside click
			return;
		}
		// outside click
		hideCart()
	};

	useEffect(() => {

		console.log("useEffect setCount CART CHANGED")
		// console.log(cart)
		// console.log(JSON.parse(cart))
		setCount(cart.reduce((accum,item) => accum + item.count, 0))
		// if (count>0 ) setShowCart(true)
		

	// },[cart,props.cartItem,cartUpdated])
	},[cart])

	useEffect(() => {
		if (count>0 ) setShowCart(true)
		setCalculatedPrice(Math.floor(total/6))
	},[count])


	return(
		<>
		<header class={style.header}>
			<a class="shouldHide" href="/">
				{/*<img id="demo-store" src="https://www.klarna.com/demo/static/images/demostore_logo.svg" alt="DemoStore logo"/>*/}
				<img id="demo-store" src="/assets/images/logo.svg" alt="DemoStore logo"/>
			</a>
			{shouldHideCart==false &&
				<div ref={cartNode}>
					<div id="cart-container" class={style.cart__btn} onClick={toggleCart}>
						<img id="cart-icon" src="https://demo.klarna.dev/static/images/bag_nav.svg" alt="Cart icon"/>
						{count>0 && <div id="cart-items-no-container">{count}</div>}
					</div>
					{showCart == true && 
						<div class={style.cart__content+" "+style.fade__in__top+" "+fadeOut} >
							<div class={style.cart__head}>
								<div class={style.cart__title}>SHOPPING BAG</div>
								<svg focusable="false" height="20" width="20"><path d="M16.3,13.9375 L10.714,8.3515 C10.323,7.9605 9.691,7.9605 9.3,8.3515 L3.714,13.9375 L2.3,12.5235 L7.886,6.9375 C9.056,5.7675 10.958,5.7675 12.128,6.9375 L17.714,12.5235 L16.3,13.9375 Z" fill="rgba(23, 23, 23, 1)" style="transition: fill 0.2s ease 0s;"></path></svg>
							</div>
							<hr class={style.cart__hr}/>
							<Cart count={count}/>
							{count>0 && 
								<>
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
									<div class="btn__checkout__container">
										<SplintrButton name="Checkout" link="/checkout"/>
									</div>
								</>
							}
						</div>
					}
				</div>
			}
		</header>
		{/* Start Modal*/}
														<LearnMoreModal visible={visible} price={calculatedPrice}  closeModal={hideModal} />
							  				    	{/* End Modal*/}
		</>
	)
};


// const mapStateToProps = (state,ownProps) =>{
//   // let id = ownProps.match.params.id
//   return {
//     posts: state.posts
//   }
// }


// const mapDipatchToProps = (dispatch) => {
//   return{
//     // changeText: (txt) => { dispatch({type: 'change_text', txt: txt }) }
//     changeText: (txt) => { dispatch(changeText(txt)) }
//   }
// }

// export default connect(mapStateToProps, mapDipatchToProps)(Header);


export default Header;


// https://demo.klarna.dev/static/images/bag_nav.svg
// https://www.klarna.com/demo/static/images/bag_nav.svg