import React from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { stateFavs } = useContext(ContextGlobal);
  console.log(stateFavs);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {stateFavs?.map((s) => (
          <Card key={s.id} name={s.name} username={s.username} id={s.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
