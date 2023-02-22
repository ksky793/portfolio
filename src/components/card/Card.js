import './Card.scss';
const Card = (props) => {
	const { children, modifier } = props;
	return <div className={`card card--size-${modifier}`}>{children}</div>;
};

export default Card;
