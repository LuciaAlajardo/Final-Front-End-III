import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import style from "./Cards.module.css" 

const Card = ({ name, username, id }) => {
  const { dispatchFavs} = useContext(ContextGlobal);

  const addFav = () => {
    dispatchFavs({ type: "add_fav", payload: { name, username, id } });
    alert("Agregado a favorito");
  };

  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <div>
        <img
        className={style.imgCard}
            src="../images/doctor.jpg"
            alt="doctor"
          />
          <h3 className={style.h3}>{name}</h3>
          <p className={style.p}>{id}- {username}</p>  
        </div>
      </Link>
      <button 
      onClick={addFav} className={style.buttonFavs}>
        Add fav
      </button>
    </div>
  );
};

export default Card;
