import {
	ADD_CARD_FORM_SET_VALUE,
	ADD_CARD_FORM_SUBMIT,
	ADD_CARD_FORM_SUBMIT_FAILED,
	ADD_CARD_FORM_SUBMIT_SUCCESS,
	DELETE_CARD_FAILED,
	DELETE_CARD_REQUEST,
	DELETE_CARD_SUCCESS,
	GET_CARDS_FAILED,
	GET_CARDS_REQUEST,
	GET_CARDS_SUCCESS,
	LIKE_CARD_FAILED,
	LIKE_CARD_REQUEST,
	LIKE_CARD_SUCCESS
} from "../actions/card";


const cardsInitialState = {
	cards: [],
	cardsRequest: false,
	cardsFailed: false,
	form: {
		name: '',
		link: '',
		likes: [],
	},
	addCardRequest: false,
	addCardFailed: false,
};

export const cardsReducer = (state = cardsInitialState, action) => {
	switch (action.type) {
		case GET_CARDS_REQUEST: {
			return {
				...state,
				cardsFailed: false,
				cardsRequest: true
			};
		}
		case GET_CARDS_FAILED: {
			return {
				...state,
				cardsFailed: true,
				cardsRequest: false
			};
		}
		case GET_CARDS_SUCCESS: {
			return {
				...state,
				cards: action.cards,
				cardsRequest: false,
				cardsFailed: false
			};
		}
		case LIKE_CARD_REQUEST: {
			return {
				...state,
				cardsFailed: false,
				cardsRequest: true
			};
		}
		case LIKE_CARD_FAILED: {
			return {
				...state,
				cardsFailed: true,
				cardsRequest: false
			};
		}
		case LIKE_CARD_SUCCESS: {
			return {
				...state,
				cards: state.cards.map(
					(card) => {
						if (action.cards._id === card._id) {
							return {
								...card,
								likes: action.cards.likes,
							};
						}
						return card;
					}),
				cardsRequest: false,
				cardsFailed: false
			};
		}
		case DELETE_CARD_REQUEST: {
			return {
				...state,
				cardsFailed: false,
				cardsRequest: true
			};
		}
		case DELETE_CARD_FAILED: {
			return {
				...state,
				cardsFailed: true,
				cardsRequest: false
			};
		}
		case DELETE_CARD_SUCCESS: {
			return {
				...state,
				cards: [...state.cards].filter(
					(card) => {
						return card._id !== action._id;
					}
				),
				cardsRequest: false,
				cardsFailed: false
			};
		}
		case ADD_CARD_FORM_SET_VALUE: {
			return {
				...state,
				form: {
					...state.form,
					[action.field]: action.value
				}
			}
		}
		case ADD_CARD_FORM_SUBMIT: {
			return {
				...state,
				addCardRequest: true,
				addCardFailed: false
			}
		}
		case ADD_CARD_FORM_SUBMIT_SUCCESS: {
			return {
				...state,
				form: {
					// При успешной регистрацией сбрасываем форму до исходного состояния
					...state.form
				},
					addCardRequest: false
			}
		}
		case ADD_CARD_FORM_SUBMIT_FAILED: {
			return {
				...state,
				addCardRequest: false,
				addCardFailed: true
			}
		}
		default: {
			return state;
		}
	}
};