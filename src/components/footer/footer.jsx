import React from 'react';
import footerStyle from './footer.module.css'

const Footer = () => {
	return (
		<footer className={footerStyle.footer}>
			<p className={footerStyle.author}>&copy;2022. Волкова Мария</p>
		</footer>
	)
}

export default Footer;