import React, { useRef, memo } from 'react';
import propTypes from 'prop-types';
import styles from './counter.module.styl';

function Counter(props) {
	const { min, max, onChange } = props;
	const refInput = useRef(1);

	const increase = () => check(+refInput.current.value + 1);
	const decrease = () => check(+refInput.current.value - 1);

	function check(countVal) {
		const checkCount = Math.min(Math.max(min, countVal), max);
		refInput.current.value = checkCount;

		onChange(checkCount);
	}

	function checkType() {
		const countValue = isNaN(refInput.current.value) ? min : refInput.current.value;

		check(countValue);
	}

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
				defaultValue={ refInput.current }
				ref={ refInput }
				onBlur={ checkType }
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
