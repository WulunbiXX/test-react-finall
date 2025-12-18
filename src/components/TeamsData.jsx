import "./Teams.css"
import Luka from "../assets/Luka2.jpg"


const TeamsData = (data) => {
    return (
        <div className={data.className}>
            <div className="image">
                <img alt="nba" src={data.img} />
            </div>
            <div className="des-text">
                <h2>{data.heading}</h2>
                <p>{data.text}</p>
                <a href="/" className="clickBtn">
                    {data.button}
                    <a className="blcakarrow">
                        {data.arrow}
                    </a>
                </a>
            </div>
        </div>
    )
}

export default TeamsData