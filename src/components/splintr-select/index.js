import { h } from 'preact';
import style from './style.css';

const SplintrSelect = (props) => (
	<div class={style.select__wrapper}>
		<label for="splintr-select">
			<div class={style.s2}>
				<div class={style.s8}></div>
				<div class={style.s3}>
				   <div class={style.s4}>
				   	<span class={style.s5} >{props._data.label}</span></div>
				   <div class={style.s5_prime}>{props._data.options[0].text}</div>
				</div>
				<select id="splintr-select" name="splintr-select" class={style.s6}>
					{
						props._data.options.map((option) =>
							<option value={option.value} label={option.text}>{option.text}</option>
						)
					}
				
				</select>
				<div class={style.s7}>
					<svg focusable="false" height="20" width="20">
						<path d="M9.748,12.889 C9.531,12.889 9.314,12.819 9.133,12.678 L4,8.678 L5.23,7.1 L9.748,10.62 L14.259,7.101 L15.489,8.677 L10.363,12.677 C10.183,12.819 9.965,12.889 9.748,12.889" fill="rgba(150, 147, 145, 1)" style="transition: fill 0.2s ease 0s;"></path>
					</svg>
				</div>
			</div>
	    </label>
	</div>
);

export default SplintrSelect;
