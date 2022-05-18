import React from 'react';
import propTypes from 'prop-types';
import styles from './result.module.styl';

function Result(props) {
	const { active = '' } = props;
	const {
		result,
		title,
		text,
		hide
	} = styles;

	return (
		<div className={ active === 'result' ? result : hide }>
			<h1 className={ title }>Congratulation</h1>
			<p className={ text }>Your order has been successfully sent</p>
		</div>
	);
}

Result.propTypes = {
	active: propTypes.string.isRequired
};

export default Result;
