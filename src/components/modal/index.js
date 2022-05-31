import React from 'react';
import propTypes from 'prop-types';
import { observer } from 'mobx-react';
import modalStore from '~s/modal.store';
import styles from './modal.module.styl';

const Modal = observer((props) => {
	const {
		block,
		title,
		text,
		btns,
		btn
	} = styles;
	const { onResult } = props;

	return (
		<div className={ block }>
			<h2 className={ title }>Подтвердите отправку данных</h2>
			<p className={ text }>Вы уверены, что хотите отправить заявку?</p>
			<div className={ btns }>
				<button className={ btn } type='button' onClick={ () => modalStore.switch(false) }>Нет</button>
				<button className={ btn } data-type='result' type='button' onClick={ ({ target }) => onResult(target) }>Да</button>
			</div>
		</div>
	);
});

Modal.propTypes = {
	onResult: propTypes.func.isRequired
};

export default Modal;
