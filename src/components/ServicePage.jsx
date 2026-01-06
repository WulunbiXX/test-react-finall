import "./ServicePage.css"
import Laker_Doncic from "../assets/Laker_Doncic.jpg"
import Laker_Lebron from "../assets/Laker_Lebron.jpg"
import Laker_Reaves from "../assets/Laker_Reaves.jpg"
import Laker_Rui from "../assets/Laker_Rui.jpg"
import JJ from "../assets/JJ.jpg"

function ServicePage(props) {

    return (
        <>
            <div className="service-wrap">
                <h1>Lake Show Squad</h1>
                <div className="service-line"></div>
                <div className="decorative-wrap">
                    {/* <img src="https://cdn.nba.com/teams/uploads/sites/1610612747/2025/08/2526_lal_mktg_schedule_promo_webarticle_1130x635_lo.jpg" /> */}
                    {/* <div className="history"><p>history</p></div> */}
                </div>
            </div>
            <div className="decorative-text">
                <h2>17x Champions, get to know your Lakers team.</h2>
                <div>
                    <h3>12 Championships</h3>
                    <h3>53 Playoff Appearances</h3>
                    <h3>champion player</h3>
                </div>
            </div>
            <div className="player-wrap">
                <div className="player-top">
                    <h2>Lakers Player</h2>
                    <div>
                        <button><i class="fa-solid fa-arrow-left fa-xl"></i></button>
                        <button><i class="fa-solid fa-arrow-right fa-xl"></i></button>
                    </div>
                </div>
                <div className="player-container">
                    <div className="player-card">
                        <button>Deandre Ayton BIO</button>
                        <div className="name">
                            <h3>{props.player1_Number}</h3>
                            <h3>{props.player1_Name}</h3>
                        </div>
                        <p>Forward/Guard</p>
                        <div className="player-group">
                            <img src={Laker_Doncic} />
                            <a className="player_btn">
                                <p>Player Stats</p>
                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                            </a>
                        </div>
                    </div>
                    <div className="player-card">
                        <button>Deandre Ayton BIO</button>
                        <div className="name">
                            <h3>{props.player2_Number}</h3>
                            <h3>{props.player2_Name}</h3>
                        </div>
                        <p>Forward</p>
                        <div className="player-group">
                            <img src={Laker_Lebron} />
                            <a className="player_btn">
                                <p>Player Stats</p>
                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                            </a>
                        </div>
                    </div>
                    <div className="player-card">
                        <button>Deandre Ayton BIO</button>
                        <div className="name">
                            <h3>{props.player3_Number}</h3>
                            <h3>{props.player3_Name}</h3>
                        </div>
                        <p>Guard</p>
                        <div className="player-group">
                            <img src={Laker_Reaves} />
                            <a className="player_btn">
                                <p>Player Stats</p>
                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                            </a>
                        </div>
                    </div>
                    <div className="player-card">
                        <button>Deandre Ayton BIO</button>
                        <div className="name">
                            <h3>{props.player4_Number}</h3>
                            <h3>{props.player4_Name}</h3>
                        </div>
                        <p>Forward</p>
                        <div className="player-group">
                            <img src={Laker_Rui} />
                            <a className="player_btn">
                                <p>Player Stats</p>
                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="other-wrap">
                <h1>Team Information</h1>
                <div className="other-container">
                    <img src={JJ} />
                    <div className="other-text">
                        <h2>Coaching Staff</h2>
                        <p>JJ Redick enters his second season as head coach of the Los Angeles Lakers. The 41-year-old was hired June 20, 2024, becoming the 29th head coach in franchise history and the 25th of the Los Angeles era.
                            In Redick’s first season at the helm, the Lakers finished with a 50-32 record, earning the third seed in the Western Conference and a berth in the 2025 NBA Playoffs. The campaign marked Los Angeles' first 50-win season since 2019-20. Redick became just the third Lakers head coach in history to win 50 games in his first full season, joining
                            Phil Jackson (1999-00) and Pat Riley (1981-82).</p>
                        <a className="other_btn" href="#"><p>See More</p></a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ServicePage