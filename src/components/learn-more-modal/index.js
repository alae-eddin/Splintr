import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import { Link } from 'preact-router/match';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import SplintrButton from '../splintr-button';

const LearnMoreModal = (props) => {

   // const [linkProps,setLinkProps] = useState({});

   const [ visible,setVisible] = useState(false)

   const showModal = () => {
      setVisible(true)
   }

   const hideModal = () => {
      setVisible(false)
      props.visible = false
      props.closeModal()
   }

   useEffect(() => {
      setVisible(props.visible)
   },[props.visible])

   return (
         <Rodal visible={visible} onClose={hideModal} animation="fade" height={560} width={520}>
            <div class="modal-wrapper">
               <div class="modal-header">
                  <img src="/assets/images/logo.svg"/>
               </div>
               <div class="modal-body">
                  <div class="fi-text"> 6 interest-free payments of ${props.price} </div>
                  <div class="se-text"> Buy what you love and split the cost. It’s easy and interest-free. </div>
                  <ul class="ul-step" id="progress">
                      <li class="li-step"><div class="node black"></div><p>Add item(s) to your cart</p></li>
                      <li class="li-step"><div class="divider grey"></div></li>
                      <li class="li-step"><div class="node black"></div><p>Go to checkout and choose <img class="splintr-pay" src="/assets/images/splintr-pay.jpg" /></p></li>
                      <li class="li-step"><div class="divider grey"></div></li>
                      <li class="li-step"><div class="node black"></div><p>Enter your debit or credit card information</p></li>
                      <li class="li-step"><div class="divider grey"></div></li>
                      <li class="li-step"><div class="node black"></div><p>Your first payment is taken when the order is processed and the remaining 3 are automatically taken every two weeks</p></li>
                  </ul>
               </div>
               <div class="modal-footer spl-m-footer">
                  <SplintrButton name="Close" onClick={hideModal}/>
               </div>
            </div>
         </Rodal>
   );
}

export default LearnMoreModal;
