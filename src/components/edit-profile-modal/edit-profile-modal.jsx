import React from 'react';

const EditProfileModal = ({onClickClose}) => {
	return (
		<>
		<h3 className="popup__header">Редактировать профиль</h3>
		<button className="popup__button popup__button_type_close" onClick={onClickClose}>
		</button>
		<form className="popup__form" id="edit_profile" name="edit_profile" noValidate action='#'>
			<fieldset className="popup__set">
				<label className="popup__field">
					<input className="popup__input" type="text" id="name" name="name" placeholder="Имя" required minLength="2"
						maxLength="40"/>
						<span className="popup__input-error" id="name-error"></span>
				</label>
				<label className="popup__field">
					<input className="popup__input" type="text" id="about" name="about" placeholder="О себе" required
						minLength="2" maxLength="200"/>
						<span className="popup__input-error" id="about-error"></span>
				</label>
				<button className="popup__button popup__button_type_save" type="submit"
					id="profile-button-save">Сохранить</button>
			</fieldset>
		</form>
		</>
	)
}

export default EditProfileModal;