import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../Components/Detail.module.css";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentista, setDentista] = useState([]);
  const params = useParams();

  const getDentista = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await res.json();
    console.log(data);
    setDentista(data);
  };

  useEffect(() => {
    getDentista();
  }, []);
  return (
    <div>
      <h1>Información del Dentista con el id: {dentista.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className={style.detalle}>
        <img className={style.imgT} src="../images/doctor.jpg" alt="doctor" />
        <table>
          <thead>
            <tr>
              <tr className={style.tr}>Nombre: {dentista.name}</tr>
              <tr>Email: {dentista.email}</tr>
              <tr>Teléfono: {dentista.phone}</tr>
              <tr>Sitio Web: {dentista.website} </tr>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Detail;
