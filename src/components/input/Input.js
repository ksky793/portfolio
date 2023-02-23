const InputTextArea = (props) => {
	return (
		<div className='form-group'>
			<textarea
				type='text'
				name={props.name}
				className='form-control form-control--height-big'
				value={props.value}
				onChange={props.onChange}
				style={{ border: props.showError && '0.5px solid rgb(204, 71, 71)' }}
				placeholder={props.placeholder}
			></textarea>
			{props.showError && <p className='invalid-feedback'>{props.error}</p>}
		</div>
	);
};

const InputText = (props) => {
	return (
		<div className='form-group'>
			<input
				type={props.type}
				name={props.name}
				className={`form-control`}
				value={props.value}
				onChange={props.onChange}
				style={{ border: props.showError && '0.5px solid rgb(204, 71, 71)' }}
				placeholder={props.placeholder}
			/>
			{props.showError && <p className='invalid-feedback'>{props.error}</p>}
		</div>
	);
};

const Input = (props) => {
	switch (props.type) {
		case 'textarea':
			return <InputTextArea {...props} />;
		case 'text':
			return <InputText {...props} />;
		case 'email':
			return <InputText {...props} />;
	}
};

export default Input;
