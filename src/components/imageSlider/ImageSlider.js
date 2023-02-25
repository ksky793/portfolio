import { useState, useEffect } from 'react';
import './ImageSlider.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		if (currentIndex === 0) {
			setCurrentIndex(slides.length - 1);
		} else setCurrentIndex((currentIndex) => currentIndex - 1);
	};

	const goToNext = () => {
		if (currentIndex === slides.length - 1) {
			setCurrentIndex(0);
		} else setCurrentIndex((currentIndex) => currentIndex + 1);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		// Ustawienie intervalu
		const slideInterval = setInterval(() => {
			goToNext();
		}, 5000); // zmień wartość czasu według własnych potrzeb

		// Czyszczenie intervalu, aby uniknąć wycieku pamięci
		return () => {
			clearInterval(slideInterval);
		};
	}, [currentIndex]);

	return (
		<div className='slider'>
			<div className='slider__left-arrow' onClick={goToPrevious}>
				<AiOutlineLeft />
			</div>
			<div className='slider__right-arrow' onClick={goToNext}>
				<AiOutlineRight />
			</div>
			<div
				className='slider__slide'
				style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
			></div>
			<div className='slider__dots'>
				{slides.map((slide, index) => (
					<GoPrimitiveDot
						className={`dot ${index === currentIndex ? 'dot--active' : ''}`}
						key={index}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>
			<div className='slider__caption'>
				<h4 className='slider__caption__name'>{slides[currentIndex].name}</h4>

				<div className='slider__caption__buttons m-t--20'>
					<a
						href={slides[currentIndex].websiteUrl}
						className='btn btn--demo'
						target='_blank'
						rel='noreferrer'
					>
						DEMO
					</a>

					<a
						href={slides[currentIndex].githubUrl}
						className='btn btn--github'
						target='_blank'
						rel='noreferrer'
					>
						GITHUB
					</a>
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
