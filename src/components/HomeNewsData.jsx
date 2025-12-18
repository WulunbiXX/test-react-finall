import "./HomeNews.css"

const HomeNewsData = (news) => {
    return (
        <div className="News-container">
            <div className="fir-news">
                <div>
                    <div className="t-image"> 
                        <img src={news.img} />
                    </div>
                    <div className="t-h2">
                        <h2>{news.heading}</h2>
                    </div>
                </div>
                <div className="game-news">
                    <div className="game-logo">
                        <img src={news.logo} /> 
                        <p>{news.logoName}</p>
                    </div>
                    <div className="game-score">
                        <span>{news.score}</span>
                        <div><i class="fa-solid fa-caret-left fa-lg"></i></div>                     
                        <span>{news.score2}</span>
                    </div>
                    <div className="game-logo">
                        <img src={news.logo2} />
                        <p>{news.logoName2}</p>
                    </div>
                </div>
                <div className="btm-news">
                    <a href="/">
                        <i class="fa-solid fa-circle-play fa-lg"></i>
                        <h3>Watch Replay</h3>
                    </a>
                    <a href="/">
                        <i class="fa-solid fa-circle-chevron-down fa-lg"></i>
                        <h3>Game Recap</h3>
                    </a>
                </div>
            </div>
            <div className="sec-news">
                <div className="news-cards">
                    <div className="new-image">
                        <img src={news.img2} />
                    </div>
                    <h2>{news.heading2}</h2>
                </div>
                <div className="news-cards">
                    <div className="new-image">
                        <img src={news.img3} />
                    </div>
                    <h2>{news.heading3}</h2>
                </div>
            </div>
        </div >
    )
}

export default HomeNewsData