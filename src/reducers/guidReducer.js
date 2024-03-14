const initState = {
  posts:"This my first Post",
  guidSteps : [
    { 
      page: "products",
      currentIndex: 0,
      steps:[
        { 
          index:1,
          title: "Landing page",
          body:"Tell customers about Splintr",
          bodyLarge:true
        },
        { 
          index:2,
          title: "Top banner",
          body:"Use prominent banner placements to catch the attention of your customers. If they identify Splintr as a payment option early in the shopping experience, they’ll be more likely to use it at checkout. The convenience of paying with Splintr might even encourage them to add more to their shopping cart.",
          bodyLarge:false
        },
        { 
          index:3,
          title: "Footer",
          body:"Include a payment method lockup in the footer of every page. Customers who navigate from the footer will most likely miss the top banner. This type of “global” placement is a best practice when it comes to communicating with new and returning customers.",
          bodyLarge:false
        },
        { 
          index:4,
          title: "FAQ page",
          body:"Add our FAQ page in the footer or FAQ section of your website to provide a one-pager that explains Splintr to your customers.",
          bodyLarge:false
        },
        { 
          index:5,
          title: "Choose product",
          body:"",
          bodyLarge:false
        }
      ]
    }
  ],
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

	if (action.type == 'UPDATE_CURRENT_INDEX') {
		let {index} = action;
		// console.log(newPosts);
		// console.log('RCA');
    let _guidSteps = state.guidSteps[0]
		_guidSteps.currentIndex = index
    console.log('UPDATE_CURRENT_INDEX');
    console.log(_guidSteps)
    console.log(state.guidSteps)
		return {
			...state,
			guidSteps: [...state.guidSteps,_guidSteps],
      posts: "This my Post =>"+index
		}
	}


	return state;
}




export default cartReducer;