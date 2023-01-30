import './Header.scss';
import myImage from '../../assets/images/headerPhoto-0.33x.png';
import HireButton from '../ui/buttons/hireButton/HireButton';
import DownloadButton from '../ui/buttons/downloadButton/DownloadButton';
import Blobs from '../blobs/Blobs';
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

	const isMobile = widthSize < 768;
	const mainText = (
		<h1 className='header-main-text'>
			Hello,<span> I'm Kamil! </span>
		</h1>
	);
	return (
		<header className='header-container'>
			<div className='header-background'>{!isMobile && mainText}</div>
			<div className='header-text'>
				{isMobile && mainText}
				<div className='header-bottom-text'>
					<h2 className='header-position'>
						Junior Frontend <span>Developer</span>
					</h2>
					<p className='header-description'>
						I am a beginner frontend developer. I'm looking for a place where I
						would continue to develop my skills.
					</p>
				</div>
				<div className='header-buttons'>
					<HireButton />
					<DownloadButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
