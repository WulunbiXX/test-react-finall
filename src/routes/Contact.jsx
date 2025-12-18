import sub1 from "../assets/sub1.jpg"
import HomePage from "../components/HomePage";
import Navbar from "../components/navbar";
import Footer from "../components/Footer"
import SubscribePage from "../components/SubscribePage"

function Contact() {
    return (
        <>
            <Navbar />
            <SubscribePage
                title="Subscribe to us and you will get..."
                text="Follow us for the latest Lakers news."
                subImg={sub1}
                subImg2="https://cdn.nba.com/teams/uploads/sites/1610612747/2025/11/1U8A4534_edited.jpg"
                Btn="Login"
            />
            <Footer />
        </>
    )
};

export default Contact;