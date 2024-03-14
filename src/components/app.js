import { h } from 'preact';
import { Router } from 'preact-router';
import {useEffect, useState} from "preact/hooks";
import { connect } from 'react-redux';
import { changeText } from '../actions/postActions';
import Header from './header';
import SplintrButton from './splintr-button';
import { useSelector, useDispatch } from 'react-redux'
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Products from '../routes/products';
import Product from '../routes/product';
import Checkout from '../routes/checkout';
import Match from 'preact-router/match';
import LearnMoreTop from './learn-more-top';
import Carousel from './carousel';

const App = (props) => {

	const [carousel, setCarousel] = useState(1);
	const [fadeClass, setFdeClass] = useState("fade__in__right");
	
	const guid  = useSelector(({guidState}) => guidState.guidSteps)
	// const nextCarousel = () => {
	// 	console.log(nextCarousel)
	// 	if (carousel<3) {
	// 		setFdeClass('fade__in__right')
	// 		setCarousel(carousel+1)
	// 	}
	// }

	// const backCarousel = () => {
	// 	console.log(backCarousel)
	// 	if (carousel>1) {
	// 		setFdeClass('fade__in__left')
	// 		setCarousel(carousel-1)
	// 	}
	// }

	useEffect(() =>{
		console.log("useEffect in APP")
	})

	return (
		<div id="app">
			 <Overlay guid={guid}/>
			<Match path="/products">{ ({ matches }) => matches && <LearnMoreTop/> }</Match>
			<Match path="/">{ ({ matches }) => !matches && <Header/> }</Match>
			<Router>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Products path="/products/" />
				<Profile path="/profile/:user" />
				<Product path="/product/:name"/>
				<Checkout path="/checkout/"/>
			</Router>
			<Match path="/products">{ ({ matches }) => {
					console.log(matches)
					if (matches) {

						return (<Carousel guid={guid[0]}/>)
					}
				}}
			</Match>
		</div>
	)
}


 const Overlay = ({guid}) =>{

 	return (
 		<>
 		{guid[0].currentIndex>0 && <div class="gf-overlay"></div> }
 		</>
 	)

 }

// const TopBar = () =>{

// 	const [ visible,setVisible] = useState(false)

// 	const showModal = () => {
// 	   setVisible(true)
// 	 }

// 	const hideModal = () => {
// 	   setVisible(false)
// 	 }

// 	return (
// 		<>
// 			<div class="top__bar"> Buy now, pay later with Splintr. <span class="top__learn__more" onClick={showModal}>Learn more</span></div>
// 			<LearnMoreTop  visible={visible}/>
// 		</>
// 	)
// }


export default App;
