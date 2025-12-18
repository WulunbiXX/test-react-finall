import HomePage from "../components/HomePage";
import Navbar from "../components/navbar";
import AboutImg from "../assets/about.jpg"
import Footer from "../components/Footer"
import AbotPage from "../components/AboutPage"
import HomeNews from "../components/HomeNews"
import News from "../components/News"

function About() {

    return (
        <>
            <Navbar/>
            <HomePage
                cName="wrapper-mid"
                wrapperImg="https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Luka Doncic reflects on second child's birth after Lakers win"
                btnClass="hide"
            />
            <AbotPage
                text1="Luka Doncic reflects on second child's birth after Lakers win"
                text2="Luka Dončić Named NBA Western Conference Player of the Week"
                text3="Luka Dončić Named NBA Western Conference Player of the Week"
            />
            <HomeNews/>
            <News/>
            <Footer/>
        </>
    )
};

export default About;