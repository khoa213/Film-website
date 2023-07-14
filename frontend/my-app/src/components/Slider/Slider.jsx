import { CardVideo } from 'components/CardVideo';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';
import lalaland1 from 'assets/lalaland1.svg'
import arrowRight from 'assets/arrow-right.svg';
import arrowLeft from 'assets/S3.svg';

const StyledSlider = styled.div`
    overflow:hidden;
    .slider {
        width: 1449px;
    }
    .abc{
        color: white;
    }
    .slide{
        display: flex ;
        gap : 30px;
    }
    .slider-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 10px;
            cursor: pointer;
        }

        .slider-button-left {
            left: 10px;
        }

        .slider-button-right {
            right: 10px;
        }
        .productSale{
            display:flex;
            width : 100vw;
            gap: 30px;
            
        }
        .trailercard{
            display:flex;
            width: 100 px;
            gap: 30px;
        }

        .prev{
            display:flex;
            position:relative;
            top:-200px;
            right :-30px;
        }
            
        
        .next{
            display:flex;
            position:relative;
            top:-250px;
            right: -1350px;  
            
        }
`
const Abc = styled.div`

.slider {
            width: 400px;
            height: 300px;
            overflow: hidden;
            position: relative;
        }

        .slider-images {
            width: 100%;
            height: 100%;
            display: flex;
            transition: transform 0.3s ease-in-out;
        }

        .slider-image {
            width: 400px;
            height: 300px;
        }

        .slider-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 10px;
            cursor: pointer;
        }

        .slider-button-left {
            left: 10px;
        }

        .slider-button-right {
            right: 10px;
        }
    
`

export const Slider = () => {
    const TOTAL_SLIDES = 5;
    const [current, setCurrent] = useState(3);
    const ref = useRef(null);
    const isPhone = useMediaQuery({ query: '(max-width: 425px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isLaptop = useMediaQuery({ query: '(max-width: 1024px)' });

    const next = () => {
        if (current >= TOTAL_SLIDES) return
        else setCurrent(current + 1)
    }

    const prev = () => {
        if (current === 3) return
        else setCurrent(current - 1)
    }

    useEffect(() => {
        ref.current.style.transition = 'all 0.2s ease-in-out';
        let percent = 0;

        switch (true) {
            case isPhone:
                percent = 215;
                break;
            case isTablet:
                percent = 195;
                //257
                break;
            case isLaptop:
                percent = 255;
                break;
            default:
                percent = 336;
                break;
        }
        let traslate = (current - 3) * percent;
        ref.current.style.transform = `translateX(-${traslate}px)`;
        ref.current.style.className += "hello";
    }, [current]);
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider-image');
    const sliderImages = document.querySelector('.slider-images');
    const slideImage = (direction) => {
        if (direction === 'left') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
            currentIndex = (currentIndex + 1) % images.length;
        }
        sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
    return (
        <StyledSlider>
            
            <div className='slider'>
                <div className="carousel">
                    <div ref={ref} className="productSale">
                    <div className=' trailercard'>
                    <div id="0">
                        <img class="slider-image" src={lalaland1} alt="Image 1"></img>

                            
                        </div>
                        <div id="1">
                        <img class="slider-image" src={lalaland1} alt="Image 1"></img>
                            
                        </div>
                        <div id="2">
                        <img class="slider-image" src={lalaland1} alt="Image 1"></img>
                            
                        </div>
                        <div id="3">
                        <img class="slider-image" src={lalaland1} alt="Image 1"></img>
                            
                        </div>
                        <div id="4">
                        <img class="slider-image" src={lalaland1} alt="Image 1"></img>
                            
                        </div>
                        <div id="5">
                        <img class="slider-image" src={lalaland1} alt="Image 1"></img>
                            
                        </div>
                    </div>


                        
                    </div>
                    <a className="prev" onClick={() => prev()}> <img src={arrowLeft} alt="" /> </a>
                    <a className="next" onClick={() => next()}> <img src={arrowRight} alt="" /> </a> 
                </div>
            </div>
        </StyledSlider>
    )
}