import { h } from 'preact';
import {useEffect, useState, useRef} from "preact/hooks";
import { Link } from 'preact-router/match';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import SplintrButton from '../splintr-button';
import { useSelector } from 'react-redux'
import { animateAndSetState } from '../../core/animateBySteps'


const LearnMoreTop = () => {

   // const [linkProps,setLinkProps] = useState({});

   const [ visible,setVisible] = useState(false)
   const [ showMeForGuid,setShowMeForGuid] = useState("")
   const guid  = useSelector(({guidState}) => guidState.guidSteps)
   const elmRef = useRef(null)

   const showModal = () => {
      setVisible(true)
   }

   const hideModal = () => {
      setVisible(false)
      // props.visible = false
   }

   useEffect(() => {
      // setVisible(visible)
      console.log('User useEffect LearnMoreTop')
      // console.log(guid[0].currentIndex)
      animateAndSetState(setShowMeForGuid,1,elmRef)
      
      // if (guid[0] && guid[0].currentIndex == 1 ) {
      //     setShowMeForGuid('show__me__for__guid')
      //     window.scrollTo(0, 0)
      // }else{
      //     setShowMeForGuid('')
      // }

   })

   return (
        <>
          <div ref={elmRef} class={'top__bar '+showMeForGuid}> {guid[0].currentIndex} Buy now, pay later with Splintr. <span class="top__learn__more" onClick={showModal}>Learn more</span></div>
          <Rodal  visible={visible} onClose={hideModal} animation="fade" height={480} width={520}>
            <div class=" show__me__for__guid modal-wrapper">
               <div class="modal-header">
                  <img src="/assets/images/logo.svg"/>
               </div>
               <div class="modal-body">
                  <div class="fi-text"> Buy now, pay later</div>
                  <div class="se-text"> It couldn't be smooother.</div>
                  <ul class="ul-step" id="progress">
                      <li class="li-step"><div class="node black"></div><p>Add item(s) to your cart</p></li>
                      <li class="li-step"><div class="divider grey"></div></li>
                      <li class="li-step"><div class="node black"></div><p>Go to checkout and choose <img class="splintr-pay" src="/assets/images/splintr-pay.jpg" /></p></li>
                      <li class="li-step"><div class="divider grey"></div></li>
                      <li class="li-step"><div class="node black"></div><p>Splintr gives you the flexibility of spreading your payments over time</p></li>
                  </ul>
               </div>
               <div class="modal-footer spl-m-footer">
                  <SplintrButton name="Close" onClick={hideModal}/>
               </div>
            </div>
          </Rodal>
        </>
   );
}

export default LearnMoreTop;
