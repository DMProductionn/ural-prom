import { useState } from 'react';
import style from '../../app/css/Home/slider.module.css';

const slides = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x300?text=Слайд+1',
    text: 'Услуги',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/600x300?text=Слайд+2',
    text: 'Выполенные объекты',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/600x300?text=Слайд+3',
    text: 'Ремонт',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/600x300?text=Слайд+4',
    text: 'Уральский промышленный центр',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/600x300?text=Слайд+5',
    text: 'Производство запчастей',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className={style.slider}>
      <img src={slides[currentSlide].image} alt={`Слайд ${currentSlide + 1}`} />
      <p className='text-[20px] font-[600]'>{slides[currentSlide].text}</p>
      <div className='flex gap-[10px]'>
        <button className={style.button} onClick={prevSlide}>
          Назад
        </button>
        <button className={style.button} onClick={nextSlide}>
          Вперед
        </button>
      </div>
    </section>
  );
};

export default Slider;
