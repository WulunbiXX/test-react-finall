import "./SignUpPage.css"
import ContectImg from "../assets/Russ.jpg"

function SignUpPage(props) {
    return (
        <div className="sign-wrapper">
            <div className="sign-image">
                <img src={ContectImg} />
            </div>
            <form className="sign-form">
                <h1>Login to your account</h1>
                <div className="form">
                    <label for="name"><p>Username/Email:</p></label>
                    <input type="text" className="name" id="name" autocomplete="off" required />
                </div>
                <div className="form">
                    <label for="name"><p>Password:</p></label>
                    <input type="email" className="email" id="email" autocomplete="off" required />
                </div>
                <a href="/other" className="forgot"><h3>Forgot Password?</h3></a>
                <div className="or-line"><div></div>or<div></div></div>
                <a className="google" href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dzh-TW&ec=GAlA8wE&hl=zh-TW&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S353966407%3A1766130773379393"><p>Login With Google</p></a>
                <button className="Submit">submit</button>
            </form>
        </div>
    )
}

export default SignUpPage