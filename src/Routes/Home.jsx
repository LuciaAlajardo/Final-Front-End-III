import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  const getDentistas = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    setDentistas(data);
  };

  useEffect(() => {
    getDentistas();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentistas.length &&
          dentistas.map((dentista) => (
            <Card
              key={dentista.id}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
