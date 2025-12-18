import "./HomeContext.css"
import news1 from "../assets/luka.jpg"
import news2 from "../assets/news2.jpg"
import HomeContectData from "./HomeContectData"

const Context = () => {

    return (
        <div className="context">
            <div className="news-title">
                <div>
                    <h1>Latest News</h1>
                    <div className="line"></div>
                    <p>Follow us for the latest NBA news</p>
                </div>
                <a className="new-more">More News</a>
            </div>

            <div className="news-container">
                <HomeContectData
                    img="https://cdn.nba.com/teams/uploads/sites/1610612747/2025/04/2425_lal_mktg_creative_AR_improvement_1130x635_ska.jpg" alt="featured-image"
                    heading="NBA Cup Quarterfinals"
                    text="Snag your tickets to the Lakers NBA Cup Quarterfinals matchup against the Spurs on December 10th!"
                />
                <HomeContectData
                    img={news1}
                    heading="NBA Cup Quarterfinals"
                    text="Snag your tickets to the Lakers NBA Cup Quarterfinals matchup against the Spurs on December 10th!"
                />
            </div>
        </div>
    );
}

export default Context