import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import {useEffect, useState, useRef} from "preact/hooks";
import { animateAndSetState } from '../../core/animateBySteps'
import { useSelector } from 'react-redux'

const Footer = () => {

	const [ showMeForGuid,setShowMeForGuid] = useState("")
	const [ showMeForGuid2,setShowMeForGuid2] = useState("")
	const elmRef = useRef(null)
	const elmRef2 = useRef(null)
 	const guid  = useSelector(({guidState}) => guidState.guidSteps)
	useEffect(() => {
	   // setVisible(visible)
	   console.log('User useEffect Footer')
	   // console.log(guid[0].currentIndex)
	   if (guid[0].currentIndex==2){
	   	animateAndSetState(setShowMeForGuid,2,elmRef)
	   }
   		if ( guid[0].currentIndex == 3 ) {
   		    setShowMeForGuid2('show__me__for__guid guid__faq__background')
   		    // window.scrollTo(0, 0)
   		    elmRef2.current.scrollIntoView()
   		}else{
   		    setShowMeForGuid2('')
   		}

	   
	   // animateAndSetState(setShowMeForGuid,3,elmRef2)

	},[guid[0].currentIndex])

	return(
		<>
		<footer>
			<div ref={elmRef} class={'main__container footer__payments__section '+showMeForGuid}>
				<div class="payments__section__wrapper ">
					<div class="payments__icons__ctn">
						<img class="splintr-pay" src="/assets/images/splintr-pay.jpg" />
					</div>
					<div class="payments__icons__ctn">
						<svg role="img" focusable="false" viewBox="0 0 33 22"><title>Mastercard badge</title><g fill="none" transform="translate(0, 0) scale(1)"><path fill="#FFF" d="M0 0H32.847V21.975H0z" opacity="0"></path><path fill="#FF5F00" d="M10.144 1.898H18.735V15.857H10.144z" transform="translate(2 2)"></path><path fill="#EB001B" d="M11.0286025,8.879045 C11.0264454,6.15562071 12.2831893,3.58245345 14.4367222,1.90096281 C10.7782087,-0.959298393 5.52443654,-0.542676614 2.36761566,2.85803756 C-0.78920522,6.25875173 -0.78920522,11.501804 2.36761566,14.9025182 C5.52443654,18.3032324 10.7782087,18.7198542 14.4367222,15.8595929 C12.282504,14.1775683 11.0256833,11.6033346 11.0286025,8.879045 Z" transform="translate(2 2)"></path><path fill="#F79E1B" d="M28.8747564,8.879045 C28.8747564,12.2776867 26.9239291,15.3779451 23.8510034,16.8631284 C20.7780777,18.3483118 17.1224666,17.9576766 14.4367222,15.8571272 C16.5893154,14.174209 17.8461538,11.6013839 17.8461538,8.87781213 C17.8461538,6.15424038 16.5893154,3.58141524 14.4367222,1.89849706 C17.1224666,-0.202052351 20.7780777,-0.592687512 23.8510034,0.892495826 C26.9239291,2.37767917 28.8747564,5.47793751 28.8747564,8.87657925 L28.8747564,8.879045 Z" transform="translate(2 2)"></path><path fill="#F79E1B" d="M30.23,17 L30.23,16.1714286 L30.3966667,16.1714286 L30.3966667,16 L30,16 L30,16.1714286 L30.1566667,16.1714286 L30.1566667,17 L30.23,17 Z M31,17 L31,16 L30.88,16 L30.74,16.7142857 L30.6,16 L30.48,16 L30.48,17 L30.5666667,17 L30.5666667,16.2428571 L30.6966667,16.8928571 L30.7866667,16.8928571 L30.9166667,16.2428571 L30.9166667,17 L31,17 Z"></path></g></svg>
					</div>
					<div class="payments__icons__ctn">
						<svg role="img" focusable="false" viewBox="0 0 35 22"><title>Maestro badge</title><g fill="none" fill-rule="evenodd" transform="translate(0, 0) scale(1)"><path fill="#000000" d="M0 22 35 22 35 0 0 0z"></path><g transform="translate(5.35, 1.08963) scale(1)"><path d="M20.3141778,18.8361574 L20.3141778,18.8840278 L20.3583815,18.8840278 C20.3685667,18.8840278 20.3765111,18.8821944 20.3826222,18.8781204 C20.3885296,18.87425 20.3915852,18.8681389 20.3915852,18.859787 C20.3915852,18.8518426 20.3885296,18.8461389 20.3826222,18.8418611 C20.3765111,18.8381944 20.3685667,18.8361574 20.3583815,18.8361574 L20.3141778,18.8361574 Z M20.3587889,18.8023426 C20.3818074,18.8023426 20.3997333,18.8074352 20.4121593,18.8178241 C20.4245852,18.828213 20.4309,18.8420648 20.4309,18.859787 C20.4309,18.8746574 20.4260111,18.8868796 20.4160296,18.8966574 C20.4058444,18.9064352 20.3917889,18.9121389 20.3734556,18.9143796 L20.4323259,18.982213 L20.3862889,18.982213 L20.3316963,18.9149907 L20.3141778,18.9149907 L20.3141778,18.982213 L20.2758815,18.982213 L20.2758815,18.8023426 L20.3587889,18.8023426 Z M20.3473815,19.0439352 C20.368363,19.0439352 20.3877148,19.0398611 20.4056407,19.0321204 C20.4237704,19.0241759 20.4394556,19.0133796 20.4533074,18.9999352 C20.4667519,18.9860833 20.4775481,18.9701944 20.4852889,18.9518611 C20.4930296,18.9335278 20.4966963,18.9139722 20.4966963,18.8929907 C20.4966963,18.872213 20.4930296,18.8526574 20.4852889,18.8341204 C20.4775481,18.815787 20.4667519,18.7998981 20.4533074,18.78625 C20.4394556,18.7726019 20.4237704,18.762213 20.4056407,18.7544722 C20.3877148,18.7467315 20.368363,18.7426574 20.3473815,18.7426574 C20.3261963,18.7426574 20.306437,18.7467315 20.2879,18.7544722 C20.269363,18.762213 20.2532704,18.7726019 20.2398259,18.78625 C20.2259741,18.7998981 20.2155852,18.815787 20.2078444,18.8341204 C20.1999,18.8526574 20.1960296,18.872213 20.1960296,18.8929907 C20.1960296,18.9139722 20.1999,18.9335278 20.2078444,18.9518611 C20.2155852,18.9701944 20.2259741,18.9860833 20.2398259,18.9999352 C20.2532704,19.0133796 20.269363,19.0241759 20.2879,19.0321204 C20.306437,19.0398611 20.3261963,19.0439352 20.3473815,19.0439352 Z M20.3473815,18.6994722 C20.3746778,18.6994722 20.4001407,18.7045648 20.4239741,18.7145463 C20.4478074,18.7247315 20.4687889,18.7385833 20.4867148,18.7561019 C20.504437,18.7736204 20.5184926,18.7943981 20.5288815,18.8178241 C20.5390667,18.8414537 20.544363,18.8663056 20.544363,18.8929907 C20.544363,18.9194722 20.5390667,18.9445278 20.5288815,18.9679537 C20.5184926,18.9913796 20.504437,19.01175 20.4867148,19.0294722 C20.4687889,19.0469907 20.4478074,19.0610463 20.4239741,19.0710278 C20.4001407,19.0814167 20.3746778,19.0865093 20.3473815,19.0865093 C20.3194741,19.0865093 20.2934,19.0814167 20.269363,19.0710278 C20.2451222,19.0610463 20.2243444,19.0469907 20.2066222,19.0294722 C20.1889,19.01175 20.1746407,18.9913796 20.1646593,18.9679537 C20.1542704,18.9445278 20.1489741,18.9194722 20.1489741,18.8929907 C20.1489741,18.8663056 20.1542704,18.8414537 20.1646593,18.8178241 C20.1746407,18.7943981 20.1889,18.7736204 20.2066222,18.7561019 C20.2243444,18.7385833 20.2451222,18.7247315 20.269363,18.7145463 C20.2934,18.7045648 20.3194741,18.6994722 20.3473815,18.6994722 Z M17.4183259,16.9903981 C17.5036778,16.9903981 17.6259,17.0066944 17.7194,17.0433611 L17.5892333,17.4420093 C17.4998074,17.4055463 17.4101778,17.3931204 17.3246222,17.3931204 C17.0481963,17.3931204 16.9096778,17.5721759 16.9096778,17.8936204 L16.9096778,18.9838426 L16.4867889,18.9838426 L16.4867889,17.039287 L16.9058074,17.039287 L16.9058074,17.2751759 C17.0156037,17.1042685 17.1742889,16.9903981 17.4183259,16.9903981 Z M15.9541037,17.425713 L15.2625296,17.425713 L15.2625296,18.3044907 C15.2625296,18.4998426 15.3315852,18.6298056 15.5432333,18.6298056 C15.6530296,18.6298056 15.7913444,18.5933426 15.917437,18.5200093 L16.0396593,18.8821944 C15.9052148,18.9756944 15.6935667,19.0327315 15.5106407,19.0327315 C15.0103444,19.0327315 14.835363,18.7640463 14.835363,18.3126389 L14.835363,17.425713 L14.4407889,17.425713 L14.4407889,17.039287 L14.835363,17.039287 L14.835363,16.4493611 L15.2623259,16.4493611 L15.2625296,17.039287 L15.9541037,17.039287 L15.9541037,17.425713 Z M13.920937,17.5355093 C13.8029926,17.4623796 13.5630296,17.3688796 13.3149185,17.3688796 C13.0831037,17.3688796 12.9445852,17.4542315 12.9445852,17.5966204 C12.9445852,17.726787 13.0912519,17.76325 13.2741778,17.7878981 L13.4736037,17.816213 C13.8966963,17.8773241 14.1529556,18.0563796 14.1529556,18.3981944 C14.1529556,18.7683241 13.827437,19.0327315 13.2660296,19.0327315 C12.948863,19.0327315 12.6557333,18.95125 12.4241222,18.7805463 L12.6233444,18.45075 C12.7657333,18.5605463 12.9771778,18.65425 13.2701037,18.65425 C13.5589556,18.65425 13.7135667,18.5688981 13.7135667,18.4183611 C13.7135667,18.3085648 13.6037704,18.2474537 13.3719556,18.2148611 L13.1725296,18.1865463 C12.7372148,18.1254352 12.5013259,17.930287 12.5013259,17.6129167 C12.5013259,17.2264907 12.8184926,16.9903981 13.3108444,16.9903981 C13.6200667,16.9903981 13.9007704,17.0594537 14.1042704,17.1936944 L13.920937,17.5355093 Z M10.6910111,17.8406574 L11.6999556,17.8406574 C11.6551407,17.5395833 11.4801593,17.3688796 11.2076037,17.3688796 C10.9065296,17.3688796 10.7358259,17.5599537 10.6910111,17.8406574 Z M12.1393444,18.0115648 C12.1393444,18.0683981 12.1352704,18.1213611 12.1311963,18.1743241 L10.686937,18.1743241 C10.7480481,18.524287 10.9961593,18.6501759 11.2687148,18.6501759 C11.4640667,18.6501759 11.671437,18.5770463 11.8341963,18.4468796 L12.0417704,18.7601759 C11.8056778,18.9593981 11.5371963,19.0327315 11.2442704,19.0327315 C10.6624926,19.0327315 10.2475481,18.6298056 10.2475481,18.0115648 C10.2475481,17.4055463 10.6464,16.9903981 11.2157519,16.9903981 C11.760863,16.9903981 12.1352704,17.4055463 12.1393444,18.0115648 Z M18.8902889,17.3882315 C18.8035111,17.3882315 18.7228444,17.4035093 18.6484926,17.4338611 C18.5741407,17.4644167 18.5099741,17.5069907 18.4557889,17.561787 C18.4014,17.616787 18.3588259,17.6823796 18.327863,17.7587685 C18.2966963,17.8353611 18.2812148,17.9194907 18.2812148,18.0115648 C18.2812148,18.1036389 18.2966963,18.1877685 18.327863,18.2643611 C18.3588259,18.34075 18.4014,18.4065463 18.4557889,18.4613426 C18.5099741,18.5161389 18.5741407,18.5589167 18.6484926,18.5892685 C18.7228444,18.6198241 18.8035111,18.6351019 18.8902889,18.6351019 C18.976863,18.6351019 19.0575296,18.6198241 19.1316778,18.5892685 C19.206437,18.5589167 19.2710111,18.5161389 19.3256037,18.4613426 C19.3806037,18.4065463 19.4235852,18.34075 19.4547519,18.2643611 C19.4859185,18.1877685 19.5016037,18.1036389 19.5016037,18.0115648 C19.5016037,17.9194907 19.4859185,17.8353611 19.4547519,17.7587685 C19.4235852,17.6823796 19.3806037,17.616787 19.3256037,17.561787 C19.2710111,17.5069907 19.206437,17.4644167 19.1316778,17.4338611 C19.0575296,17.4035093 18.976863,17.3882315 18.8902889,17.3882315 Z M18.8902889,16.9881574 C19.0404185,16.9881574 19.1795481,17.0142315 19.3076778,17.0663796 C19.4356037,17.1183241 19.5460111,17.1902315 19.6393074,17.2814907 C19.7328074,17.3729537 19.8061407,17.4809167 19.8589,17.6053796 C19.9114556,17.7300463 19.937937,17.8653056 19.937937,18.0115648 C19.937937,18.1578241 19.9114556,18.2930833 19.8589,18.4175463 C19.8061407,18.542213 19.7328074,18.6501759 19.6393074,18.7414352 C19.5460111,18.8328981 19.4356037,18.9046019 19.3076778,18.95675 C19.1795481,19.0088981 19.0404185,19.0349722 18.8902889,19.0349722 C18.7399556,19.0349722 18.6008259,19.0088981 18.4729,18.95675 C18.3449741,18.9046019 18.2345667,18.8328981 18.1418815,18.7414352 C18.0491963,18.6501759 17.9764741,18.542213 17.9237148,18.4175463 C17.8709556,18.2930833 17.8444741,18.1578241 17.8444741,18.0115648 C17.8444741,17.8653056 17.8709556,17.7300463 17.9237148,17.6053796 C17.9764741,17.4809167 18.0491963,17.3729537 18.1418815,17.2814907 C18.2345667,17.1902315 18.3449741,17.1183241 18.4729,17.0663796 C18.6008259,17.0142315 18.7399556,16.9881574 18.8902889,16.9881574 Z M8.26265926,18.0115648 C8.26265926,18.3531759 8.48652963,18.6340833 8.85258519,18.6340833 C9.20234444,18.6340833 9.43843704,18.3653981 9.43843704,18.0115648 C9.43843704,17.6577315 9.20234444,17.3890463 8.85258519,17.3890463 C8.48652963,17.3890463 8.26265926,17.66975 8.26265926,18.0115648 Z M9.83708519,18.0115648 L9.83708519,18.9838426 L9.41399259,18.9838426 L9.41399259,18.74775 C9.27975185,18.9229352 9.07645556,19.0327315 8.79962222,19.0327315 C8.25451111,19.0327315 7.82734444,18.6053611 7.82734444,18.0115648 C7.82734444,17.4175648 8.25451111,16.9903981 8.79962222,16.9903981 C9.07645556,16.9903981 9.27975185,17.1003981 9.41399259,17.2751759 L9.41399259,17.039287 L9.83708519,17.039287 L9.83708519,18.0115648 Z M7.45314074,18.9838426 L7.45314074,17.76325 C7.45314074,17.3036944 7.16021481,16.9944722 6.68823333,16.9903981 C6.44012222,16.9863241 6.18386296,17.0637315 6.00480741,17.336287 C5.87056667,17.1205648 5.65912222,16.9903981 5.36212222,16.9903981 C5.15454815,16.9903981 4.95125185,17.0513056 4.79256667,17.27925 L4.79256667,17.039287 L4.36947407,17.039287 L4.36947407,18.9838426 L4.79664074,18.9838426 L4.79664074,17.9058426 C4.79664074,17.5681019 4.98384444,17.3890463 5.27249259,17.3890463 C5.5531963,17.3890463 5.69558519,17.5721759 5.69558519,17.9017685 L5.69558519,18.9838426 L6.12275185,18.9838426 L6.12275185,17.9058426 C6.12275185,17.5681019 6.3181037,17.3890463 6.59880741,17.3890463 C6.88765926,17.3890463 7.02597407,17.5721759 7.02597407,17.9017685 L7.02597407,18.9838426 L7.45314074,18.9838426 Z" fill="#FFFFFF"></path><path fill="#7673C0" d="M8.93577778 13.7285926 15.3524444 13.7285926 15.3524444 2.19774074 8.93577778 2.19774074z"></path><path d="M9.34322593,7.96316667 C9.34322593,5.62383333 10.4385407,3.54055556 12.1441519,2.19774074 C10.8966704,1.21568519 9.32285556,0.629833333 7.61215185,0.629833333 C3.56252222,0.629833333 0.27942963,3.91312963 0.27942963,7.96316667 C0.27942963,12.0132037 3.56252222,15.2965 7.61215185,15.2965 C9.32285556,15.2965 10.8966704,14.7106481 12.1441519,13.7285926 C10.4385407,12.3857778 9.34322593,10.3025 9.34322593,7.96316667" fill="#EB001B"></path><path d="M24.0088944,7.96316667 C24.0088944,12.0132037 20.7260056,15.2965 16.6761722,15.2965 C14.9654685,15.2965 13.39145,14.7106481 12.1441722,13.7285926 C13.8497833,12.3857778 14.9450981,10.3025 14.9450981,7.96316667 C14.9450981,5.62383333 13.8497833,3.54055556 12.1441722,2.19774074 C13.39145,1.21568519 14.9654685,0.629833333 16.6761722,0.629833333 C20.7260056,0.629833333 24.0088944,3.91312963 24.0088944,7.96316667" fill="#00A1DF"></path></g></g></svg>
					</div>
					<div class="payments__icons__ctn">
						<svg role="img" focusable="false" viewBox="0 0 35 22"><title>Visa badge</title><g fill="none" transform="translate(0, 0) scale(1)"><path fill="#1A1F70" d="M33.2444268,22 L1.72770701,22 C0.769030467,21.9849056 -1.57898386e-14,21.2097447 -1.57898386e-14,20.258794 L-1.57898386e-14,1.74120603 C-1.57898386e-14,0.790255288 0.769030467,0.0150944488 1.72770701,7.81597009e-15 L33.2444268,7.81597009e-15 C34.2140031,7.81597009e-15 35,0.779564493 35,1.74120603 L35,20.258794 C35,21.2204355 34.2140031,22 33.2444268,22"></path><path fill="#FFF" d="M17.3333333,7.645 L15.8888889,14.3 L14.1666667,14.3 L15.5833333,7.645 L17.3333333,7.645 Z M24.6666667,11.935 L25.5833333,9.4325 L26.1111111,11.935 L24.6666667,11.935 Z M26.6111111,14.3 L28.1944444,14.3 L26.8055556,7.64496892 L25.3055556,7.64496892 C24.9915636,7.64221627 24.7066797,7.82662379 24.5833333,8.1125 L21.9722222,14.3 L23.8055556,14.3 L24.1666667,13.31 L26.3888889,13.31 L26.6111111,14.3 Z M22.0555556,12.1275 C22.0555556,10.3675 19.6111111,10.2575 19.6111111,9.4875 C19.6111111,9.24 19.8611111,8.9925 20.3611111,8.91 C20.9521495,8.85726492 21.5466931,8.96169363 22.0833333,9.2125 L22.3888889,7.81 C21.8669429,7.60708307 21.3107399,7.5044212 20.75,7.50743275 C19.0277778,7.50743275 17.8333333,8.415 17.8055556,9.7075 C17.7777778,11 18.6666667,11.1925 19.3333333,11.5225 C20,11.8525 20.25,12.0725 20.2222222,12.3475 C20.1944444,12.6225 19.6944444,13.0075 19.1944444,13.0075 C18.5774191,13.0095509 17.9685129,12.8682656 17.4166667,12.595 L17.0833333,14.0525 C17.7072957,14.273116 18.3652196,14.3847751 19.0277778,14.3825341 C20.8611111,14.3825341 22.0555556,13.5025 22.0555556,12.1275 M14.8611111,7.645 L12.0277778,14.3 L10.1944444,14.3 L8.80555556,8.965 C8.76989529,8.7168326 8.61444759,8.50138208 8.38888889,8.3875 C7.84299304,8.12688277 7.26349151,7.94181615 6.66666667,7.8375 L6.72222222,7.645 L9.66666667,7.645 C10.0625245,7.63913817 10.4040075,7.91891872 10.4722222,8.305 L11.2222222,12.155 L13.0277778,7.645 L14.8611111,7.645 Z"></path></g></svg>
					</div>
					<div class="payments__icons__ctn">
						<svg role="img" focusable="false" viewBox="0 0 32 22"><title>VisaElectron badge</title><path d="M0 4 H 32 V 18 H 0 Z" fill="#FFF" fill-rule="nonzero"></path><path d="M0,18 L0,18 L0,20.9906311 C0,21.5566468 0.444485615,22 0.992786407,22 L31.0072136,22 C31.5476379,22 32,21.5480902 32,20.9906311 L32,18 L0,18 Z" fill="#F7B600" fill-rule="nonzero"></path><path d="M25.381666,14.9310651 C25.3860052,14.9722882 25.3887172,15.0129682 25.389802,15.0531065 C25.3908869,15.0932448 25.3914293,15.1339248 25.3914293,15.1751479 L25.3979381,15.1751479 C25.4218041,15.1339248 25.4521786,15.0959568 25.4890624,15.0612426 C25.5259462,15.0265284 25.5671687,14.9966964 25.612731,14.9717456 C25.6582934,14.9467947 25.7065671,14.9272683 25.7575535,14.9131657 C25.80854,14.899063 25.8589833,14.8920118 25.9088849,14.8920118 C26.1041521,14.8920118 26.2484308,14.9435399 26.3417251,15.0465976 C26.4350195,15.1496553 26.481666,15.296646 26.481666,15.487574 L26.481666,16.454142 L26.2668731,16.454142 L26.2668731,15.6112426 C26.2668731,15.442011 26.2375834,15.3123772 26.1790032,15.2223373 C26.1204231,15.1322974 26.0119429,15.0872781 25.8535594,15.0872781 C25.8427113,15.0872781 25.8123368,15.0916173 25.7624352,15.1002959 C25.7125336,15.1089744 25.6599207,15.13284 25.6045949,15.1718935 C25.5492692,15.2109469 25.4999107,15.2695262 25.456518,15.3476331 C25.4131253,15.42574 25.3914293,15.5342202 25.3914293,15.6730769 L25.3914293,16.454142 L25.1766364,16.454142 L25.1766364,15.2662722 C25.1766364,15.2250491 25.1750092,15.1729786 25.1717547,15.1100592 C25.1685003,15.0471397 25.1647035,14.9874756 25.1603642,14.9310651 L25.381666,14.9310651 Z" fill="#1A1F71"></path><path d="M24.7730861,15.6926036 C24.7730861,15.8075943 24.7530172,15.9139048 24.712879,16.0115385 C24.6727407,16.1091721 24.6168734,16.1937866 24.5452754,16.2653846 C24.4736774,16.3369826 24.3885205,16.3928499 24.289802,16.4329882 C24.1910836,16.4731264 24.082061,16.4931953 23.962731,16.4931953 C23.8455707,16.4931953 23.7376329,16.4731264 23.6389145,16.4329882 C23.540196,16.3928499 23.4550391,16.3369826 23.3834411,16.2653846 C23.3118431,16.1937866 23.2559758,16.1091721 23.2158376,16.0115385 C23.1756993,15.9139048 23.1556305,15.8075943 23.1556305,15.6926036 C23.1556305,15.5776128 23.1756993,15.4713023 23.2158376,15.3736686 C23.2559758,15.276035 23.3118431,15.1914205 23.3834411,15.1198225 C23.4550391,15.0482245 23.540196,14.9923572 23.6389145,14.9522189 C23.7376329,14.9120807 23.8455707,14.8920118 23.962731,14.8920118 C24.082061,14.8920118 24.1910836,14.9120807 24.289802,14.9522189 C24.3885205,14.9923572 24.4736774,15.0482245 24.5452754,15.1198225 C24.6168734,15.1914205 24.6727407,15.276035 24.712879,15.3736686 C24.7530172,15.4713023 24.7730861,15.5776128 24.7730861,15.6926036 L24.7730861,15.6926036 Z M24.5387665,15.6926036 C24.5387665,15.6079877 24.5252065,15.5287972 24.4980861,15.4550296 C24.4709656,15.381262 24.4324552,15.3172587 24.3825535,15.2630178 C24.3326519,15.2087768 24.2724454,15.1659272 24.2019322,15.1344675 C24.1314191,15.1030077 24.0516861,15.0872781 23.962731,15.0872781 C23.873776,15.0872781 23.794043,15.1030077 23.7235299,15.1344675 C23.6530167,15.1659272 23.5933526,15.2087768 23.5445358,15.2630178 C23.495719,15.3172587 23.4577509,15.381262 23.4306305,15.4550296 C23.40351,15.5287972 23.38995,15.6079877 23.38995,15.6926036 C23.38995,15.7772194 23.40351,15.8564099 23.4306305,15.9301775 C23.4577509,16.0039451 23.495719,16.0679484 23.5445358,16.1221893 C23.5933526,16.1764303 23.6530167,16.2192799 23.7235299,16.2507396 C23.794043,16.2821994 23.873776,16.297929 23.962731,16.297929 C24.0516861,16.297929 24.1314191,16.2821994 24.2019322,16.2507396 C24.2724454,16.2192799 24.3326519,16.1764303 24.3825535,16.1221893 C24.4324552,16.0679484 24.4709656,16.0039451 24.4980861,15.9301775 C24.5252065,15.8564099 24.5387665,15.7772194 24.5387665,15.6926036 L24.5387665,15.6926036 Z" fill="#1A1F71"></path><path d="M22.2216068,15.406213 C22.2216068,15.3389543 22.2199796,15.2706118 22.2167251,15.2011834 C22.2134707,15.1317551 22.2107587,15.0417165 22.208589,14.9310651 L22.4201275,14.9310651 L22.4201275,15.2142012 L22.4266364,15.2142012 C22.4418238,15.1729781 22.4635199,15.1333828 22.4917251,15.0954142 C22.5199304,15.0574456 22.5541017,15.0232743 22.5942399,14.9928994 C22.6343782,14.9625245 22.6810247,14.9381165 22.7341807,14.9196746 C22.7873368,14.9012326 22.8475433,14.8920118 22.914802,14.8920118 C22.9755519,14.8920118 23.0287071,14.8985206 23.0742695,14.9115385 L23.0319618,15.1230769 C23.0037565,15.1122287 22.9625341,15.1068047 22.9082932,15.1068047 C22.825847,15.1068047 22.7553349,15.1225344 22.6967547,15.1539941 C22.6381745,15.1854538 22.5893585,15.2255915 22.550305,15.2744083 C22.5112516,15.3232251 22.4825043,15.375838 22.4640624,15.4322485 C22.4456205,15.4886591 22.4363997,15.5428991 22.4363997,15.5949704 L22.4363997,16.454142 L22.2216068,16.454142 L22.2216068,15.406213 Z" fill="#1A1F71"></path><path d="M21.8929086,15.1263314 L21.4535594,15.1263314 L21.4535594,16.0245562 C21.4535594,16.0809668 21.4589835,16.1270708 21.4698316,16.1628698 C21.4806798,16.1986688 21.495867,16.2263313 21.5153938,16.245858 C21.5349205,16.2653847 21.5582437,16.2789447 21.5853642,16.2865385 C21.6124846,16.2941322 21.6423167,16.297929 21.6748612,16.297929 C21.711745,16.297929 21.7497131,16.292505 21.7887665,16.2816568 C21.82782,16.2708086 21.8636185,16.2567062 21.896163,16.2393491 L21.9059263,16.4378698 C21.8256498,16.4747536 21.7291024,16.4931953 21.6162813,16.4931953 C21.5750583,16.4931953 21.5322086,16.4877713 21.487731,16.4769231 C21.4432535,16.4660749 21.4025734,16.4454637 21.3656896,16.4150888 C21.3288058,16.3847139 21.2984314,16.3434914 21.2745654,16.2914201 C21.2506994,16.2393489 21.2387665,16.1710063 21.2387665,16.0863905 L21.2387665,15.1263314 L20.9165772,15.1263314 L20.9165772,14.9310651 L21.2387665,14.9310651 L21.2387665,14.5014793 L21.4535594,14.5014793 L21.4535594,14.9310651 L21.8929086,14.9310651 L21.8929086,15.1263314 Z" fill="#1A1F71"></path><path d="M20.6334411,15.2890533 C20.5965573,15.2326427 20.5450292,15.1849114 20.4788553,15.145858 C20.4126814,15.1068045 20.3372877,15.0872781 20.2526719,15.0872781 C20.1637168,15.0851085 20.0839839,15.0992109 20.0134707,15.1295858 C19.9429575,15.1599607 19.882751,15.202268 19.8328494,15.2565089 C19.7829478,15.3107498 19.7449797,15.3752955 19.7189441,15.4501479 C19.6929084,15.5250004 19.6798908,15.6058181 19.6798908,15.6926036 C19.6798908,15.779389 19.6929084,15.8602067 19.7189441,15.9350592 C19.7449797,16.0099116 19.7829478,16.0744573 19.8328494,16.1286982 C19.882751,16.1829391 19.9429575,16.2252464 20.0134707,16.2556213 C20.0839839,16.2859962 20.1637168,16.3000986 20.2526719,16.297929 C20.3372877,16.297929 20.4126814,16.2784026 20.4788553,16.2393491 C20.5450292,16.2002957 20.5965573,16.1525644 20.6334411,16.0961538 L20.8091807,16.2295858 C20.7332435,16.3185409 20.6475441,16.3841714 20.5520802,16.4264793 C20.4566162,16.4687872 20.3568144,16.4910256 20.2526719,16.4931953 C20.1290026,16.4953649 20.017268,16.4763809 19.9174648,16.4362426 C19.8176615,16.3961043 19.7325046,16.340237 19.6619914,16.2686391 C19.5914782,16.1970411 19.5377805,16.1118841 19.5008967,16.0131657 C19.4640129,15.9144472 19.4455713,15.8075943 19.4455713,15.6926036 C19.4455713,15.5776128 19.4640129,15.4707599 19.5008967,15.3720414 C19.5377805,15.273323 19.5914782,15.188166 19.6619914,15.116568 C19.7325046,15.0449701 19.8176615,14.9891028 19.9174648,14.9489645 C20.017268,14.9088262 20.1290026,14.8898422 20.2526719,14.8920118 C20.3568144,14.8941815 20.4566162,14.9164199 20.5520802,14.9587278 C20.6475441,15.0010357 20.7332435,15.0666662 20.8091807,15.1556213 L20.6334411,15.2890533 Z" fill="#1A1F71"></path><path d="M17.8508967,15.7511834 C17.8574056,15.8271207 17.8758473,15.8987176 17.9062222,15.9659763 C17.9365971,16.0332351 17.9767347,16.0912719 18.0266364,16.1400888 C18.076538,16.1889056 18.1340325,16.227416 18.1991216,16.2556213 C18.2642107,16.2838266 18.3347228,16.297929 18.41066,16.297929 C18.5256507,16.297929 18.6249101,16.2713514 18.7084411,16.2181953 C18.7919721,16.1650392 18.855433,16.1037479 18.8988257,16.0343195 L19.064802,16.1710059 C18.9736773,16.2859966 18.8733332,16.3684416 18.7637665,16.4183432 C18.6541999,16.4682448 18.5364989,16.4931953 18.41066,16.4931953 C18.297839,16.4931953 18.1931556,16.4731264 18.0966068,16.4329882 C18.000058,16.3928499 17.9170706,16.3369826 17.8476423,16.2653846 C17.7782139,16.1937866 17.7234314,16.1091721 17.6832932,16.0115385 C17.6431549,15.9139048 17.6230861,15.8075943 17.6230861,15.6926036 C17.6230861,15.5776128 17.6426125,15.4713023 17.681666,15.3736686 C17.7207194,15.276035 17.7749595,15.1914205 17.8443878,15.1198225 C17.9138162,15.0482245 17.9951763,14.9923572 18.0884707,14.9522189 C18.181765,14.9120807 18.2826516,14.8920118 18.3911334,14.8920118 C18.5061241,14.8920118 18.6091803,14.9126231 18.700305,14.9538462 C18.7914297,14.9950692 18.8679082,15.0498517 18.9297429,15.1181953 C18.9915775,15.1865388 19.0387664,15.2668141 19.0713109,15.3590237 C19.1038555,15.4512332 19.1201275,15.5494078 19.1201275,15.6535503 L19.1201275,15.7511834 L17.8508967,15.7511834 Z M18.885808,15.5754438 C18.885808,15.4300782 18.8424159,15.3123772 18.7556305,15.2223373 C18.668845,15.1322974 18.5473472,15.0872781 18.3911334,15.0872781 C18.3217051,15.0872781 18.2544473,15.1008381 18.1893583,15.1279586 C18.1242692,15.155079 18.0673171,15.1914199 18.0185003,15.2369822 C17.9696835,15.2825446 17.9306306,15.3346151 17.9013405,15.3931953 C17.8720504,15.4517754 17.8574056,15.5125243 17.8574056,15.5754438 L18.885808,15.5754438 Z" fill="#1A1F71"></path><path d="M17.1707192 16.454142 16.9559263 16.454142 16.9559263 13.993787 17.1707192 13.993787z" fill="#1A1F71"></path><path d="M15.2766364 16.2393491 16.5100683 16.2393491 16.5100683 16.454142 15.0423168 16.454142 15.0423168 14.15 16.4710151 14.15 16.4710151 14.3647929 15.2766364 14.3647929 15.2766364 15.1491124 16.3929086 15.1491124 16.3929086 15.3639053 15.2766364 15.3639053z" fill="#1A1F71"></path><path d="M25.1759301,5.91132351 L26.62614,12.987486 L24.9633981,12.987486 C24.9633981,12.987486 24.7991445,12.1746089 24.7458357,11.9267193 C24.484343,11.9267193 22.6571344,11.9236256 22.4518068,11.9236256 C22.3815738,12.1150943 22.0748081,12.987486 22.0748081,12.987486 L20.1934593,12.987486 L22.8535949,6.49858601 C23.0419984,6.03750268 23.3628107,5.91132351 23.7919034,5.91132351 L25.1759301,5.91132351 Z M22.9668203,10.4755443 L24.4541823,10.4755443 C24.3822867,10.120611 24.0393707,8.4304381 24.0393707,8.4304381 L23.9179177,7.81964018 C23.8278405,8.0857256 23.6703864,8.51481726 23.6805537,8.49570476 C23.6805537,8.49570476 23.115322,10.0673068 22.9668203,10.4755443 Z" fill="#1A1F71"></path><path d="M20.5824797,6.07879851 C20.2277765,5.93534018 19.6714545,5.78120268 18.9767555,5.78120268 C17.2069695,5.78120268 15.9600622,6.7415256 15.9489145,8.11815268 C15.939003,9.13535476 16.839051,9.70350476 17.5184885,10.0419839 C18.216129,10.3889193 18.4505942,10.6105693 18.4476954,10.9201735 C18.442729,11.3950527 17.890329,11.6113402 17.375145,11.6113402 C16.6587046,11.6113402 16.2777839,11.5042964 15.6894468,11.2399756 L15.4587969,11.1276381 L15.2072797,12.7129902 C15.6252033,12.9106464 16.399045,13.0816735 17.2028344,13.0901298 C19.0860162,13.0901298 20.307921,12.1412881 20.3219676,10.6710006 C20.3290015,9.86609851 19.8518009,9.2531006 18.8184914,8.74758185 C18.1921496,8.41975893 17.8081169,8.2012256 17.8122521,7.86939226 C17.8122521,7.5753256 18.1369864,7.26040476 18.8385276,7.26040476 C19.423774,7.25061935 19.8487102,7.3883256 20.1784109,7.53178393 L20.3399361,7.61352768 L20.5824797,6.07879851" fill="#1A1F71"></path><path d="M12.294753 12.9848277 13.4141964 5.90465476 15.2062353 5.90465476 14.0846603 12.9848277 12.294753 12.9848277" fill="#1A1F71"></path><path d="M6.38118588,6.82911135 C5.83062616,6.50025891 5.20243172,6.23587995 4.5,6.05258185 L4.5219971,5.9051131 L7.41152493,5.9051131 C7.80041744,5.92113185 8.11524026,6.05436935 8.22347792,6.50303185 L8.85086417,9.75724435 L9.0381166,10.7385131 L10.7922787,5.90955893 L12.6895071,5.90955893 L9.86908259,12.9768298 L7.97381511,12.979511 L6.38118588,6.82911135 Z" fill="#1A1F71"></path><path d="M0,1.0093689 L0,1.0093689 L0,4 L32,4 L32,1.0093689 C32,0.443353176 31.5555144,0 31.0072136,0 L0.992786407,0 C0.452362061,0 0,0.451909848 0,1.0093689 L0,1.0093689 Z" fill="#1A1F71" fill-rule="nonzero"></path></svg>
					</div>

				</div>
			</div>
			<div class="bottom__footer">
				<div class="footer__menu">
					<div class="footer__menu__wrapper" ref={elmRef2}>
						<div class="menu__item"> <b> Splintr</b></div>
						<div class="menu__item"><a href="#">Case studies</a></div>
						<div class={'menu__item '+showMeForGuid2}><a href="#">FAQ Page</a></div>
					</div>
					<div class="footer__menu__wrapper">
						<div class="menu__item"> <b> Shoppers</b></div>
						<div class="menu__item"><a href="#">Splintr stores</a></div>
						<div class="menu__item"><a href="#">Shopping app</a></div>
					</div>
					<div class="footer__menu__wrapper">
						<div class="menu__item"> <b> Business</b></div>
						<div class="menu__item"><a href="#">Become a partner</a></div>
						<div class="menu__item"><a href="#">Developers</a></div>
					</div>
				</div>
				<div class="footer__bottom_logo">
					<img src="https://www.klarna.com/demo/static/images/demostore_logo_white.svg" />
				</div>
				<div>
					Copyright © 2020 Splintr
				</div>
			</div>
		</footer>
		</>
	)
};

export default Footer;
