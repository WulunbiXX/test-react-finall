import "./Subscribe.css"

function SubscribePage(props) {

    return (
        <>
            <div className="sub-wrapper">
                <div className="sub">
                    <div className="sub-text">
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                        <div className="input-email">
                            <input name="email" placeholder="enter your email" />
                            <a href="/Sign">{props.Btn}</a>
                        </div>
                    </div>
                    <div className="sub-img">
                        <img alt="HerpImg" src={props.subImg} />
                        <img alt="HerpImg" src={props.subImg2} />
                    </div>
                </div>
                <section>
                    <div className="user-section">
                        <h1>Contact to us</h1>
                        <p>Enter your user information</p>
                        <div className="contact">
                            <i class="fa-solid fa-phone-volume fa-2xl"></i>
                            <div className="contact-inf">
                                <p>Contact number</p>
                                <p>012345678</p>
                            </div>
                        </div>
                        <div className="contact">
                            <i class="fa-brands fa-teamspeak fa-2xl"></i>
                            <div className="contact-inf">
                                <p>customer service</p>
                                <p>+001 123 4567</p>
                            </div>
                        </div>
                        <div className="contact">
                            <i class="fa-regular fa-message fa-2xl"></i>
                            <div className="contact-inf">
                                <p>private message</p>
                                <p>kennywu@gmail.com</p>
                            </div>                       
                        </div>
                    </div>
                    <form>
                        <label for="name">Name:</label>
                        <input type="text" className="name" id="name" autocomplete="off" required />

                        <label for="name">Email:</label>
                        <input type="email" className="email" id="email" autocomplete="off" required />

                        <label for="name">Industry:</label>
                        <input type="industry" className="industry" id="industry" autocomplete="off" required />

                        <label for="name">Message:</label>
                        <textarea type="message" className="message" id="message" autocomplete="off" required />

                        <button>submit</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default SubscribePage