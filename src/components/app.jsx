import React from 'react';
import { useState, useEffect } from 'react';
import api from '../utils/api'
import appStyle from './app.module.css';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => { setCards(res) })
      .catch(err => { console.log(err) });
  }, [])

  useEffect(() => {
    api
      .getInfoProfile()
      .then((res) => { setCurrentUser(res) })
      .catch(err => { console.log(err) });
  }, [])

  return (
    <div className={appStyle.page}>
      <Header />
      <Main
        user={currentUser}
        cards={cards}
      />
      <Footer />
    </div>
  );
}

export default App;
