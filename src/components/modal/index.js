import React from 'react';
import { observer } from 'mobx-react';
import modalStore from '~s/modal.store';
import routerStore from '~s/router.store';
import styles from './modal.module.styl';

const Modal = observer(() => {
	const {
		block,
		title,
		text,
		btns,
		btn
	} = styles;

	return (
		<div className={ block }>
			<h2 className={ title }>Подтвердите отправку данных</h2>
			<p className={ text }>Вы уверены, что хотите отправить заявку?</p>
			<div className={ btns }>
				<button className={ btn } type='button' onClick={ () => modalStore.switch(false) }>Нет</button>
				<button className={ btn } type='button' onClick={ () => routerStore.moveTo('result') }>Да</button>
			</div>
		</div>
	);
});

export default Modal;
