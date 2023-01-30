import './SectionHeaders.css';
const sectionHeaders = ({ upperText, lowerText, textAllign }) => {
	return (
		<div className='headers-container' style={{ textAlign: textAllign }}>
			<h5 className='headers-upper-text'>{upperText}</h5>
			<h2 className='headers-lower-text'>{lowerText}</h2>
		</div>
	);
};

export default sectionHeaders;
