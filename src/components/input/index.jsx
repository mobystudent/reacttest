import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import styles from './input.module.styl';

function Input(props) {
	const { count, onCount } = props;
	const ref = useRef('');
	const {
		input
	} = styles;

	function changeValue() {
		onCount(ref.current.value);
	}

	useEffect(() => {
		ref.current.value = count;
	}, [count]);

	return (
		<input
			className={ input }
			type="text"
			defaultValue={ count }
			ref={ ref }
			onBlur={ changeValue }
		/>
	);
}

Input.propTypes = {
	count: propTypes.number.isRequired,
	onCount: propTypes.func.isRequired
};

export default Input;
