import epidode2 from "assets/episode2.svg";
import epidode3 from "assets/episode3.svg";
import epidode4 from "assets/episode4.svg";
import rating from "assets/4stars1.svg";
import view from "assets/view.svg";
import share from "assets/shareico.svg";
import heart from "assets/heart.svg";
import plusico from "assets/plusico1.svg";
import avatar from "assets/avatarcmt.svg";
import redline from "assets/redline.png"










import '@brainhubeu/react-carousel/lib/style.css';
//import "./styles.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import styled from 'styled-components';
//import { Slider } from "components/Slider"



const StyleInfoPage = styled.div`
.showmore{
    width: 100vw;
    padding-left: 50px;
    color: white;
    display: flex;
    align-items: center;
    background-color: black;
    text-decoration:underline;
    gap:10px;
    
    img{
        height: 40px;
        width: 300px;
    }
}
    
`
const Header = styled.div`
    position: relative;
    padding: 20px;
    display:flex;
    justify-content: space-between;
    .account{
        display: flex;
        gap: 10px;
    }
`
const Comments = styled.div`
background-color: black;
padding: 50px;
color: white;
font-family: 'Blinker';
.name1{
    display: flex;
    gap:10px;
    font-size: 55px;
    
}
.category1{
    display: flex;
    gap:10px;
    padding-top: 25px;
    font-size: 20px;
    align-items: center;
}
.view{
    align-items: center;
    
}
.time{
    display: flex;
    gap:10px;
    align-items: center;
}
.view{
    display: flex;
    justify-items: center;
    gap:10px;
}
.viewimg{
    background-color: white;
    border-radius: 50%;
}
.ico{
    display: flex;
    gap: 15px;
}
.tag{
    display: flex;
    gap:5px;
}
.nameemail{
    display: flex;
    gap:150px;
    padding-top: 20px;
}
.btnsubmit{
    width: 100px;
    height: 40px;
    background-color: red;
    color: white;
    margin-top: 20px;
}
.review{
    width: 700px;
    height: 200px;
}
.review1{
    width: 500px;
    height: 50px;
}
.score{
    display: flex;
    gap:15px;
}
.tag{
    text-decoration:underline;
    color: red;
    font-size: 20px;
    padding-top:20px;
}
.ico{
    margin-top: 10px;
    padding-top: 15px;
    background-color: white;
    width: 140px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding-bottom: 9px;
}
.comment{
    padding-top: 20px;
}
.review2{
    padding-top:20px ;
}
.nameemail{
    padding-top: 20px;
}
.ratingtxt{
    padding-top: 5px;
}
.save{
    padding-top: 10px;
}
`
const Banner = styled.div`
background-image: url(${mandobackbround});
background-size: cover;
width: 100vw;
height: 100vh;
`
const ListComments = styled.div`
display: flex;
flex-direction: column;
gap:20px;
        font-family: 'Blinker';
        color: white;
padding: 50px;
background-color: black;
display: flex;
.like{
    display: flex;
    align-items: center;
    gap:5px;
    text-decoration:underline;
}
.avatarimg{
    width: 50px;
    padding-right: 10px;
}
.namecmt{
    font-size: 25px;
}
.contenttxt{
    font-size: 20px;
}
.list{
    display: flex;
}
`

const Trailer = styled.div`
    height: 100vh;
    margin-left: 50px;
    width: 50%;
    //background-color: red;
    .season{
        font-family: 'Blinker';
        color: white;
        padding-top: 5px;
        padding-left: 25px;
    }
    .logo{
        display: flex;
        justify-content: center;
        //background-color: green;
        width: 100%;
        
    }
    .name{
        display: flex; 
        justify-content: center;
        scale: 0.95;
    }
    .trailer{
        display: flex;
        padding-bottom: 15px;
        padding-top: 10px;
        justify-content:center ;
        font-family: 'Blinker';
        font-size: 15px;
        gap: 50px;
        .categorytxt{
            display: flex;
            flex-direction: column;
            //background-color: yellow;
            width: 40%;
            justify-content: center;
            
            .yearcategory{
                color: white;
                display: flex;
                gap:10px;
                justify-content: center;
            }
        }
        .year{
        }
        .dot{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .category
        {
        }
        .trailervideo{
            width: 380px;
            height: 200px;
            border-radius: 25px;
            /* Đặt giá trị border-radius theo ý muốn */
            /* overflow: hidden; */
            /* scale: 1; */
            
                
            }
            
        
        }
        .line{
            display: flex;
            width: 100%;
            justify-content: center;
        }
        .test {
            border: 5px solid red;
        }
        
        .BrainhubCarouselItem--active {
            .watchFilm {
                display: inline;
            }
            img {
                /* scale: 1.2; */
            }
        }
        .carousel, .BrainhubCarousel {
            height: 200px;
        }
        .BrainhubCarousel__arrowRight{
            border-radius: 50px;
            margin-left: 10px;
            background-color: red;
        }
        .BrainhubCarousel__arrowLeft{
            border-radius: 50px;
            margin-right: 10px;
            background-color: red;
        }
`
const InfoPage = () => {
    return (
        <StyleInfoPage>
            <Banner>
                <Header>
                    <div>
                        <img src={menubar}></img>
                    </div>
                    <div>
                        <img src={logo}></img>
                    </div>
                    <div className="account">
                        <div>
                            <img src={account}></img>
                        </div>
                        <div>
                            <img src={notification}></img>
                        </div>
                    </div>

                </Header>

                <Trailer>

                    <div class="logo">

                        <img src={disneylogo}></img>
                    </div>
                    <div class="name">
                        <img src={MandoLogo}></img>
                    </div>
                    <div class="trailer">
                        <div className="categorytxt">
                            <div className="yearcategory">
                                <div className="year">
                                    2019
                                </div>
                                <div className="dot">
                                    <img width="2px" height="2px" src={dot}></img>

                                </div>
                                <div className="category">
                                    SCIENCE FICTION, ADVENTURE, ACTION

                                </div>
                            </div>
                        </div>
                        <div >
                            <iframe className="trailervideo" src="https://www.youtube.com/embed/aOC8E8z_ifw">
                            </iframe>

                        </div>

                    </div>
                    <div class="line">
                        <img src={Line4}></img>
                    </div>


                    {/* <Slider dots={true}>{renderSlides()}</Slider> */}
                    <div className="season">
                        SEASON 1
                    </div>





                </Trailer>
            </Banner>

            <Comments>
                <div className="comments">
                    <div className="name1">
                        <div>
                            MANDALORIAN
                        </div>

                    </div>
                    <div className="score">
                        <div>
                            <img src={rating}></img>
                        </div>
                        <div>
                            3.5 (lmdb)
                        </div>
                    </div>
                    <div className="category1">
                        <div>
                            DRAMA
                        </div>
                        <img width="2px" height="2px" src={dot}></img>
                        <div>
                            DRAMA
                        </div>

                    </div>
                    <div className="time">
                        <div>
                            2hr : 42mins
                        </div>
                        <img width="2px" height="2px" src={dot}></img>
                        <div>
                            Nov 2017

                        </div>
                        <img width="2px" height="2px" src={dot}></img>

                        <div className="view">
                            <img className="viewimg" width="30px" src={view}></img>
                            2112 views

                        </div>



                    </div>
                    <div className="ico">
                        <div>
                            <img width="30px" src={share}></img>
                        </div>
                        <div>
                            <img width="30px" src={heart}></img>
                        </div>
                        <div>
                            <img width="30px" src={plusico}></img>
                        </div>

                    </div>
                    <div className="tag">


                        <div>
                            TAG
                        </div>
                        <div>

                            Adventure,
                            Comedy,
                            Thriller

                        </div>
                    </div>
                    <div className="comment">
                        <div>
                            Your email address will not be published. Required fields are marked *

                        </div>
                        <div className="ratingtxt">
                            Your rating
                            <img src={rating}></img>


                        </div>
                        <div className="review2">
                            <div>
                                Your review *
                            </div>
                            <input type="text" className="review" />

                        </div>
                        {/* <div className="nameemail">
                            <div className="name2">
                                <div>
                                    Name*
                                </div>
                                <input type="text" className="review1" />
                            </div>
                            <div className="email">
                                <div>
                                    Email*
                                </div>
                                <input type="text" className="review1" />
                            </div>
                        </div> */}
                        {/* <div className="save">
                            <input type="checkbox" ></input>
                            Save my name, email, and website in this browser for the next time I comment.
                        </div> */}
                        <button className="btnsubmit">
                            SUBMIT
                        </button>



                    </div>
                </div>
            </Comments>
            <ListComments>
                <div className="list">
                    <div className="avatarimg">

                        <img src={avatar} />
                    </div>
                    <div className="content">
                        <div>
                            <div className="namecmt">
                                John
                            </div>
                            <div className="contenttxt">
                                Amazing amazing amazing !
                            </div>
                            <div className="like">
                                <div>
                                    Like
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    Reply
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    20 weeks
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <div className="list">
                    <div className="avatarimg">

                        <img src={avatar} />
                    </div>
                    <div className="content">
                        <div>
                            <div className="namecmt">
                                John
                            </div>
                            <div className="contenttxt">
                                Amazing amazing amazing !
                            </div>
                            <div className="like">
                                <div>
                                    Like
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    Reply
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    20 weeks
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <div className="list">
                    <div className="avatarimg">

                        <img src={avatar} />
                    </div>
                    <div className="content">
                        <div>
                            <div className="namecmt">
                                John
                            </div>
                            <div className="contenttxt">
                                Amazing amazing amazing !
                            </div>
                            <div className="like">
                                <div>
                                    Like
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    Reply
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    20 weeks
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <div className="list">
                    <div className="avatarimg">

                        <img src={avatar} />
                    </div>
                    <div className="content">
                        <div>
                            <div className="namecmt">
                                John
                            </div>
                            <div className="contenttxt">
                                Amazing amazing amazing !
                            </div>
                            <div className="like">
                                <div>
                                    Like
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    Reply
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    20 weeks
                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <div className="list">
                    <div className="avatarimg">

                        <img src={avatar} />
                    </div>
                    <div className="content">
                        <div>
                            <div className="namecmt">
                                John
                            </div>
                            <div className="contenttxt">
                                Amazing amazing amazing !
                            </div>
                            <div className="like">
                                <div>
                                    Like
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    Reply
                                </div>
                                <img width="2px" height="2px" src={dot}></img>
                                <div>
                                    20 weeks
                                </div>


                            </div>
                        </div>

                    </div>
                </div>






            </ListComments>
            <div className="showmore">
                <img src={redline}></img>
                Show more preview
                <img src={redline}></img>
            </div>




        </StyleInfoPage>
    )
}
export default InfoPage;