import React from 'react';

const CardViewModal = ({ title, image, onClickClose }) => {
	return (
		<div className="popup__pic-container">
			<button className="popup__button popup__button_type_close popup__close" id="close_popupPic"
				type="button" onClick={onClickClose}></button>
			<img src={image} className="popup__image" alt={title} />
			<h2 className="popup__title">{title}</h2>
		</div>
	)
}

export default CardViewModal;