// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { newCard, setAddCardFormValue } from '../../services/actions/card';

const AddCardModal = ({ onClickClose }) => {
	const dispatch = useDispatch();
	const {
		name,
		link,
	} = useSelector(state => state.cardsData.form)

	const form = useSelector(state => state.cardsData.form);

  // eslint-disable-next-line no-unused-vars
	const { cardsRequest} = useSelector(state => state.cardsData)

	const onFormChange = (e) => {
		dispatch(setAddCardFormValue(e.target.name, e.target.value))
	}

	const onFormSubmit = (e) => {
		e.preventDefault();
		dispatch(newCard(form))
    onClickClose();
	}

	return (
		<>
			<h3 className="popup__header">Новое место</h3>
			<button className="popup__button popup__button_type_close" onClick={onClickClose}>
			</button>
			<form className="popup__form" id="add_card" name="add_pic" noValidate action='#' onSubmit={onFormSubmit}>
				<fieldset className="popup__set">
					<label className="popup__field">
						<input onChange={onFormChange} className="popup__input" type="text" id="name" name="name" value={name} placeholder="Название" required
							minLength="2" maxLength="30" />
						<span className="popup__input-error" id="name_pic-error"></span>
					</label>
					<label className="popup__field">
						<input onChange={onFormChange} className="popup__input" type="url" id="link" name="link" value={link} placeholder="Ссылка на картинку"
							required />
						<span className="popup__input-error" id="link_pic-error"></span>
					</label>
					{!!cardsRequest ?
						(<button className="popup__button popup__button_type_save" type="submit" id="card-button-save">Создать</button>)
						: (<button className="popup__button popup__button_type_save" type="submit" id="card-button-save">Создать</button>)
					}
				</fieldset>
			</form>
		</>
	)
}

export default AddCardModal;
