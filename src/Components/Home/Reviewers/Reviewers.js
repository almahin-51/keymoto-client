import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Reviewers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://stormy-everglades-36632.herokuapp.com/review")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="container py-5 my-5 text-align-center">
      <h2 className="text-center">Review</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {data?.map((user) => (
          <SwiperSlide key={user._id} className="sign-review">
            <div className="pb-3 review-profile">
              {user.img ? (
                <img
                  className="img-fluid rounded-circle"
                  src={user.img}
                  alt=""
                />
              ) : (
                <div className="review-img">{user?.email?.slice(0, 1)}</div>
              )}
            </div>
            <div>
              <h5>{user.name}</h5>
              <Rating
                emptySymbol="far fa-star fa-two"
                fullSymbol="fas fa-star fa-two"
                fraction={2}
                initialRating={user.rate}
                readonly
                className="rating"
              />
              <p>{user.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviewers;
