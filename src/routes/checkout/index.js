import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
// import style from './style.css';
// import Header from '../../components/header';
import SplintrButton from '../../components/splintr-button';
import SplintrSelect from '../../components/splintr-select';
import Cart from '../../components/cart';
import { useSelector, useDispatch } from 'react-redux'
import { toggleShouldHideCart } from '../../actions/cartActions';
import Footer from '../../components/footer';

const Checkout = (props) => {

	// const [ CheckoutList,setCheckoutList] = useState(_CheckoutList)
	const dispatch = useDispatch()
	const [ testUser,setTestUser] = useState({})
	const getTestUser = () => {
		let user = {
			email: "test@email.com",
			firstname:"John",
			lastname: "Doe",
			adress:"629 N High St",
			city:"Dubai",
			zip:"23615",
			phone:"+12025581829"
		}
		setTestUser(user)
	}
	useEffect(() => {
		console.log(" useEffect Checkout")
		dispatch(toggleShouldHideCart(true))
		console.log(props)
		console.log(props.location)
		return () => {
		     // console.log("Leave checkout__page")
		     dispatch(toggleShouldHideCart(false))
		   };
	})

	return (
		<div>
			<div class={`main__container`} >
				<div class="checkout__page">
					<div class="left__side">
						<div class="checkout__head__left__side">
							<h3> Checkout</h3>
							<SplintrButton name="Use test credentials" onClick={getTestUser}/>
						</div>
						<div class="sub__title"> BILLING ADDRESS</div>
						<label class="field field_v1">
				   		    <input class="field__input" name="email" placeholder="Test@gmail.com" value={testUser.email}/>
				   		    <span class="field__label-wrap">
				   		      <span class="field__label">Email</span>
				   		    </span>
		   		  		</label>
		   		  		<div class="input__inline">
	  						<label class="field field_v1">
	  				   		    <input class="field__input" name="firstname" placeholder="John" value={testUser.firstname}/>
	  				   		    <span class="field__label-wrap">
	  				   		      <span class="field__label">First name</span>
	  				   		    </span>
	  		   		  		</label>
	  		   		  		<label class="field field_v1">
	  				   		    <input class="field__input" name="lastname" placeholder="Doe" value={testUser.lastname}/>
	  				   		    <span class="field__label-wrap">
	  				   		      <span class="field__label">Last name</span>
	  				   		    </span>
	  		   		  		</label>
		   		  		</div>
		   		  		<label class="field field_v1">
  				   		    <input class="field__input" name="adress" placeholder="Street" value={testUser.adress}/>
  				   		    <span class="field__label-wrap">
  				   		      <span class="field__label">Address</span>
  				   		    </span>
  		   		  		</label>
		   		  		<div class="input__inline">
	  						<label class="field field_v1">
	  				   		    <input class="field__input" name="city" placeholder="Dubai" value={testUser.city}/>
	  				   		    <span class="field__label-wrap">
	  				   		      <span class="field__label">City</span>
	  				   		    </span>
	  		   		  		</label>
	  		   		  		<label class="field field_v1">
	  				   		    <input class="field__input" name="zip" placeholder="25300" value={testUser.zip}/>
	  				   		    <span class="field__label-wrap">
	  				   		      <span class="field__label">ZIP</span>
	  				   		    </span>
	  		   		  		</label>
		   		  		</div>
  		   		  		<label class="field field_v1">
  				   		    <input class="field__input" name="phone" placeholder="+12025552287" value={testUser.phone}/>
  				   		    <span class="field__label-wrap">
  				   		      <span class="field__label">Phone</span>
  				   		    </span>
		   		  			</label>

		   		  		{/*
		   		  		<div class="shipping__ctn">
		   		  			<div class="sub__title">SHIPPING METHODS</div>
		   		  			<div class="shipping__box">
		   		  				
		   		  			</div>
		   		  		</div>*/}

		   		  		<div class="payments__ctn">
		   		  			<div class="sub__title">PAYMENTS</div>
		   		  			<div class="payments__box">
		   		  				<p>
		   		  				    <input type="radio" id="pay-1" name="radio-group" checked/>
		   		  				    <label for="pay-1">Pay In Installments</label>
		   		  				  </p>
		   		  				  <p>
		   		  				    <input type="radio" id="pay-2" name="radio-group"/>
		   		  				    <label for="pay-2"> Pay After Delivery</label>
		   		  				  </p>
		   		  			</div>
		   		  		</div>
		   		  		<div class="place__order__ctn"><SplintrButton  name="PLACE ORDER"/></div>

					</div>
					<div class="right__side">
						<Cart/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Checkout;
