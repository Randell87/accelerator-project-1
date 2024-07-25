const setActiveinstructorSlideInfo = () => {
  if (
    document.querySelector('.instructor__inner') &&
    document.querySelector('.instructor-slide')
  ) {
    const slides = document.querySelectorAll('.instructor-slide');

    slides.forEach((slide) => {
      slide.addEventListener('focus', () => {
        slides.forEach((slideItem) => {
          slideItem.classList.remove('is-active');
        });
        slide.classList.add('is-active');
      });

      slide.addEventListener('blur', () => {
        slide.classList.remove('is-active');
      });

      slide.addEventListener('mouseenter', () => {
        slides.forEach((slideItem) => {
          slideItem.classList.remove('is-active');
        });
        if (!slide.classList.contains('is-active')) {
          slide.classList.add('is-active');
        }
      });

      slide.addEventListener('mouseleave', () => {
        if (slide.classList.contains('is-active')) {
          slide.classList.remove('is-active');
        }
      });
    });
  }
};

const lazyLoadImages = () => {
  if (document.querySelectorAll('img')) {
    const images = document.querySelectorAll('img');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      images.forEach((img, index) => {
        if (index !== 0 && index !== 2) {
          img.setAttribute('loading', 'lazy');
        }
      });
    } else {
      images.forEach((img, index) => {
        if (index !== 0 && index !== 1) {
          img.setAttribute('loading', 'lazy');
        }
      });
    }
  }
};

export { setActiveinstructorSlideInfo, lazyLoadImages };
