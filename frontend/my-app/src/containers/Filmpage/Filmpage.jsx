import styled from 'styled-components'
import menubar from "assets/menubar.svg"
import logo from "assets/logo.svg"
import account from "assets/account.svg"
import notification from "assets/notification.svg"
import bpbackground1 from "assets/bpbackground1.png"
import avatarFilm from "assets/film-avatar.svg"
import play from "assets/play.svg"
import line2 from "assets/line2.svg"
import poster1 from "assets/poster1.svg"
import poster2 from "assets/poster2.svg"
import poster3 from "assets/poster3.svg"
import poster4 from "assets/poster4.svg"
import poster5 from "assets/poster5.svg"
import poster6 from "assets/poster6.svg"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Footer } from 'components/Footer'


const StyleFilmpage = styled.div`
    background-color: black;
`
const Header = styled.div`
background-image: url(${bpbackground1});
background-size: cover;
height: 100vh;
    position: relative;
    padding: 20px;
    display:flex;
    justify-content: space-between;

    .account{
        display: flex;
        gap: 10px;
    }
    
    .background{
        position: absolute;
    }
`
const Body = styled.div`
display: flex;
color: white;
padding: 30px;
justify-content: center;
gap:100px;
.trailer{
    width: 45%;
}
.movie{
    width: 45%;
}
.trailertxt{
    display: flex;
    padding-bottom: 20px;
    justify-content: center;
    font-family: 'Berlin Sans FB', sans-serif;
    text-decoration: underline;
    flex-direction: row;
    align-items: center;

}
.trailervideo{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 45px;
    border-radius: 10px;
}
.border{
    border-radius: 10px;
    scale: 1.5;
}
.overview{

    font-family: 'Berlin Sans FB', sans-serif;
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 30px;
    
    //height: 20px;

}
.line{
    width:150px;
    position: relative;
    top:-20px;
    background-color: black;
}
.line1{
    width:150px;
    position: relative;
    top:10px;
    background-color: black;
}
.text{
    font-family: 'Berlin Sans FB', sans-serif;
    font-size: 22px;
    
}
.text1{
    padding-top: 20PX;
    font-family: 'Berlin Sans FB', sans-serif;
    font-size: 22px;
    color: #7B6844;

}
.poster{
    display: flex;
    font-family: 'Berlin Sans FB', sans-serif;
    font-size: 30px;
    text-decoration: underline;
    padding-top: 15px;
    padding-bottom: 20px;


    justify-content: center;

    
    
    
}
.line2{
    display: flex;
    width:100%;
    position: relative;
    align-items: center;
    top:10px;
    right:-50px

}
.line3{
    width:100px;
    position: relative;
    top:-20px;

}
.abc{
display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 35rem;

}
.posterimg1{
    display: flex;
    width: 50px;
    color: red;
    //padding: 25px;
    
}
.watch-film {
    display: flex;
    justify-content: center;
    position: relative;
    a {
        cursor: pointer;
    }
    .avatar {
        width: 456px;
        height: 251px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }
    .play {
        top: 70px;
        right: 250px;
        position: absolute;
    }
}
`

const Filmpage = () => {
    const SRC_DEFAULT = "https://drive.google.com/uc?export=download&id=";
    const moiveId = localStorage.getItem("movieId");
    const nav = useNavigate();
    const dispatch = useDispatch();
    let rawData = useSelector(state => state.movie.movies);
    useEffect(() => {
        dispatch.movie.getAll();
    }, [])
    const m = rawData?.filter(movieObj => movieObj.id == moiveId);
    const watchMovie = (id, title) => {
        const moive = rawData?.filter(m => m.id == id);
        console.log("moviePrice: " + moive[0]?.price);
        if (moive[0]?.price > 0) {
            nav("/pricing");
            return;
        }
        nav("/watch?" + title + "&id=" + id);
    }
    const customLink = (driveLink) => {
        const fileId = driveLink.match(/[-\w]{25,}/);
        let src = SRC_DEFAULT + fileId[0];
        if (!driveLink) { src = SRC_DEFAULT }
        return src;
    }
    if(rawData) {
        return (
        <StyleFilmpage>
            <Header>
                <div className='icon'>
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
            <Body>
                <div className='trailer'>
                    <div className='trailertxt'>
                        WAICH TRAILER
                    </div>
                    <div className="trailervideo">
                        <iframe className='border' src="https://www.youtube.com/embed/aOC8E8z_ifw">
                        </iframe>
                    </div>
                    <img className='line1' src={line2}></img>
                    <div className='overview'>
                        OVERVIEW
                    </div>

                    <img className='line' src={line2}></img>
                    <div className='text'>
                        {m[0]?.desc} ++ 
                        Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia (Lupita Nyong’o) and Everett Ross (Martin Freeman) and forge a new path for the kingdom of Wakanda.

                    </div>
                    {/* <div className='text1'>
                        DIRECTOR

                    </div>
                    <div className='text'>
                        Ryan Coogler

                    </div>
                    <div className='text1'>
                        WRITER

                    </div>
                    <div className='text'>
                        Ryan Coogler

                    </div> */}
                    <div className='text1'>
                        RELEASE DATE
                    </div>
                    <div className='text'>
                        {m[0]?.releaseDate}

                    </div>
                    <div className='text1'>
                        RUNNING TIME
                    </div>
                    <div className='text'>
                        {m[0]?.duration} MINUTES 
                    </div>
                    <div className='text1'>
                        CAST
                    </div>
                    <div className='text'>
                        {m[0]?.actorName.toString()} ++
                        Angela Bassett, Letitia Wright, Winston Duke, Danai Gurira, Florence Kasumba, Lupita Nyong’o, Martin Freeman, Tenoch Huerta, Dominique Thorne, Michaela Coel, Mabel Cadena and Alex Livanalli.
                    </div>
                </div>
                <div className='movie'>
                    <div className='trailertxt'>
                        WATCH MOIVE NOW
                    </div>
                    
                    <div  className="watch-film">
                        <a onClick={() => watchMovie(m[0]?.id, m[0]?.title)}>
                            <img className='avatar' src={m[0] ? customLink(m[0]?.movieImage) : ""} alt="" />
                            <img className='play' src={play} alt="" />
                        </a>
                    </div>
                    <div className='poster'>
                        <div>
                            <div>
                                <div className='poster'>
                                    POSTER
                                </div>
                            </div>
                            <div className="abc">
                                <div>
                                    <img src={poster1}></img>

                                </div>
                                <div>
                                    <img src={poster2}></img>
                                </div>
                                <div>
                                    <img src={poster3}></img>
                                </div>
                                <div>
                                    <img src={poster4}></img>
                                </div>
                                <div>
                                    <img src={poster5}></img>
                                </div>
                                <div>
                                    <img src={poster6}></img>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </Body>
            <Footer></Footer>
        </StyleFilmpage>
    )}
}

export default Filmpage;