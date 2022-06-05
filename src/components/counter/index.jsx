import React, { useState, memo } from 'react';
import propTypes from 'prop-types';
import styles from './counter.module.styl';

function Counter(props) {
	const { min, max, onChange } = props;
	let [ count, setCount ] = useState({
		countItem: 1,
		inputValue: 1
	});

	function increase() {
		check(count.countItem + 1);
	}

	function decrease() {
		check(count.countItem - 1);
	}

	function check(countVal) {
		const checkCount = Math.min(Math.max(min, countVal), max);

		setCount({
			countItem: checkCount,
			inputValue: checkCount
		});

		onChange(checkCount);
	}

	function checkType(value) {
		const countValue = isNaN(value) ? min : value;

		check(countValue);
	}

	// function setValue(newValue) {
	// 	setCount({
	// 		inputValue: newValue
	// 	});
	// }
	const {
		counter,
		input,
		btn
	} = styles;

	return (
		<div className={ counter }>
			<button className={ btn } type="button" onClick={ decrease }>-</button>
			<input
				className={ input }
				type="text"
				value={ count.countItem }
				onChange={({ target }) => checkType(parseInt(target.value))}
				// onBlur={({ target }) => checkType(parseInt(target.value))}
				// key={count.countItem}
			/>
			<button className={ btn } type="button" onClick={ increase }>+</button>
		</div>
	);
}

Counter.defaultProps = {
	onChange: function() {}
}

Counter.propTypes = {
	min: propTypes.number.isRequired,
	max: propTypes.number.isRequired,
	onChange: propTypes.func
};

export default memo(Counter);
