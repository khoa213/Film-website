import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopRateItem from "components/TopRateItem";

const TopRateWrapper = styled.div`
  .top-rate-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 20px;
      font-weight: 700;
      padding-left: 10px;
    }
    .button-casou {
      height: 40px;
      width: 40px;
      background-color: red;
      padding: 10px;
      svg {
        fill: white;
      }
    }
  }
  .slick-arrow {
    display: none !important;
  }
  .carousel-items {
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .carousel-buttons {
    display: flex;
    justify-content: space-between;
  }

  .prev-button,
  .next-button {
    padding: 8px 16px;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }

  .prev-button:hover,
  .next-button:hover {
    background-color: #aaa;
  }
`;
const TopRate = () => {
  const carouselRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handlePrevClick = () => {
    carouselRef.current.slickPrev();
  };

  const handleNextClick = () => {
    carouselRef.current.slickNext();
  };

  return (
    <TopRateWrapper>
      <div className="top-rate-header">
        <h1>Top Rated Item</h1>
        <div className="carousel-buttons">
          <button
            className="button-casou prev-button"
            onClick={handlePrevClick}
          >
            <ArrowLeftOutlined />
          </button>
          <button
            className=" button-casou next-button"
            onClick={handleNextClick}
          >
            <ArrowRightOutlined />
          </button>
        </div>
      </div>
      <div className="carousel-items">
        <Slider {...settings} ref={carouselRef}>
          <TopRateItem title={"Harry Potter"} genre={"Khoa học"} />
          <TopRateItem title={"Harry Potter"} genre={"Khoa học"} />
          <TopRateItem title={"Harry Potter"} genre={"Khoa học"} />
          <TopRateItem title={"Harry Potter"} genre={"Khoa học"} />
          <TopRateItem title={"Harry Potter"} genre={"Khoa học"} />
          <TopRateItem title={"Harry Potter"} genre={"Khoa học"} />
          <TopRateItem title={"Harry Potter"} genre={"Khoa học"} />
        </Slider>
      </div>
    </TopRateWrapper>
  );
};
export default TopRate;
