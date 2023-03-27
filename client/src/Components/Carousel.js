import React from 'react'

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="relative flex justify-center"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="relative w-5/6 overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen.jpg"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div
            clasNames="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="Camera"
            />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel
