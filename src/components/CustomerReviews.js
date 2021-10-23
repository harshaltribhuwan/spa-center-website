import React from "react";
import "./CustomerReviews.css";
import SingleReview from "./SingleReview";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomerReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="customerReview">
      <h2>Customer Reviews</h2>
      <div className="reviews">
        <Slider {...settings}>
          <SingleReview
            profileSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            name="John Doe"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio totam vel alias labore laborum dolorum aperiam."
          />
          <SingleReview
            profileSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            name="Micheal Jobs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio totam vel alias labore laborum dolorum aperiam."
          />
          <SingleReview
            profileSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            name="Bruce Lee"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio totam vel alias labore laborum dolorum aperiam."
          />
          <SingleReview
            profileSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            name="John Doe"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio totam vel alias labore laborum dolorum aperiam."
          />
          <SingleReview
            profileSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            name="Micheal Jobs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio totam vel alias labore laborum dolorum aperiam."
          />
          <SingleReview
            profileSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            name="Bruce Lee"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio totam vel alias labore laborum dolorum aperiam."
          />
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
