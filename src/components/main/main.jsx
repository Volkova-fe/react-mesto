import React, {useEffect} from 'react';
import mainStyle from './main.module.css'
import UserInfo from './user-info/user-info';
import Card from './card/card';
import {useDispatch, useSelector} from 'react-redux';
import {getCards} from "../../services/actions/card";

const Main = () => {
  const dispatch = useDispatch();
  const {cards, addCardSuccess, removeCardSuccess} = useSelector(store => store.cardsData);

  useEffect(() => {
    dispatch(getCards());
  }, [addCardSuccess, removeCardSuccess])

  return (<main className={mainStyle.content}>
    <UserInfo/>
    <div className={mainStyle.cards}>
      <ul className={mainStyle.container}>
        <>{cards.map((card) => <Card key={card._id} card={card}/>)}</>
      </ul>
    </div>
  </main>)
}

export default Main;
