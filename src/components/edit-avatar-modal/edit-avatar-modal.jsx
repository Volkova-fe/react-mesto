import React from 'react';

const EditAvatarModal = ({onClickClose}) => {
	return (
		<>
			<h3 className="popup__header">Обновить аватар</h3>
			<button className="popup__button popup__button_type_close" onClick={onClickClose}>
			</button>
			<form className="popup__form" id="edit_avatar" name="edit_avatar" noValidate action='#'>
				<fieldset className="popup__set">
					<label className="popup__field">
						<input className="popup__input" type="url" id="link-avatar_pic" name="link" placeholder="Ссылка на картинку"
							required />
						<span className="popup__input-error" id="link-avatar_pic-error"></span>
					</label>
					<button className="popup__button popup__button_type_save" type="submit"
						id="avatar-button-save">Сохранить</button>
				</fieldset>
			</form>
		</>
	)
}

export default EditAvatarModal;