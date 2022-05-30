import React from 'react';
import propTypes from 'prop-types';
import styles from './modal.module.styl';

function Modal(props) {
	const {
		block,
		title,
		text,
		btns,
		btn,
		show,
		hide
	} = styles;
	const { status, onModal, onResult } = props;
	const modalClass = [block, status ? show : hide].join(' ');

	return (
		<div className={ modalClass }>
			<h2 className={ title }>Подтвердите отправку данных</h2>
			<p className={ text }>Вы уверены, что хотите отправить заявку?</p>
			<div className={ btns }>
				<button className={ btn } type='button' onClick={ () => onModal(false) }>Нет</button>
				<button className={ btn } data-type='result' type='button' onClick={ ({ target }) => onResult(target) }>Да</button>
			</div>
		</div>
	);
}

Modal.propTypes = {
	status: propTypes.bool.isRequired,
	onModal: propTypes.func.isRequired,
	onResult: propTypes.func.isRequired
};

export default Modal;
