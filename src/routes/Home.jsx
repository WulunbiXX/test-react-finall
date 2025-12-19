import HomePage from "../components/HomePage";
import Navbar from "../components/Navbar";
import ScheduleBoard from "../components/ScheduleBoard"
import HomeNews from "../components/HomeNews"
import Teams from "../components/Teams"
import Footer from "../components/Footer"
import HomeContext from "../components/HomeContext"

function Home() {
    return (
        <>
            <Navbar/>
            <HomePage
            cName="wrapper"
            wrapperImg="https://images.unsplash.com/photo-1518407613690-d9fc990e795f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGJhc2tldGJhbGwlMjBjb3VydHxlbnwwfHwwfHx8MA%3D%3D"
            title="Welcome to Basketball World "
            text="create your style"
            url="/"
            btnClass="show"
            btnText="Click here"
            />
            <HomeContext/>
            <Teams/>
            <Footer/>
        </>
    )
};

export default Home;