import { Button } from "components/Button";
import { styled } from "styled-components";
import menu from 'assets/menu1.svg';
import filter from 'assets/filter.svg';


const StyledGenres = styled.div`
    .genres {
        .title {
            display: flex;
            padding: 50px 50px;
            gap: 15px;
            align-items: center;
            .line-white {
                border: 1px solid white;
                margin: 0;
                flex-basis: 85%;
                height: 1px;
            }
        }
        table {
            td {
                padding: 10px 60px;
                color: #ffff;
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
            }
        }
        .buttonGenres {
            margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 80px;
        }
        .genres-content {
            background-color: #252525;
            border-radius: 40px;
            padding-bottom: 40px;
            padding-top: 10px;
        }
    }
`
export const Genres = () => {
    return (
        <StyledGenres>
            <div className="genres">
                <div className="title">
                    <Button title={"Genres"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"13px"} isGenres={true}></Button>
                    <hr className="line-white" />
                    <img src={menu} alt="photo" />
                    <img src={filter} alt="photo" />
                </div>
                <div className="genres-content">
                    <table>
                        <tbody>
                            <tr>
                                <td>ACTION</td>
                                <td>BIOGRAPHY</td>
                                <td>DRAMA</td>
                                <td>HISTORY</td>
                                <td>ROMANCE</td>
                                <td>TV MOVIE</td>
                            </tr>
                            <tr>
                                <td>ACTION</td>
                                <td>COMEDY</td>
                                <td>FANTASY</td>
                                <td>MUSIC</td>
                                <td>SERIES</td>
                                <td>THRILLER</td>
                            </tr>
                            <tr>
                                <td>ADVENTURE</td>
                                <td>BIOGRAPHY</td>
                                <td>FAMILY</td>
                                <td>NEWS</td>
                                <td>SCI-FI</td>
                                <td>WESTERN</td>
                            </tr>
                            <tr>
                                <td>ANIMATION</td>
                                <td>DOCUMENTARY</td>
                                <td>HORROR</td>
                                <td>POLITICS</td>
                                <td>TALK</td>
                                <td>WAR</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttonGenres">
                        <Button title={"about"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button>
                        <Button title={"about"} text_color={"white"} width={"98px"} height={"19px"} radius={"40px"} border_custom={"2px solid transparent"} font_size_text={"12px"}></Button>
                    </div>
                </div>
            </div>
        </StyledGenres>
    )
}