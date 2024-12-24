import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel.module.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample flight images (using placeholders)
  const images = [
    {
      src: "https://content.r9cdn.net/rimg/dimg/5f/38/353ec907-ap-MAD-551b0685.jpg?width=1366&height=768&xhint=826&yhint=409&crop=true",
      alt: "Flight 1",
      caption: "Modern passenger aircraft taking off"
    },
    {
      src: "https://digital.ihg.com/is/image/ihg/intercontinental-paris-7596881385-2x1",
      alt: "Flight 2",
      caption: "Airplane flying through clouds"
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/9f/11/0a/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_8e5215ef0ffaccc19ef9",
      alt: "Flight 3",
      caption: "Aircraft landing at sunset"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles['carousel-wrapper']}>
        <div 
          className={styles['slide-container']}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.slide}
              style={{ left: `${index * 100}%` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
              />

            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className={styles['prev-button']}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} color="black" />
        </button>
        <button
          onClick={nextSlide}
          className={styles['next-button']}
          aria-label="Next slide"
        >
          <ChevronRight size={24} color="black" />
        </button>

        <div className={styles['dot-container']}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.dot} ${currentIndex === index ? styles['active-dot'] : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;