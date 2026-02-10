import { useNavigate } from "react-router-dom";


export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="welcome-screen">

        <div className="landing-msg">
            <h3>WELCOME TO MY FIRST</h3>
            <h1>REACT APP!</h1>

            <h3 className="cta">What are you looking for?</h3>

            <button className="start-btn" onClick ={ () => navigate("./start") }>START ❭
            </button>
    <div className="skull">
        <img
        src="https://static.vecteezy.com/system/resources/previews/012/895/895/original/cute-cowboy-skull-in-pink-color-illustration-for-clip-art-and-design-element-png.png" 
        alt="skull" 
        className="skull"
        />
    </div>

        </div>
        </div>
    );
}
