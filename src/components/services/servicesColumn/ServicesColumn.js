import 'react-icons/fa';
import './ServicesColumn.css';
const ServicesColumn = ({ icon, header, paragraph }) => {
	return (
		<div  className='services-column'>
			{icon}
			<h4 className='services-column-header'>{header}</h4>
			<p className='services-column-paragraph'>{paragraph}</p>
		</div>
	);
};

export default ServicesColumn;
