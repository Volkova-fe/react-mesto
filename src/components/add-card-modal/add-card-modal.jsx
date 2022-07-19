import React from 'react';

const AddCardModal = ({onClickClose}) => {
	return (
		<>
			<h3 className="popup__header">Новое место</h3>
			<button className="popup__button popup__button_type_close" onClick={onClickClose}>
			</button>
			<form className="popup__form" id="add_card" name="add_pic" noValidate action='#'>
				<fieldset className="popup__set">
					<label className="popup__field">
						<input className="popup__input" type="text" id="name_pic" name="name" placeholder="Название" required
							minLength="2" maxLength="30" />
						<span className="popup__input-error" id="name_pic-error"></span>
					</label>
					<label className="popup__field">
						<input className="popup__input" type="url" id="link_pic" name="link" placeholder="Ссылка на картинку"
							required />
						<span className="popup__input-error" id="link_pic-error"></span>
					</label>
					<button className="popup__button popup__button_type_save" type="submit" id="card-button-save">Создать</button>
				</fieldset>
			</form>
		</>
	)
}

export default AddCardModal;