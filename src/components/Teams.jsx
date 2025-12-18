import "./Teams.css"
import Luka from "../assets/Luka2.jpg"
import TeamsData from "./TeamsData"

function Teams() {
    return (
        <div className="teams-section">
            <div className="teams-title">
                <h1>NBA</h1>
                <div className="line"></div>
                <p>choose your teams</p>
            </div>
            <TeamsData
                className="first-des"
                heading="The Lakers Community"
                text="What we do off the court is equally as important to us as what we’re doing on the court. See the ways that we're impacting the Los Angeles Community"
                img={Luka}
                button="Explore Now"
                arrow="→"
            />

            <TeamsData
                className="reverse-des"
                heading="The Lakers Community"
                text="What we do off the court is equally as important to us as what we’re doing on the court. See the ways that we're impacting the Los Angeles Community"
                img={Luka}
                button="Explore Now"
                arrow="→"
            />

        </div>
    )
}

export default Teams

