import { Banner } from 'components/Banner';
import { Header } from 'components/Header';
import { ShowCase } from 'components/ShowCase';
import { Slider } from 'components/Slider';



import styled from 'styled-components/';

const StyledHomePage = styled.div`
.carousel {
            height: 200px;
        }
    
`
const HomePage = () => {
    return (
        <StyledHomePage>
            <Banner></Banner>
            <ShowCase></ShowCase>
            <Header />
            
        </StyledHomePage>
       
    )
}

export default HomePage;