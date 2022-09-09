import './SectionHeaders.css';
const sectionHeaders = ({ upperText, lowerText, headersParagraph }) => {
	return (
		<div className='headers-container'>
			<h3 className='headers-upper-text'>{upperText}</h3>
			<h2 className='headers-lower-text'>{lowerText}</h2>
			{headersParagraph && (
				<p className='services-main-paragraph'>{headersParagraph}</p>
			)}
		</div>
	);
};

export default sectionHeaders;
