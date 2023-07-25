import { Card } from "components/Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledShowCase = styled.div`
    .showcase {
        display: flex;
        width: 100vw;
        justify-content: space-around;
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
    const nav = useNavigate();
    const dispatch = useDispatch();
    let rawData = useSelector(state => state.movie.movies);
    useEffect(() => {
        dispatch.movie.getAll();
    }, [])
    const viewFilm = (id) => {
        localStorage.setItem("filmId", id);
        let price = 10;
        let userPaymented = true;

        if (userPaymented) {
            nav("/detail?" + localStorage.getItem("filmId"));
            return;
        }
        if (!userPaymented && price == 0) {
            nav("/detail?" + localStorage.getItem("filmId"));
            return;
        }
        nav("/pricing");
        
    }
    let data = [];
    if (rawData.length >= 12) {
        data = rawData.slice(0, 12);
    } else {
        data = rawData;
    }
    var listCard = [];
    for (var movieObj of data.entries()) {
        let [index, movie] = movieObj;
        const driveLink = movie.movieImage;
        const fileId = driveLink.match(/[-\w]{25,}/);
        let src = "https://drive.google.com/uc?export=download&id=" + fileId[0];
        if (!driveLink) { src = "https://drive.google.com/uc?export=download&id="}
        listCard.push(
            <Card onClick={() => viewFilm(movie.id)} key={index} className={"showcard" + (index + 1)} title={movie.title} srcImg={src} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
        );
    }
    
    return (
        <StyledShowCase>
            <div className="showcase">
                {listCard}
                {/* <Card className="showcard1" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard2" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard3" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard4" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard5" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard6" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard7" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard8" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard9" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard10" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard11" title={"Avatar"} srcImg={true} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card>
                <Card className="showcard12" title={"filmBladeRunner"} srcImg={false} title_center={"center"} font_size={"12px"} font_weight={"400"} radius={"10px"}></Card> */}
            </div>
        </StyledShowCase>
    )
}