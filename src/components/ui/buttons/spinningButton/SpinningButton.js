import { FaSpinner } from 'react-icons/fa';
const SpinningButton = ({ loading, children }) => {
	return (
		<button type='submit' className='btns btn-submit ' disabled={loading}>
			{loading ? <FaSpinner className='spinner' /> : children}
		</button>
	);
};

export default SpinningButton;
