
import { addNewCard, getCardsData, onDeleteCard, onLikeCard } from "../../components/api/api";

export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST';
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FAILED = 'GET_CARDS_FAILED';

export const LIKE_CARD_REQUEST = 'LIKE_CARD_REQUEST';
export const LIKE_CARD_SUCCESS = 'LIKE_CARD_SUCCESS';
export const LIKE_CARD_FAILED = 'LIKE_CARD_FAILED';

export const DELETE_CARD_REQUEST = 'DELETE_CARD_REQUEST';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_FAILED = 'DELETE_CARD_FAILED';

export const ADD_CARD_FORM_SET_VALUE = 'ADD_CARD_FORM_SET_VALUE';

export const ADD_CARD_FORM_SUBMIT = 'ADD_CARD_FORM_SUBMIT';
export const ADD_CARD_FORM_SUBMIT_SUCCESS = 'ADD_CARD_FORM_SUBMIT_SUCCESS';
export const ADD_CARD_FORM_SUBMIT_FAILED = 'ADD_CARD_FORM_SUBMIT_FAILED';


export function getCards() {
	return function (dispatch) {
		dispatch({
			type: GET_CARDS_REQUEST
		});
		getCardsData()
			.then((res) => {
				dispatch({
					type: GET_CARDS_SUCCESS,
					cards: res
				});
			})
			.catch(() => {
				dispatch({
					type: GET_CARDS_FAILED,
				});
			})
	};
}

export function putLikeCard(cardId, likeStatus) {
	return function (dispatch) {
		dispatch({
			type: LIKE_CARD_REQUEST
		});
		onLikeCard(cardId, likeStatus)
			.then((res) => {
				dispatch({
					type: LIKE_CARD_SUCCESS,
					cards: res
				});
			})
			.catch(() => {
				dispatch({
					type: LIKE_CARD_FAILED,
				});
			})
	};
}

export function deleteCard(cardId) {
	return function (dispatch) {
		dispatch({
			type: DELETE_CARD_REQUEST
		});
		onDeleteCard(cardId)
			.then((res) => {
				dispatch({
					type: DELETE_CARD_SUCCESS,
					cards: res
				});
			})
			.catch(() => {
				dispatch({
					type: DELETE_CARD_FAILED,
				});
			})
	};
}

export const setAddCardFormValue = (field, value) => ({
	type: ADD_CARD_FORM_SET_VALUE,
	field,
	value
});

export function newCard(data) {
	return function (dispatch) {
		dispatch({
			type: ADD_CARD_FORM_SUBMIT
		});
		addNewCard(data)
			.then((res) => {
				dispatch({
					type: ADD_CARD_FORM_SUBMIT_SUCCESS,
					cards: res
				});
			})
			.catch(() => {
				dispatch({
					type: ADD_CARD_FORM_SUBMIT_FAILED,
				});
			})
	};
}

