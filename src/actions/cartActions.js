export const addToCart = (cartItem) => {
	return {
		type: 'ADD_TO_CART',
		cartItem: cartItem
	}
}

export const updateCart = (count,index) => {
	return {
		type: 'UPDATE_CART',
		count: count,
		index: index
	}
}

export const updateTotal = (total) => {
	return {
		type: 'UPDATE_TOTAL',
		total: total
	}
}

export const removeItemFromCart = (id) => {
	return {
		type: 'REMOVE_FROM_CART',
		id: id
	}
}

export const toggleShouldHideCart = (status) => {
	return {
		type: 'TOGGLE_SHOULD_HIDE_CART',
		status: status
	}
}