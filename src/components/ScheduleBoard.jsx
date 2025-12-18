import "./ScheduleBoard.css"

function ScheduleBoard(props) {
    return (
        <>
            <div className="Schedule">
                <div className="line">
                    <a><i class="fa-solid fa-arrow-left"></i></a>
                </div>
                <div className="finall">
                    <div className="board-top">
                        <div className="teams-finall">
                            <img src="https://cdn.nba.com/logos/nba/1610612747/primary/D/logo.svg" />
                            <p>Lakers</p>
                        </div>
                        <div className="score-board">
                            <span>112</span>
                            <a href="/">finall</a>
                            <span>104</span>
                        </div>
                        <div className="teams-finall">
                            <img src="https://cdn.nba.com/logos/nba/1610612746/primary/D/logo.svg" />
                            <p>Clippers</p>
                        </div>
                    </div>
                    <div className="board-end">
                        <button>Watch Replay</button>
                        <button>Game Recap</button>
                    </div>
                </div>
                <div className="next-game">
                    <div className="board-top">
                        <div className="teams-finall">
                            <img src="https://cdn.nba.com/logos/nba/1610612747/primary/D/logo.svg" />
                            <p>Lakers</p>
                        </div>
                        <div className="teams-finall">
                            <img src="https://cdn.nba.com/logos/nba/1610612746/primary/D/logo.svg" />
                            <p>Clippers</p>
                        </div>
                    </div>
                    <div className="board-end">
                        <button>Watch Replay</button>
                        <button>Game Recap</button>
                    </div>
                </div>
                <div className="next-game">
                    <div className="board-top">
                        <div className="teams-finall">
                            <img src="https://cdn.nba.com/logos/nba/1610612747/primary/D/logo.svg" />
                            <p>Lakers</p>
                        </div>
                        <div className="teams-finall">
                            <img src="https://cdn.nba.com/logos/nba/1610612746/primary/D/logo.svg" />
                            <p>Clippers</p>
                        </div>
                    </div>
                    <div className="board-end">
                        <button>Watch Replay</button>
                        <button>Game Recap</button>
                    </div>
                </div>
                <div className="line">
                    <a><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </>
    )
}


export default ScheduleBoard