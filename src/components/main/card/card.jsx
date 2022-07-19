import React from 'react';
import cardStyle from './card.module.css'
import api from '../../../utils/api'
import { useState, useEffect } from 'react';
import Modal from '../../modal/modal';
import CardViewModal from '../../card-view-modal/card-view-modal';
import RemoveCardModal from '../../remove-card-modal/remove-card-modal';

const Card = ({ link, name, likes }) => {
	const [openCardView, setOpenCardView] = useState(false);
	const [openRemoveCardModal, setOpenRemoveCardModal] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const className = isLiked ? `${cardStyle.buttonStateActive}` : '';


	function handleLike() {
		setIsLiked(!isLiked);
	}



	const handleOpenCardView = () => {
		setOpenCardView(true);
	}

	const handleOpenRemoveCardModal = () => {
		setOpenRemoveCardModal(true);
	}

	const handleCloseModal = () => {
		setOpenCardView(false);
		setOpenRemoveCardModal(false);
	}

	return (
		<li className={cardStyle.card}>
			<button className={cardStyle.remove} type="button" onClick={handleOpenRemoveCardModal}></button>
			<img src={link} className={cardStyle.pic} alt={name} onClick={handleOpenCardView} />
			<div className={cardStyle.description}>
				<h2 className={cardStyle.title}>{name}</h2>
				<div className={cardStyle.likes}>
					<button className={`${cardStyle.button} ${className}`} onClick={handleLike}></button>
					<p className={cardStyle.countLikes}>{likes}</p>
				</div>
			</div>
			{
				openCardView &&
				<Modal
					active={openCardView}
					onClickClose={handleCloseModal}>
					<CardViewModal
						image={link}
						title={name}
						onClickClose={handleCloseModal}
					/>
				</Modal>
			}
			{
				openRemoveCardModal &&
				<Modal
					active={openRemoveCardModal}
					onClickClose={handleCloseModal}>
					<RemoveCardModal
						onClickClose={handleCloseModal}
					/>
				</Modal>
			}
		</li>
	)
}



export default Card;