import React, { useState, useEffect } from "react";
import "./News.css"

function MyComponent() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures the effect runs once on mount

    const fetchData = async () => {
        try {
            const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_d9020dda2d6d4cfdbdd34f79f0725d6f&q=Nba&country=tw&language=zh');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const news = await response.json();
            // Update the state with the fetched data
            setData(news);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    // Render the component
    return (
        <div className="News">
            <div className="News-top">
                <div>
                    <h1>Team News</h1>
                    <p>Follow us for the latest NBA news</p>
                </div>
                <button href="#">
                    See More News
                </button>
            </div>
            {data ? (
                <div className="main-news">
                    {data.results.slice(0, 8).map((item) => (
                        <div key={item.article_id} className="news-card"
                            onClick={() => {
                                window.open(item.link, "_blank");
                            }}>
                            <img src={item.image_url} />
                            <h2>{item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</h2>
                            <p>{item.description.length > 120 ? item.description.slice(0, 100) + "..." : item.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default MyComponent;

