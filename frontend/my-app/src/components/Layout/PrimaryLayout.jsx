import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledPrimaryLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #130303;
`
export const PrimaryLayout = ({children}) => {
    return (
        <StyledPrimaryLayout>
            <Header/>
            <Outlet></Outlet>
        </StyledPrimaryLayout>
    )
}