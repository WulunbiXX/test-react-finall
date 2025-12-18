import "./AboutPage.css"

function AbotPage(props) {
    return (
        <>
            <div className="titleHero">
                <a className="titleContext">
                    <p>{props.text1}</p>
                    <div></div>
                    <p>other</p>
                </a>
                <a className="titleContext">
                    <p>{props.text2}</p>
                    <div></div>
                    <p>other</p>
                </a>
                <a className="titleContext">
                    <p>{props.text3}</p>
                    <div></div>
                    <p>other</p>
                </a>
            </div>
        </>
    )
}

export default AbotPage