import React from 'react';
import { useState } from 'react';
import userInfoStyle from './user-info.module.css'
import EditAvatarModal from '../../edit-avatar-modal/edit-avatar-modal';
import EditProfileModal from '../../edit-profile-modal/edit-profile-modal';
import AddCardModal from '../../add-card-modal/add-card-modal';
import Modal from '../../modal/modal';
import { useSelector } from 'react-redux';

const UserInfo = () => {
	const user = useSelector(store => store.userData.user)
	const { avatar, name, about} = user

	const [openEditForm, setOpenEditForm] = useState(false)
	const [openAvatarForm, setOpenAvatarForm] = useState(false)
	const [openAddCardForm, setOpenAddCardForm] = useState(false)

	const handleOpenEditForm = () => {
		setOpenEditForm(true);
	}

	const handleOpenAddCardForm = () => {
		setOpenAddCardForm(true);
	}

	const handleOpenAvatarForm = () => {
		setOpenAvatarForm(true);
	}

	const handleCloseModal = () => {
		setOpenEditForm(false);
		setOpenAvatarForm(false);
		setOpenAddCardForm(false);
	}

	return (
		<section className={userInfoStyle.profile}>
			<div className={userInfoStyle.avatarContainer}>
				<img src={avatar} alt="Аватар Пользователя" className={userInfoStyle.avatar} />
				<button className={userInfoStyle.avatarEdit} onClick={handleOpenAvatarForm}></button>
			</div>
			<h1 className={userInfoStyle.title}>{name}</h1>
			<button className={`${userInfoStyle.button} ${userInfoStyle.buttonTypeEdit}`} onClick={handleOpenEditForm}></button>
			<p className={userInfoStyle.subtitle}>{about}</p>
			<button className={`${userInfoStyle.button} ${userInfoStyle.buttonTypeAdd}`} onClick={handleOpenAddCardForm}></button>
			{openEditForm &&
				<Modal
					active={openEditForm}
					onClickClose={handleCloseModal}>
					<EditProfileModal onClickClose={handleCloseModal} />
				</Modal>
			}
			{openAvatarForm &&
				<Modal
					active={openAvatarForm}
					onClickClose={handleCloseModal}>
					<EditAvatarModal onClickClose={handleCloseModal}/>
				</Modal>
			}
			{openAddCardForm &&
				<Modal
					active={openAddCardForm}
					onClickClose={handleCloseModal}>
					<AddCardModal onClickClose={handleCloseModal}/>
				</Modal>
			}
		</section>
	)
}


export default UserInfo;