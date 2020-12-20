import React, { useState } from "react";
import "./styles.css";

const games = [
  {
    id: "01",
    type: "FPS",
    rating: "⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/valorant.jpg"),
    name: "VALORANT"
  },
  {
    id: "02",
    type: "FPS",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/doom.jpg"),
    name: "DOOM ETERNAL"
    
  },
  {
    id: "03",
    type: "FPS",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/destiny2.jpg"),
    name: "DESTINY 2"
  
  },
  {
    id: "04",
    type: "FPS",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/overwatch.jpg"),
    name: "OVERWATCH"
    
  },
  {
    id: "05",
    type: "FPS",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/sixseige.jpg"),
    name: "Tom Clancy's Rainbow Six Siege "
  },
  {
    id: "06",
    type: "openworld",
    rating: "⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/horizonzerodawn.jpg"),
    name: "Horizon Zero Dawn"
  },
  {
    id: "07",
    type: "openworld",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/gta5.jpg"),
    name: "Grand Theft Auto :5"
  },
  {
    id: "08",
    type: "openworld",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/Assasincreedodyssey.jpg"),
    name: "Assassin's Creed Odyssey"
  },
  {
    id: "09",
    type: "openworld",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/RedDeadRedemption2.jpg"),
    name: "Red Dead Redemption 2"
  },
  {
    id: "10",
    type: "openworld",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/witcher3wildhunt.jpg"),
    name: "The Witcher 3: Wild Hunt"
  },
  {
    id: "11",
    type: "Coop",
    rating: "⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/wayout.jpg"),
    name: "A Way Out"
  },
  {
    id: "12",
    type: "Coop",
    rating: "⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/overcooked.jpg"),
    name: "Overcooked 2"
  },
  {
    id: "13",
    type: "Coop",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/codwarzone.jpg"),
    name: "Call of Duty: Warzone"
  },
  {
    id: "14",
    type: "Coop",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/fortnite.jpg"),
    name: " Fortnite "
  },
  {
    id: "15",
    type: "Coop",
    rating: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
    location: require("../public/images/minecraft.jpg"),
    name: "Minecraft "
  },
  
];
export default function App() {
  const [game ,setGame] = useState(games);
  const handleChange = (e) => {
    const filtered = games.filter((gm) =>
      gm.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setGame(filtered);
  };
  const handleClick = (type) => {
    const newGame = games.filter((gm) => gm.type === type);
    setGame(newGame);
  };

  return (
    <div className="App">
      <div className="head" style={{ padding: "2rem", fontSize: "20px" }}>
        <h1>WELCOME TO THE THE GAMING WORLD</h1>
      </div>
      <nav className="nav">
        <button className="btn" onClick={() => handleClick("FPS")}>
          {" "}
          First Person Shooter {" "}
        </button>
        <button className="btn" onClick={() => handleClick("openworld")}>
  OpenWorld{" "}
        </button>
        <button className="btn" onClick={() => handleClick("Coop")}>
          Co-Op:Local/online{" "}
        </button>
      </nav>
      <div style={{ color: "#fff" }} className="input-section">
        <input
          className="input"
          onChange={handleChange}
          placeholder="Search by Game Title"
          type="search"
        />
      </div>
      <div className="menu">
        {game.map((gm) => (
          <div className="menu-item" key={gm.id}>
            <img src={gm.location} alt={gm.name} width={180} height={170} />
            <h4 className="menu-heading " ><span role="img" aria-label="gaming" >🎮</span> Game Title : {gm.name}</h4>
            <small className="menu-small"><span role="img" aria-label="gaming" >✨</span>Rating(10*)  :  {gm.rating}</small>
          </div>
        ))}
      </div>
    

     <footer
     style={{
       textAlign: "center",
       // margin:"1rem",
       borderTopRightRadius: "1rem",
       padding: "2rem",
            }}
   >
     <div>
       <h2 style={{ color: "#141414" }}>Want to contact with  me!</h2>
       
       <a
         style={{
           padding: "0.5rem",
           backgroundColor: "#141414",
           color: "greenyellow",
           borderRadius: "1rem",
           textDecoration: "none"
         }}
         href="https://github.com/tausifaman222"
         
       >
         Github
       </a>
      <a
      style={{
        padding: "0.5rem",
        backgroundColor: "#141414",
        color: "greenyellow",
        borderRadius: "1rem",
        textDecoration: "none"
      }}
      href="https://twitter.com/aman_pubg"
      >
       Twitter

      </a>
      <a
      style={{
        padding: "0.5rem",
        backgroundColor: "#141414",
        color: "greenyellow",
        borderRadius: "1rem",
        textDecoration: "none"
      }}
      href="https://www.linkedin.com/in/syed-tausif-ahmed-b7139b1b1">
          Linkedin
          </a>
          <a
      style={{
        padding: "0.5rem",
        backgroundColor: "#141414",
        color: "greenyellow",
        borderRadius: "1rem",
        textDecoration: "none"
      }}
      href="mailto: tausifaman222@gmail.com ">
          Mail
          </a>
          
       <p>   $_% Coding for Fun  <span role="img" aria-label="love" >💗 </span> | NeogCamp | ©Syed Tausif Ahmed </p>
     </div>
   </footer>
</div>
  );
}
