import menubar from "assets/menubar.svg";
import logo from "assets/logo.svg";
import account from "assets/account.svg";
import notification from "assets/notification.svg";
import mandobackbround from "assets/mandobackbround.svg";
import disneylogo from "assets/disneylogo.svg";
import MandoLogo from "assets/MandoLogo.svg";
import imgtrailer from "assets/imgtrailer.svg";
import dot from "assets/dot.svg";
import Line4 from "assets/Line4.svg";
import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { slidesToScrollPlugin } from "@brainhubeu/react-carousel";
import { Img } from "components/Img";
import { CardVideoTrailer } from "components/CardVideoTrailer";
import epidode2 from "assets/episode2.svg";
import epidode3 from "assets/episode3.svg";
import epidode4 from "assets/episode4.svg";

import "@brainhubeu/react-carousel/lib/style.css";
//import "./styles.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

import styled from "styled-components";
import { Slider } from "components/Slider";

const StyleInfoPage = styled.div`
  background-image: url(${mandobackbround});
  background-size: cover;
`;
const Header = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  .account {
    display: flex;
    gap: 10px;
  }
`;
const Trailer = styled.div`
  height: 100vh;
  margin-left: 50px;
  width: 50%;
  //background-color: red;
  .season {
    font-family: "Blinker";
    color: white;
    padding-top: 5px;
    padding-left: 25px;
  }
  .logo {
    display: flex;
    justify-content: center;
    //background-color: green;
    width: 100%;
  }
  .name {
    display: flex;
    justify-content: center;
    scale: 0.95;
  }
  .trailer {
    display: flex;
    padding-bottom: 15px;
    padding-top: 10px;
    justify-content: center;
    font-family: "Blinker";
    font-size: 15px;
    gap: 50px;
    .categorytxt {
      display: flex;
      flex-direction: column;
      //background-color: yellow;
      width: 40%;
      justify-content: center;

      .yearcategory {
        color: white;
        display: flex;
        gap: 10px;
        justify-content: center;
      }
    }
    .year {
    }
    .dot {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .category {
    }
    .trailervideo {
      width: 380px;
      height: 200px;
      border-radius: 25px;
      /* Đặt giá trị border-radius theo ý muốn */
      /* overflow: hidden; */
      /* scale: 1; */
    }
  }
  .line {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .test {
    border: 5px solid red;
  }

  .BrainhubCarouselItem--active {
    .watchFilm {
      display: inline;
    }
    img {
      /* scale: 1.2; */
    }
  }
  .carousel,
  .BrainhubCarousel {
    height: 200px;
  }
  .BrainhubCarousel__arrowRight {
    border-radius: 50px;
    margin-left: 10px;
    background-color: red;
  }
  .BrainhubCarousel__arrowLeft {
    border-radius: 50px;
    margin-right: 10px;
    background-color: red;
  }
`;

const InfoPage = () => {
  return (
    <StyleInfoPage>
      <Header>
        <div>
          <img src={menubar}></img>
        </div>
        <div>
          <img src={logo}></img>
        </div>
        <div className="account">
          <div>
            <img src={account}></img>
          </div>
          <div>
            <img src={notification}></img>
          </div>
        </div>
      </Header>
      <Trailer>
        <div class="logo">
          <img src={disneylogo}></img>
        </div>
        <div class="name">
          <img src={MandoLogo}></img>
        </div>
        <div class="trailer">
          <div className="categorytxt">
            <div className="yearcategory">
              <div className="year">2019</div>
              <div className="dot">
                <img width="2px" height="2px" src={dot}></img>
              </div>
              <div className="category">SCIENCE FICTION, ADVENTURE, ACTION</div>
            </div>
          </div>
          <div>
            <iframe
              className="trailervideo"
              src="https://www.youtube.com/embed/aOC8E8z_ifw"
            ></iframe>
          </div>
        </div>
        <div class="line">
          <img src={Line4}></img>
        </div>

        {/* <Slider dots={true}>{renderSlides()}</Slider> */}
        <div className="season">SEASON 1</div>
        <Slider></Slider>
        {/* <div className="carousel">
                    <Carousel
                        plugins={[
                            'centered',
                            'infinite',
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2,
                                },
                            },
                        ]}
                    >
                        <CardVideoTrailer srcLink={epidode2} movieName={'EPISODE 01'} />
                        <CardVideoTrailer srcLink={epidode3} movieName={'EPISODE 02'} />
                        <CardVideoTrailer srcLink={epidode4} movieName={'EPISODE 03'} />
                    </Carousel>
                </div> */}
      </Trailer>
    </StyleInfoPage>
  );
};

export default InfoPage;
