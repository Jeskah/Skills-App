import { useState } from "react"

export default function Photographers() {
    const [watching, setWatching] = useState(false);
    
return (
    <div className="profiles flex flex-col items-center">
        <div className="profile-card">

                <div className="online">online</div> 

                <img 
                src="./assets/cat.jpg"
                alt="Profile Picture"
                className="profile-picture">
                </img>

            
                <button className="hire">REPUTATION</button>   

        <div className="flex items-center flex-col">
            
            <p className="name">Pappy Cat</p>
            <p className="bio">Photographer, Actor, Writer</p>


            <div className="skills">
                <button>Skill 1</button>
                <button>Skill 2</button>
                <button>Skill 3</button>
                <button>Skill 3</button>
                <button>Skill 3</button>
            </div>
            <div className="watch">
        {!watching ? (
            <img
            src="/assets/eye-closed.png"
            alt="unwatching"
            className="eye-closed cursor-pointer"
            onClick={() => setWatching(true)}
            />
        ) : (
            <img
            src="/assets/eye-epen.png"
            alt="watching"
            className="eye-open"
            onClick={() => setWatching(false)}
            />
        )}
    </div>
        </div>
    </div>
        </div>
    );
};
