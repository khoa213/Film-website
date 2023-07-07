import styled from 'styled-components';
import arrowDown from 'assets/arrow-down.svg';

const StyledButton = styled.button`
    background: ${props => props.bg_color};
    color: ${props => props.text_color};
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.radius};
    border: ${props => props.border_custom};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    background: linear-gradient(${props => props.bg_color1}, ${props => props.bg_color1}) padding-box, linear-gradient(60deg, ${props => props.bg_color1}, ${props => props.bg_color3}) border-box;
    /* background: linear-gradient(#130303, #130303) padding-box, linear-gradient(60deg, #130303, #FF0016) border-box; */
    position: relative;
    span {
        display: flex;
        font-size: ${props => props.font_size_text};
        align-items: center;
        justify-content: center;
       
    }
    img {
        position: absolute;
        top: -5px;
        right: 0;
    }
`
export const Button = ({ title, text_color, bg_color, width, height, radius, border_custom, fontSize, fontWeight, font_size_text, bg_color1, bg_color2, bg_color3, isGenres }) => {
    return (
        <StyledButton text_color={text_color} bg_color={bg_color} width={width} height={height} radius={radius} border_custom = {border_custom} fontSize = {fontSize} fontWeight = {fontWeight} font_size_text = {font_size_text} bg_color1 = {bg_color1} bg_color2 = {bg_color2} bg_color3 = {bg_color3}>
            <span> {title} </span>
            {isGenres ? <img src={arrowDown} alt="" /> : " "}
        </StyledButton>
    )
}

Button.defaultProps = {
    text: 'Button',
    bg_color: null,
    bg_color1: "#130303",
    bg_color2: "#130303",
    bg_color3: "#FF0016",
    onClick: undefined,
};