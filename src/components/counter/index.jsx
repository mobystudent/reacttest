import React, { useState, memo } from 'react';
import Input from '~c/input';
import propTypes from 'prop-types';
import styles from './counter.module.styl';

function Counter(props) {
	const { min, max, defaultCount, onChange } = props;
	const [ count, setCount ] = useState(defaultCount);

	const increase = () => check(count + 1);
	const decrease = () => check(count - 1);

	function check(countVal) {
		const checkCount = Math.min(Math.max(min, countVal), max);

		setCount(checkCount)
		onChange(checkCount);
	}

	function checkType(value) {
		const countValue = isNaN(value) ? min : +value;

		check(countValue);
	}

	const {
		counter,
		btn
	} = styles;

	return (
		<div className={ counter }>
			<button className={ btn } type="button" onClick={ decrease }>-</button>
			<Input
				count={ count }
				onCount={ (value) => checkType(value) }
			/>
			<button className={ btn } type="button" onClick={ increase }>+</button>
		</div>
	);
}

Counter.propTypes = {
	min: propTypes.number.isRequired,
	max: propTypes.number.isRequired,
	defaultCount: propTypes.number.isRequired,
	onChange: propTypes.func.isRequired
};

export default memo(Counter);
