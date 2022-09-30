import './Header.css';
import myImage from '../../assets/images/headerPhoto.png';
import HireButton from '../ui/buttons/hireButton/HireButton';
import DownloadButton from '../ui/buttons/downloadButton/DownloadButton';
import blob from '../../assets/svgs/Blobs/blob.svg';
import Blobs from '../blobs/Blobs';

const Header = () => {
	return (
		<header className='header-container' id='header'>
			<div className='header-background'>
				<div className='background-left-side'></div>
				<div className='background-right-side'></div>
			</div>
			<img className='header-my-image' src={myImage} alt='My Image' />

			<h1 className='header-title'>
				Hello,<span> I'm Kamil! </span>{' '}
			</h1>

			<div className='header-text-container'>
				<h2 className='header-position'>
					Junior Frontend <span>Developer</span>
				</h2>
				<p className='header-description'>
					I am a beginner frontend developer. I'm looking for a place where I
					would continue to develop my skills.
				</p>

				<HireButton />
				<DownloadButton />
			</div>
			<Blobs />
		</header>
	);
};

export default Header;
