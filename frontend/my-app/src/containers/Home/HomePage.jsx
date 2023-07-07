import { Banner } from 'components/Banner';
import { Header } from 'components/Header';
import { ShowCase } from 'components/ShowCase';
import { Slider } from 'components/Slider/Slider';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    
`
const HomePage = () => {
    return (
        <StyledHomePage>
            <Banner></Banner>
            <ShowCase></ShowCase>
            <Header/>
            <Slider></Slider>
        </StyledHomePage>
    )
}

export default HomePage;