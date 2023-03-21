import CV from '../../../../assets/cv/CV_KamilŚwiętochowski_2023.pdf';
const DownloadButton = () => {
	return (
		<a
			className='btn btn--download-cv'
			href={CV}
			download='CV-Kamil_Świętochowski.pdf'
		>
			DOWNLOAD CV
		</a>
	);
};

export default DownloadButton;
