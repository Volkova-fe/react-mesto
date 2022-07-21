import { getUserInfoData } from "../../components/api/api";

export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_FAILED = 'USER_INFO_FAILED';

export function getUserInfo() {
	return function (dispatch) {
		dispatch({
			type: USER_INFO_REQUEST
		});
		getUserInfoData()
			.then((res) => {
				dispatch({
					type: USER_INFO_SUCCESS,
					user: res
				});
			})
			.catch(() => {
				dispatch({
					type: USER_INFO_FAILED,
				});
			})
	};
}