import "./FooterStyle.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Nba Fanatics</h1>
                    <p>join your favorite NBA team</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-behance-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="buttom">
                <div>
                    <h4>Game Day</h4>
                    <a href="/">Game Notes</a>
                    <a href="/">Tickets</a>
                    <a href="/">Laker</a>
                    <a href="/">Report</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact us</a>
                </div>
                <div>
                    <h4>Other</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer