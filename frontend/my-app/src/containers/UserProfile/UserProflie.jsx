import styled from 'styled-components'
import avatar from "assets/avatar.svg"
import line from "assets/Line4.svg"

const StyleUserProfile = styled.div`
width: 100%;
background-color: white;
font-family: 'Blinker';
background-color: #220000	;


.usersetting{
    font-size: 40px;
    padding-left: 30px;
    padding-top: 30px;
    color: white;
}
.avatar{
    width: 30%;
    height: 700px;
    background-color: #440000;
    border-radius: 15px;
}
.details{
    width: 57%;
    height: 1700px;
    background-color: #440000;
    border-radius: 15px;
    padding: 15px;
}
.user{
    display: flex;

    padding: 50px;
    display: flex;
    gap:35px;
}
.edittxt{
    display: flex;
    justify-content: flex-end;
    padding: 30px;
    padding-right: 50px;

}
.avatarimg{
    display:flex ;
    justify-content: center;
   img{ width: 250px;
    height: 250px;
    border-radius: 50%;
}
}
.name{
    padding: 30px;
    display: flex;
    justify-content: center;
}
.more{
    display: flex;
    justify-content: center;
    text-align: center;

}
.email{
    display: flex;
    padding: 15px;
    justify-content: space-between;
    
    
    
}
.img{
    width: 80%;
}
h1{
    color: white;
}
h3{
    color: red;
}
h2{
    color: white;
}
h4{
    color: white;
    padding-left: 15px;
    padding-right: 15px;
}
p{
    color: white;
    font-size: 40px;
}
h5{
    color: white;
    font-size: 30px;
    margin: 0px;
}
button{
    margin-left: 15px;
    width: 180px;
    height: 50px;
    color: white;
    background-color: red;
    font-family: 'Blinker';
    font-size: 18px;

}
`
const UserProfile = () => {
    return (
        <StyleUserProfile>
            <div className='usersetting'>
                <strong>User Setting</strong>
            </div>
            <div className='user'>
                <div className='avatar'>
                    <div className='edittxt'>
                        <p>Edit
                        </p>
                    </div>
                    <div className='avatarimg'>
                        <img src={avatar}></img>

                    </div>
                    <div className='name'>
                        <h5>
                            John Wick
                        </h5>

                    </div>
                    <div className='more'>
                        <h4>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </h4>

                    </div>

                </div>
                <div className='details'>
                    <div className='personal '>
                        <p>
                            Personal Details
                        </p>
                    </div>
                    <img src={line}></img>
                    <div className='email'>
                        <div>
                            <h1>
                                Email

                            </h1>
                            <h2>
                                example@gmail.com



                            </h2>

                        </div>
                        <div>
                            <h3>
                                Change
                            </h3>

                        </div>

                    </div>
                    <div className='email'>
                        <div>
                            <h1>
                                Email

                            </h1>
                            <h2>
                                example@gmail.com



                            </h2>

                        </div>
                        <div>
                            <h3>
                                Change
                            </h3>

                        </div>

                    </div>
                    <div className='email'>
                        <div>
                            <h1>
                                Email

                            </h1>
                            <h2>
                                example@gmail.com



                            </h2>

                        </div>
                        <div>
                            <h3>
                                Change
                            </h3>

                        </div>

                    </div>
                    <div className='email'>
                        <div>
                            <h1>
                                Email

                            </h1>
                            <h2>
                                example@gmail.com



                            </h2>

                        </div>
                        <div>
                            <h3>
                                Change
                            </h3>

                        </div>

                    </div>

                    <div className='personal '>
                        <p>
                            Billing Details
                        </p>
                    </div>
                    <img src={line}></img>
                    <div className='email'>
                        <div>

                            <h2>
                                example@gmail.com



                            </h2>

                        </div>
                        <div>
                            <h3>
                                Update Payment info
                            </h3>

                        </div>


                    </div>
                    <button>
                        Cancel Membership
                    </button>
                    <div className='personal '>
                        <p>
                            Plan Details
                        </p>
                    </div>
                    <img src={line}></img>
                    <div className='email'>
                        <div>

                            <h2>
                                Premium





                            </h2>

                        </div>
                        <div>
                            <h3>
                                Change Plan
                            </h3>

                        </div>


                    </div>
                    <div className='personal '>
                        <p>
                            Setting
                        </p>

                    </div>
                    <img src={line}></img>
                    <div className='email'>
                        <div>

                            <h4>
                                Recent device streaming activity
                                Sign out of all devices
                                Download your person information



                            </h4>

                        </div>



                    </div>

                </div>



            </div>

        </StyleUserProfile>
    )
}
export default UserProfile;