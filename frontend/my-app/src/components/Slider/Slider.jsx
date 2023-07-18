import { CardVideo } from 'components/CardVideo';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';
import lalaland1 from 'assets/lalaland1.svg'
import epidode2 from "assets/episode2.svg";
import epidode3 from "assets/episode3.svg";
import epidode4 from "assets/episode4.svg";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { CardVideoTrailer } from "components/CardVideoTrailer"

const StyledSlider = styled.div`
.carousel {
            height: 200px;
        }
`


export const Slider = () => {
    return (
        <StyledSlider>
            <div className="carousel">
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
            </div>
        </StyledSlider>
    )


}