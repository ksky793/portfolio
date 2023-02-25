import CV from '../../../../assets/cv/CV-Kamil_Świętochowski.pdf';
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
