import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientsReview from "./ClientsReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {/* Clients Review */}
      <ClientsReview
        image="/images/c1.jpg"
        name="Kwesi Umah"
        role="Web Developer"
      />
      <ClientsReview
        image="/images/c2.jpg"
        name="Araba Michael "
        role="Mern stack Project"
      />
      <ClientsReview
        image="/images/c2.jpg"
        name="Rubies Academy"
        role="Web Developer"
      />
      <ClientsReview
        image="/images/c1.jpg"
        name="Zuri Team"
        role="Frontend Developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
