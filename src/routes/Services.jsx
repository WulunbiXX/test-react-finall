import ContectImg from "../assets/Russ.jpg"
import HomePage from "../components/HomePage";
import Navbar from "../components/navbar";
import Footer from "../components/Footer"
import ServicePage from "../components/ServicePage";


function Services() {

    return (
        <>
            <Navbar />
            <ServicePage
            player1_Name="Luka Dončić"
            player2_Name="LeBron James"
            player3_Name="Austin Reaves"
            player4_Name="Rui Hachimura"
            player1_Number="#77"
            player2_Number="#23"
            player3_Number="#15"
            player4_Number="#28"
            />
            <Footer/>
        </>
    )
};

export default Services;