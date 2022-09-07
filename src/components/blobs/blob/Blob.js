import '../Blobs.css';
const Blob = ({ src }) => {
	console.log(src);
	return (
		<div className='blob-container'>
			<img className='blob' src={src} />
			<img className='blob' src={src} />
		</div>
	);
};
export default Blob;
