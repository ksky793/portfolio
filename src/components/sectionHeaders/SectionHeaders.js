import './SectionHeaders.css';
const sectionHeaders = ({ upperText, lowerText, headersParagraph }) => {
	return (
		<div
			className='headers-container'
			//condition for featuredprojects section
			style={{
				textAlign: upperText === 'PORTFOLIO' && 'left',
				marginBottom: upperText === 'PORTFOLIO' && '0px',
			}}
		>
			<h3 className='headers-upper-text'>{upperText}</h3>
			<h2
				//condition for featuredprojects section
				className='headers-lower-text'
				style={{ marginBottom: upperText === 'PORTFOLIO' && '0px' }}
			>
				{lowerText}
			</h2>
			{headersParagraph && (
				<p className='services-main-paragraph'>{headersParagraph}</p>
			)}
		</div>
	);
};

export default sectionHeaders;
