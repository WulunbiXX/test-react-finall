import "./HomeNews.css"
import news1 from "../assets/luka.jpg"
import news2 from "../assets/news2.jpg"
import HomeNewsData from "./HomeNewsData"

const HomeNews = () => {

    return (
        <div className="homeNews">
            <h1>What's News</h1>
            <p>Follow us for the latest NBA news</p>
            <HomeNewsData
                img="https://cdn.nba.com/teams/uploads/sites/1610612747/2025/04/2425_lal_mktg_creative_AR_improvement_1130x635_ska.jpg" alt="featured-image"
                img2={news1}
                img3="https://cdn.nba.com/teams/uploads/sites/1610612747/2025/10/2242548380.jpg?im=Resize=(1600)"
                heading="Finals"
                heading2="Luka Magic: Best of Dončić"
                heading3="Luka Magic: Best of Dončić"
                logo="https://cdn.nba.com/logos/nba/1610612747/primary/D/logo.svg"
                logoName="Lakers"
                logo2="https://cdn.nba.com/logos/nba/1610612746/primary/D/logo.svg"
                logoName2="Clippers"
                score="112"
                score2="104"
            />
        </div>
    );
}

export default HomeNews