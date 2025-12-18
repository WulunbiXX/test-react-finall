import "./HomeStyle.css"
import basketball from "../assets/baketball.jpg"


function HomePage(props) {

    return (
        <>
            <div className={props.cName}>
                <img alt="HerpImg" src={props.wrapperImg} />
                <div className="wrapper-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>
                        {props.btnText}
                    </a>
                </div>
            </div>
            <div className="home-decoration">
                <button className="dectation-ball"><img src={basketball} /></button>
                <div className="decoration-news">
                    <div className="decoration-board">
                        <button href="/">
                            <i class="fa-solid fa-circle-play fa-lg"></i>
                            <h3>Watch Replay</h3>
                        </button>
                        <img src="https://cdn.nba.com/teams/uploads/sites/1610612747/2025/04/2425_lal_mktg_creative_AR_improvement_1130x635_ska.jpg" alt="featured-image" />
                    </div>
                </div>
                <div className="decoration-text">
                    <h2>Find the information and players you need here</h2>
                    <a className="decoration-explore" href="#"><p>join us</p></a>
                    <div className="court">
                        <div className="place"><p>AWAY</p></div>
                        <div className="court-text">
                            <h3 children="week">Thursday</h3>
                            <h3>Dec 18 </h3>
                            <h3>6:00 PM PST</h3>
                            <p>Delta CenterSalt Lake City, UT</p>
                        </div>
                        <div className="court-img">
                            <img src={basketball} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage