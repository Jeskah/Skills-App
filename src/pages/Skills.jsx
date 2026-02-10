import { useNavigate } from "react-router-dom";

export default function Skills() {
    const navigate = useNavigate();
    
    return (

    <div className="skill-page">


            <h1>loading skills</h1>
            <h3>I am looking for . . .</h3>

            
        <div className="skills-btns">
            <button onClick={ () => navigate ("/photographers")}>Photographers</button>
            <button>Graphic Designers</button>
            <button>Developers</button>
            <button>Fine Artists</button>
            <button>Copywriters</button>
            <button>Voice Artist</button>
            <button>Fashion Designers</button>
        </div>

            <a className="seemore">SEE MORE...</a>

        <img
        src="https://static.vecteezy.com/system/resources/previews/012/895/895/original/cute-cowboy-skull-in-pink-color-illustration-for-clip-art-and-design-element-png.png" 
        alt="skull" 
        className="skull"
        />
    </div>
    )
}