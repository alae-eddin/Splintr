const initState = {
  posts:"This my first Post",
  productList : [
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
  ],
  cart: JSON.parse(localStorage.getItem("spl_cart")) ?? [],
  total: localStorage.getItem("spl_total") ?? 0,
  shouldHideCart: false
}

const cartReducer = (state = initState,action) => {
	// console.log(action);
	if (action.type == 'change_text') {
		let newPosts = action.txt;
		// console.log(newPosts);
		// console.log('RCA');
		return {
			...state,
			posts: newPosts
		}
	}

	if (action.type == 'ADD_TO_CART') {
		let cartItem = action.cartItem;
		// console.log(newPosts);
		// console.log('RCA');
		setCartOnStorage([...state.cart,cartItem]);
		return {
			...state,
			cart: [...state.cart,cartItem]
		}
	}

	if (action.type == 'UPDATE_CART') {
		let { index, count } = action;
		state.cart[index].count = count
		// console.log(newPosts);
		// console.log('RCA');
		setCartOnStorage([...state.cart]);
		return {
			...state,
			cart: [...state.cart]
		}
	}

	if (action.type == 'UPDATE_TOTAL') {
		let {total} = action;
		setTotalOnStorage(total)
		return {
			...state,
			total: total
		}
	}

	if (action.type == 'REMOVE_FROM_CART') {
		let {id} = action;

		let _cart = state.cart.filter(c => c.item.id !== Number(id));
		setCartOnStorage(_cart);
		return {
			...state,
			cart: _cart
		}
	}

	if (action.type == 'TOGGLE_SHOULD_HIDE_CART') {
		let {status} = action;
		// console.log(newPosts);
		// console.log('RCA');
		return {
			...state,
			shouldHideCart: status
		}
	}

	// console.log('CL');
	return state;
}



function setCartOnStorage(cart){
	localStorage.setItem("spl_cart", JSON.stringify(cart));
}

function setTotalOnStorage(total){
	localStorage.setItem("spl_total", total);
}


export default cartReducer;