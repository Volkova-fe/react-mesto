import React, { useCallback, useEffect } from 'react';
import cardStyle from './card.module.css'
import { useState } from 'react';
import Modal from '../../modal/modal';
import CardViewModal from '../../card-view-modal/card-view-modal';
import RemoveCardModal from '../../remove-card-modal/remove-card-modal';
import { useDispatch, useSelector } from 'react-redux';

import { putLikeCard } from '../../../services/actions/card';

const Card = ({ card }) => {
	const dispatch = useDispatch();
	const [openCardView, setOpenCardView] = useState(false);
	const [openRemoveCardModal, setOpenRemoveCardModal] = useState(false);
	const { name, link, likes, _id } = card;
	const user = useSelector(store => store.userData.user)

	
	const isLiked = card.likes.some(item => item._id === user._id)
	const className = isLiked ? `${cardStyle.buttonStateActive}` : '';


	/*const onDelete = useCallback((_id) => {
		dispatch(onDeleteCard(_id))
	}, [dispatch]);


	function handleLikeClick() {
		onLikeCard(_id, !isLiked)
	}*/

	const handlePutLike = () => {
		dispatch(putLikeCard(_id, isLiked));
	};


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
			{card.owner._id !== user._id ? '' : (<button className={cardStyle.remove} type="button"></button>)}
			<img src={link} className={cardStyle.pic} alt={name} onClick={handleOpenCardView} />
			<div className={cardStyle.description}>
				<h2 className={cardStyle.title}>{name}</h2>
				<div className={cardStyle.likes}>
					<button className={`${cardStyle.button} ${className}`} onClick={handlePutLike}></button>
					<p className={cardStyle.countLikes}>{likes.length}</p>
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