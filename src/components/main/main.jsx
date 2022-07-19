import React from 'react';
import mainStyle from './main.module.css'
import UserInfo from './user-info/user-info';
import Card from './card/card';

const Main = ({ 
	user, 
	cards, 
}) => {

	return (
		<main className={mainStyle.content}>
			<UserInfo
				avatar={user.avatar}
				name={user.name}
				about={user.about}
			/>
			<div className={mainStyle.cards}>
				<ul className={mainStyle.container}>
						{cards.map((card) => {
							return <Card
								link={card.link}
								name={card.name}
								likes={card.likes.length}
								key={card._id} 
								/>
						})}
				</ul>
			</div>
		</main>
	)
}

export default Main;