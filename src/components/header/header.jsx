import React from 'react';
import headerStyle from './header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
	return (
		<header className={headerStyle.header}>
			<img src={logo} alt="Логотип Мастер" className={headerStyle.logo}/>
		</header>
	)
}

export default Header;