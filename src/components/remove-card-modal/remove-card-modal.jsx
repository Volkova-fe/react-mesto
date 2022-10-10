import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {deleteCard} from "../../services/actions/card";

const RemoveCardModal = ({ onClickClose, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteCard(id))
  };

	return (
		<div className="popup__container popup__form popup__container_position_top" id="deleteForm">
			<button className="popup__button popup__button_type_close popup__close" onClick={onClickClose}></button>
			<h2 className="popup__heading popup__heading_style_popupDelete">Вы уверены?</h2>
			<button className="popup__button popup__button_type_save" type="button" id="deletePopupButton" onClick={onDelete}>Да</button>
		</div>
	)
}

export default RemoveCardModal;

