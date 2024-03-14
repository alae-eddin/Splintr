import { h } from 'preact';
import { useSelector, useDispatch } from 'react-redux'
import { updateCart, updateTotal, removeItemFromCart } from '../../actions/cartActions';
import {useEffect, useState} from "preact/hooks";
import SplintrButton from '../splintr-button';
import LearnMoreModal from '../learn-more-modal';

const Cart = ({count}) => {

	const cart  = useSelector(({carteState}) => carteState.cart)
	const total = useSelector(({carteState}) => carteState.total)
	const dispatch = useDispatch()
	// const [total, setTotal] = useState(0);

	

	const increment = (e) => {
		let id = e.currentTarget.getAttribute("data-id");
		let indexItem = cart.findIndex(c => c.item.id === Number(id))
		let _count = cart[indexItem].count+1
		dispatch(updateCart(_count,indexItem))
	}

	const decrement = (e) => {
		let id = e.currentTarget.getAttribute("data-id");
		let indexItem = cart.findIndex(c => c.item.id === Number(id))
		if (cart[indexItem].count>1) {
			let _count = cart[indexItem].count-1
			dispatch(updateCart(_count,indexItem))
		}
	}

	const removeItem = (e) => {
		let id = e.currentTarget.getAttribute("data-id");
		// let indexItem = cart.findIndex(c => c.item.id === Number(id))
		// let carta = cart.filter(c => c.item.id !== Number(id));
		// console.log(carta)
		dispatch(removeItemFromCart(Number(id)))

	}

	useEffect(() => {
		console.log('Count Total')
		let _cart =  cart.map(c =>{
			c.finalPrice = c.count*c.item.price
			return c;
		});
		// console.log('Total')
		// console.log(_cart)
		console.log(_cart.reduce((accum,item) => accum + item.finalPrice, 0))
		// setTotal()
		dispatch(updateTotal(_cart.reduce((accum,item) => accum + item.finalPrice, 0)))

	},[cart])

	return(
		<>
			{total>0 
				?	
					<>
						{cart.map((_cart,index)=> {

							return (
								
									<div class="cart__products__container" key={index}>
										<div class="cart__product__container">
											<div class="cart__container__image">
												<img class="cart__product_img" src={_cart.item.images[0]}/>
											</div>
											<div class="cart__container__detail">
												<div class="cart__product__name">{_cart.item.name}</div>
												<div class="cart__container__quantity">
													<div class="cart__minus_quantity cart__action__btn" onClick={decrement} data-id={_cart.item.id}>-</div>
													<div class="cart__product__quantity">{_cart.count}</div>
													<div class="cart__pluse_quantity cart__action__btn" onClick={increment} data-id={_cart.item.id} >+</div>
												</div>
											</div>
											<div class="cart__container__price">
												<div class="cart__product__remove" data-id={_cart.item.id} onClick={removeItem}>X</div>
												<div class="cart__product__price">${_cart.count*Number(_cart.item.price)}</div>
											</div>
										</div>
									</div>
								
							)
						})}

						<hr class="cart__hr"/>
						<div class="extra__detail__container">
							<div class="extra__label">Subtotal</div>
							<div class="extra__value">${total}</div>
						</div>
						<div class="extra__detail__container">
							<div class="extra__label">Shipping</div>
							<div class="extra__value">$0</div>
						</div>
						<hr class="cart__hr"/>
						<div class="extra__detail__container last">
							<div class="total__label">Total</div>
							<div class="total__value">${total}</div>
						</div>

					</>				
				:
					<div class="empty__cart__message">
						 Your shopping bag is empty
					</div>
			}
		</>
	);
}

export default Cart;
