import './Header.css';
import myImage from '../../assets/images/headerPhoto.png';
import HireButton from '../ui/buttons/hireButton/HireButton';
import DownloadButton from '../ui/buttons/downloadButton/DownloadButton';
import blob from '../../assets/svgs/Blobs/blob.svg';
import Blobs from '../blobs/Blobs';

const Header = () => {
	return (
		<header className='header-container'>
			<div className='header-background'>
				<div className='background-left-side'></div>
				<div className='background-right-side'></div>
			</div>
			<img className='header-my-image' src={myImage} alt='My Image' />

			<h1 className='header-title'>
				Hello,<span> I'm Kamil! </span>{' '}
			</h1>

			<div className='header-text-container'>
				<h2 className='header-position'>Junior Frontend Developer</h2>
				<p className='header-description'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam
					quos saepe esse sequi optio ratione corrupti.
				</p>

				<HireButton />
				<DownloadButton />
			</div>
			<Blobs />
		</header>
	);
};

export default Header;
