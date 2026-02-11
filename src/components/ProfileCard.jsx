export default function Photographers() {

return (
        <div className="profiles flex flex-col items-center">

            <img 
                src="https://catfurlife.com/wp-content/uploads/2024/03/Black-Cat-on-ledge.jpg"
                alt="Profile Picture"
                className="profile-picture">
            </img>

                <p>online</p> 

            
            <button>VIEW PROFILE</button>   
            <p className="name">SABRINA</p>
            <p className="bio">Photographer, Magician, Healer</p>


            <div className="like-watch-state flex flex-row gap-10">
                <button>like</button>
                <button>watch</button>
            </div>
        </div>
    );
};