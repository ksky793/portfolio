import './SectionHeaders.scss';
const sectionHeaders = ({ upperText, lowerText, textAllign }) => {
	return (
		<div className='headers' style={{ textAlign: textAllign }}>
			<h5 className='headers__upper-text'>{upperText}</h5>
			<h2 className='headers__lower-text'>{lowerText}</h2>
		</div>
	);
};

export default sectionHeaders;
