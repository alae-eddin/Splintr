import { h } from 'preact';
import { useSelector, useDispatch } from 'react-redux'
import { updateIndex } from '../../actions/guidActions';
import {useEffect, useState} from "preact/hooks";
import SplintrButton from '../splintr-button';
// import LearnMoreModal from '../learn-more-modal';

const Carousel = ({guid}) => {

	const guida  = useSelector(({guidState}) => guidState.guidSteps)
	const dispatch = useDispatch()
	// const [total, setTotal] = useState(0);

	const [carousel, setCarousel] = useState(0);
	const [fadeClass, setFdeClass] = useState("fade__in__right");

	const nextCarousel = () => {
		// console.log('nextCarousel')
		// console.log(guid.currentIndex)
		if (carousel<guid.steps.length-1) {
			setFdeClass('fade__in__right')
			let _carousel = carousel+1;
			setCarousel(_carousel)
			dispatch(updateIndex(_carousel));

		}

	}

	const backCarousel = () => {
		// console.log('backCarousel')
		// console.log(guid.currentIndex)
		if (carousel>0) {
			setFdeClass('fade__in__left')
			let _carousel = carousel-1;
			setCarousel(_carousel)
			dispatch(updateIndex(_carousel));
		}
	}

	return(

		<div class="guided-features-ctn">

			{guid.steps[carousel] && 
				<>
					<div class="gf-header">
						<div>{guid.steps[carousel].title}</div>
						<div class="close__btn">X</div>
					</div>
					<div class={"gf-content "+fadeClass} key={carousel}>
						{guid.steps[carousel].bodyLarge == true
							?
								<h3>{guid.steps[carousel].body}</h3>
							:
								<> {guid.steps[carousel].body} </>
						}
					</div>
				</>
			}

			<div class="carousel-navigation-ctn">
				<div class="carousel-btn-ctn"> <SplintrButton name="Back" onClick={backCarousel}/></div>
				<div class="carousel-btn-ctn"> <SplintrButton name="Next" onClick={nextCarousel}/></div>
			</div>

		</div>

	);
}

export default Carousel;
