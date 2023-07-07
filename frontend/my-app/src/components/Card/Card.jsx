import { styled } from "styled-components";
import filmAvatar from "assets/film-avatar.svg";
import filmBladeRunner from "assets/film-blade-runner.svg";

const StyledCard = styled.div`
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 10px;
        transition-duration: 0.5s;
        span {
            color: white;
            font-size: 12px;
            font-weight: 400;
        }
    }
`
export const Card = ({title, srcImg}) => {
    return (
        <StyledCard>
            <div className="card">
                <div className="avatar">
                    {srcImg ? <img src={filmAvatar} alt="" /> : <img src={filmBladeRunner} alt="" />}
                </div>
                <span>{title}</span>
            </div>
        </StyledCard>
    )
}