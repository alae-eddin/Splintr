import { h } from 'preact';
import {useEffect, useState, useRef} from "preact/hooks";
import style from './style.css';

import Header from '../../components/header';
import { Link } from 'preact-router/match';
import SplintrButton from '../../components/splintr-button';
import Footer from '../../components/footer';
import { useSelector, useDispatch } from 'react-redux'
import { animateAndSetState } from '../../core/animateBySteps'

const Products = ({ user }) => {

	const productList = useSelector(({carteState}) => carteState.productList)
	const elmRef = useRef(null)
 	const guid  = useSelector(({guidState}) => guidState.guidSteps)
 	const [ showMeForGuid,setShowMeForGuid] = useState("")

 	useEffect(() => {
	   // setVisible(visible)
	   console.log('User useEffect Products')
	   // console.log(guid[0].currentIndex)
	   animateAndSetState(setShowMeForGuid,4,elmRef)

	})

	return (
		<div>
			{/*<Header cartItem={cartItem}/>*/}
			<div  ref={elmRef} class={`main__container `+showMeForGuid} >
				<div class={`products__wrapper`}>
					<div class={`products_col_1`}>
						<div class="product__image">
							{/*<img src="https://www.klarna.com/demo/static/images/products/sunglasses.jpg"/>*/}
							<img src={productList[1].images[0]}/>
							<div class="over__image">
								<span class="new_arrival_marker"> New Arrival </span>
								<div class="product__title">{productList[1].name}</div>
								<div class="product__price">€{productList[1].price}</div>
								<div class="products__btn__buy__ctn"><SplintrButton name="EXPLORE & BUY" link={"/product/"+productList[1].slug}/></div>
							</div>
						</div>
					</div>
					<div class={`products_col_2`}>
						<div class="product__image">
							{/*<img src="https://www.klarna.com/demo/static/images/products/bag.jpg"/>*/}
							<Link href={"/product/"+productList[2].slug} ><img src={productList[2].images[0]}/></Link>
							<div class="products__btn__buy__ctn"><SplintrButton link={"/product/"+productList[2].slug} name="BUY"/></div>
						</div>
						<div class="product__info">
							<div class="product__title">{productList[2].name}</div>
							<div class="product__price">€{productList[2].price}</div>
						</div>
					</div>
					<div class={`products_col_3`}>
						<div class="product__image">
							{/*<img src="https://www.klarna.com/demo/static/images/products/shoe.jpg"/>*/}
							<Link href={"/product/"+productList[0].slug}><img src={productList[0].images[0]}/></Link>
							<div class="products__btn__buy__ctn"><SplintrButton name="BUY" link={"/product/"+productList[0].slug}/></div>
						</div>
						<div class="product__info">
							<div class="product__title">{productList[0].name}</div>
							<div class="product__price">€{productList[0].price}</div>
						</div>
					</div>
				</div>
			</div>
			<Footer/>

		</div>
	);
}

export default Products;
