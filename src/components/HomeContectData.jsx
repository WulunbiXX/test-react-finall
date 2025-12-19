import "./HomeContext.css"
import news1 from "../assets/news1.jpg"
import news2 from "../assets/news2.jpg"
import HomeContext from "./HomeContext"

const HomeContextData = (news) => {
    return (
        <div className="news-board">
            <div className="t-image">
                <img src={news.img} />
            </div>
            <div className="t-text">
                <h2>{news.heading}</h2>
                <p>{news.text}</p>
                <a href="/test-react-finall/about">Read More</a>
            </div>
            <div className="news-additional">
                <div className="news-line"></div>
                <p>1d ● features</p>
            </div>
        </div>
    )
}

export default HomeContextData