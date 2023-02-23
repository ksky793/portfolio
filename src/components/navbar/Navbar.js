import React, { useState } from 'react';
import './Navbar.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const navList = ['home', 'about', 'services', 'skills', 'portfolio', 'contact'];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const handleClickItem = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	return (
		<nav className={`navbar`}>
			<ul className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
				{navList.map((el, index) => (
					<li className='navbar__item' onClick={handleClickItem} key={index}>
						<a href={`#${el}`} className='navbar__link'>
							{el}
						</a>
					</li>
				))}
			</ul>
			<button
				className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
				onClick={toggleNav}
			>
				{isOpen ? (
					<AiOutlineClose className='ic ic--color-white ic--small' />
				) : (
					<FaBars className='ic ic--color-white ic--small' />
				)}
			</button>
		</nav>
	);
};

export default Navbar;
