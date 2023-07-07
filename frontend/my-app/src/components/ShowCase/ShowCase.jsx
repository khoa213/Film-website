import { Card } from "components/Card/Card";
import { styled } from "styled-components";

const StyledShowCase = styled.div`
    .showcase {
        display: flex;
        justify-content: space-between;
        height: 213px;
        padding: 15px;
        align-items: flex-end;
    }
    .card:hover {
        transform: translateY(-35px);
        transition: all 0.5s ease-out ;
    }
`
export const ShowCase = () => {
    return (
        <StyledShowCase>
            <div className="showcase">
                <Card title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
            </div>
        </StyledShowCase>
    )
}