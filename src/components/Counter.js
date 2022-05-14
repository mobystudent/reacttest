import React, { useState } from 'react';
import propTypes from 'prop-types';

function Counter(props) {
	let { min, max, countDef, onChange } = props;
	let [ stateCount, setCount ] = useState({
		countItem: countDef,
		inputValue: countDef
	});

	function increase() {
		check(stateCount.countItem + 1);
	}

	function decrease() {
		check(stateCount.countItem - 1);
	}

	function check(countVal) {
		const checkCount = Math.min(Math.max(min, countVal), max);
		// console.log(setCount);

		setCount({
			countItem: checkCount,
			inputValue: checkCount
		});
		// console.log(stateCount);

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

	return (
		<div className="counter">
			<button className="counter__btn" type="button" onClick={decrease}>-</button>
			<input
				className="counter__input"
				type="text"
				value={stateCount.countItem}
				onChange={({ target }) => checkType(parseInt(target.value))}
				// onBlur={({ target }) => checkType(parseInt(target.value))}
				// key={stateCount.countItem}
			/>
			<button className="counter__btn" type="button" onClick={increase}>+</button>
		</div>
	);
}

Counter.defaultProps = {
	onChange: function(countDef) {}
}

Counter.propTypes = {
	min: propTypes.number.isRequired,
	max: propTypes.number.isRequired,
	countDef: propTypes.number.isRequired,
	onChange: propTypes.func
};

export default Counter;
