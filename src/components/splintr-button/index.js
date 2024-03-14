import { h } from 'preact';
import style from './style.css';
import {useEffect, useState} from "preact/hooks";
import { Link } from 'preact-router/match';

const SplintrButton = (props) => {

   const [linkProps,setLinkProps] = useState({});

   useEffect(() => {
      if (props.link) {
         setLinkProps({href: props.link})
      }
   })

   return (

   	<Link class="ds-start-btn"  {...linkProps}>
         <button class={style.splintr__button} onClick={props.onClick} >
            <div class={style.splintr__btn__outside+" js_add_cart"} >
               <div class={style.splintr__btn__inside+" js_add_cart"} >
               	<span class={style.splintr__btn__span+" js_add_cart"} >
               		{props.name}
               	</span>
               </div>
            </div>
         </button>
      </Link>
   );
}

export default SplintrButton;
