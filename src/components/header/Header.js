import './Header.scss';
import HireButton from '../ui/buttons/hireButton/HireButton';
import DownloadButton from '../ui/buttons/downloadButton/DownloadButton';
import { useEffect, useState } from 'react';

const Header = () => {
	const [widthSize, setWidthSize] = useState(window.innerWidth);

	const handleWindowSizeChange = () => {
		setWidthSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const mainText = (
		<h1 className='header__main-text'>
			Hello,<span> I'm Kamil! </span>
		</h1>
	);

	return (
		<header className='header' id='home'>
			<div className='header__background'>{widthSize > 768 && mainText}</div>
			<div className='header__text'>
				{widthSize < 768 && mainText}
				<div className='header__text__infos'>
					<h2 className='header__text__infos__position'>
						<span>Junior Frontend</span> <span>Developer</span>
					</h2>
					<p className='header__text__infos__description'>
						I am a beginner frontend developer. I'm looking for a place where I
						would continue to develop my skills.
					</p>
				</div>
				<div className='header__buttons'>
					<HireButton />
					<DownloadButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
