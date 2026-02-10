
export default function Photographers() {

return (
    <div className="profiles flex flex-col items-center">
        <div className="profile-card">

<           div className="status">
                <p>online</p> 
            </div>

            <div>
                <img 
                src="/assets/cat.jpg"
                alt="Profile Picture"
                className="profile-picture">
                </img>
            </div>
            
                <button className="hire">HIRE</button>   

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
            
        </div>
    </div>
        </div>
    );
};
