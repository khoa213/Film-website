import { Banner } from 'components/Banner';
import { Genres } from 'components/Genres/Genres';
import { GirdMovie } from 'components/Gird';
import { Header } from 'components/Header';
import { ShowCase } from 'components/ShowCase';
import { Slider } from 'components/Slider/Slider';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    @media screen and (max-width: 1439px) {
        .banner {
            .banner-left {
                top: 100px;
                left: 35px;
                gap: 15px;
            }
            .movie-bg {
                width: 1024px;
            }
            .movie-name img {
                width: 400px;
            }
            .movie-logo img {
                width: 120px;
            }
            .movie-rate img {
                width: 120px;
            }
            .description {
                width: 385px;
                margin: 0;
            }
            .banner-right {
                top: 245px;
            }
        }
    }
    @media screen and (max-width: 1023px) {
        .banner {
            .banner-left {
                top: 100px;
                left: 35px;
                gap: 15px;
            }
            .movie-bg {
                width: 768px;
            }
            .movie-name img {
                width: 280px;
            }
            .movie-logo img {
                width: 100px;
            }
            .movie-rate img {
                width: 100px;
            }
            .description {
                display: none;
            }
            .banner-right {
                top: 175px;
            }
        }
    }
    @media screen and (max-width: 767px) {
        .banner {
            .banner-left {
                top: 40px;
                left: 25px;
                gap: 15px;
            }
            .movie-bg {
                width: 500px;
            }
            .movie-name img {
                width: 240px;
            }
            .movie-logo img {
                width: 90px;
            }
            .movie-rate img {
                width: 90px;
            }
            .action {
                display: none;
            }
            .description {
                display: none;
            }
            .banner-right {
                top: 120px;
                img {
                    width: 30px;
                }
            }
        }
    }
    @media screen and (max-width: 500px) {
        .banner {
            .banner-left {
                top: 60px;
                left: 150px;
                gap: 3px;
            }
            .movie-bg {
                width: 375px;
            }
            .movie-name img {
                width: 200px;
            }
            .movie-logo img {
                width: 100px;
            }
            .movie-rate img {
                width: 80px;
            }
            .action {
                display: none;
            }
            .description {
                display: none;
            }
            .banner-right {
                display: none;
            }
        }
    }
`
const HomePage = () => {
    return (
        <StyledHomePage>
            <Banner></Banner>
            {/* <ShowCase></ShowCase> */}
            {/* <Header/> */}
            {/* <Slider></Slider> */}
            {/* <Genres></Genres>
            <GirdMovie></GirdMovie> */}
        </StyledHomePage>
    )
}

export default HomePage;