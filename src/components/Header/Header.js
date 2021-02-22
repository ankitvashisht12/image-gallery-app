import React from 'react'
import { BsImageFill } from 'react-icons/bs';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={`text-center ${styles.header}`}>
			<h1>< BsImageFill /> Image Gallery	</h1>
		</header>
	)
}

export default Header
