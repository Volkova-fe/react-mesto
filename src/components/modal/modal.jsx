import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types"
import modalStyles from './modal.module.css'
import ModalOverlay from './modal-overlay/modal-overlay'

const modalRoot = document.querySelector('#modal');

const Modal = ({ active, onClickClose, children }) => {

	useEffect(() => {
		function handleEscClose(evt) {
			if (evt.key === 'Escape') {
				onClickClose();
			}
		}
		if (active) {
			document.addEventListener('keydown', handleEscClose);
			return () => {
				document.removeEventListener('keydown', handleEscClose);
			}
		}
	}, [active])

	return ReactDOM.createPortal(
		<>
			<div className={modalStyles.container}>
				{children}
			</div>
			<ModalOverlay active={active} onClickClose={onClickClose} />
		</>
		, modalRoot)

}

Modal.propTypes = {
	active: PropTypes.bool.isRequired,
	onClickClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

export default Modal;