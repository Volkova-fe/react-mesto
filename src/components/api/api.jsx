
/*class Api {



	//Отредактировать данные о пользователе
	editInfoProfile = (name, about) => {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			body: JSON.stringify({
				name: name,
				about: about,
			}),
			headers: this._headers,
		})
			.then(this._checkResponse)
	}

	//Отредактировать аватар пользователя
	editAvatarProfile = (link) => {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			body: JSON.stringify({
				avatar: link,
			}),
			headers: this._headers,
		})
			.then(this._checkResponse)
	}


	//Добавить новую карточку
	addNewCards = (data) => {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			body: JSON.stringify({
				name: data.name,
				link: data.link,
			}),
			headers: this._headers,
		})
			.then(this._checkResponse)
	}

*/

export const API = {
	url: 'https://nomoreparties.co/v1/plus-cohort-9/',
	headers: {
		authorization: '7c830fbc-53f4-4c63-a7ce-3acd53d5bb5b',
		'Content-Type': 'application/json'
	}
};

export const checkResponse = res => {
	if (res.ok) {
		return res.json()
	} else {
		return Promise.reject(`Ошибка: code ${res.status}`)
	}
}

export const getCardsData = async () => {
	return await fetch(`${API.url}cards`, {
		method: 'GET',
		headers: {
			authorization: '7c830fbc-53f4-4c63-a7ce-3acd53d5bb5b',
			'Content-Type': 'application/json'
		}
	})
	.then (checkResponse);
}

export const getUserInfoData = async () => {
	return await fetch(`${API.url}users/me`, {
		method: 'GET',
		headers: {
			authorization: '7c830fbc-53f4-4c63-a7ce-3acd53d5bb5b',
			'Content-Type': 'application/json'
		}
	})
	.then (checkResponse);
}

export const onLikeCard = async (cardId, likeStatus) => {
	return await fetch(`${API.url}cards/likes/${cardId}`, {
		method: likeStatus ? "DELETE" : "PUT",
		headers: {
			authorization: '7c830fbc-53f4-4c63-a7ce-3acd53d5bb5b',
			'Content-Type': 'application/json'
		}
	})
	.then (checkResponse);
}

export const onDeleteCard = async (cardId) => {
	return await fetch(`${API.url}cards/${cardId}`, {
		method: 'DELETE',
		headers: {
			authorization: '7c830fbc-53f4-4c63-a7ce-3acd53d5bb5b',
			'Content-Type': 'application/json'
		}
	})
	.then (checkResponse);
}

export const addNewCard = async (data) => {
	return await fetch(`${API.url}cards`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			authorization: '7c830fbc-53f4-4c63-a7ce-3acd53d5bb5b',
			'Content-Type': 'application/json'
		}
	})
	.then (checkResponse);
}
