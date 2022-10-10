import React, { useEffect } from 'react';
import appStyle from './app.module.css';
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import { getCards } from '../services/actions/card';
import { getUserInfo } from '../services/actions/user-info';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

  return (
    <div className={appStyle.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
