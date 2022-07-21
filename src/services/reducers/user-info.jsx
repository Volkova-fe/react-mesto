import {
	USER_INFO_FAILED,
	USER_INFO_REQUEST,
	USER_INFO_SUCCESS
} from "../actions/user-info";


const userInitialState = {
	user: [],
	userRequest: false,
	userFailed: false
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case USER_INFO_REQUEST: {
			return {
				...state,
				userFailed: false,
				userRequest: true
			};
		}
		case USER_INFO_FAILED: {
			return {
				...state,
				userFailed: true,
				userRequest: false
			};
		}
		case USER_INFO_SUCCESS: {
			return {
				...state,
				user: action.user,
				userRequest: false,
				userFailed: false
			};
		}
		default: {
			return state;
		}
	}
};