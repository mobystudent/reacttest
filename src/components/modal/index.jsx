import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import modalStore from '~s/modal.store';
import { route } from '~/routes';
import styles from './modal.module.styl';

const Modal = observer(() => {
	const {
		block,
		title,
		text,
		btns,
		btn,
		background
	} = styles;

	return (
		<>
			<div className={ block }>
				<h2 className={ title }>Подтвердите отправку данных</h2>
				<p className={ text }>Вы уверены, что хотите отправить заявку?</p>
				<div className={ btns }>
					<button className={ btn } type='button' onClick={ () => modalStore.switch(false) }>Нет</button>
					<Link className={ btn } to={ route.result }>Да</Link>
				</div>
			</div>
			<div className={ background }></div>
		</>
	);
});

export default Modal;
