import styled from 'styled-components';

const StyledButton = styled.button`
    background: ${props => props.bg_color};
    color: ${props => props.text_color};
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.radius};
    border: ${props => props.border_custom};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    background: linear-gradient(#130303, #130303) padding-box, linear-gradient(60deg, #130303, #FF0016) border-box;
    span {
        display: flex;
        font-size: ${props => props.font_size_text};
        align-items: center;
        justify-content: center;
    }
`
export const Button = ({ title, text_color, bg_color, width, height, radius, border_custom, fontSize, fontWeight, font_size_text }) => {
    return (
        <StyledButton text_color={text_color} bg_color={bg_color} width={width} height={height} radius={radius} border_custom = {border_custom} fontSize = {fontSize} fontWeight = {fontWeight} font_size_text = {font_size_text}>
           <span> {title}</span>
        </StyledButton>
    )
}

Button.defaultProps = {
    text: 'Button',
    bg_color: null,
    onClick: undefined,
};