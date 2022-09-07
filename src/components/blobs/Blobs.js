import blobSource from './getBlobSource';
import Blob from './blob/Blob';
const Blobs = () => {
	const blobs = [
		{
			id: 1,
			src: blobSource.getBlob1,
		},
		{
			id: 2,
			src: blobSource.getBlob2,
		},
		{
			id: 3,
			src: blobSource.getBlob3,
		},
		{
			id: 4,
			src: blobSource.getBlob4,
		},
		{
			id: 5,
			src: blobSource.getBlob5,
		},
		{
			id: 6,
			src: blobSource.getBlob6,
		},
		{
			id: 7,
			src: blobSource.getBlob7,
		},
	];
	return (
		<div className='blobs'>
			{blobs.map((el) => (
				<Blob key={el.id} src={el.src} />
			))}
		</div>
	);
};

export default Blobs;
