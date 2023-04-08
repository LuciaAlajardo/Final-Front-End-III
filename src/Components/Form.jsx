import React, { useState } from "react";
import CardContact from "./CardContact";
import style from "./Form.module.css"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mostrarCard, setMostrarCars] = useState (false);
  const [error, setError] = useState(false);

  const nombreValido = nombre.length > 5;
console.log(nombreValido);

const emailValido = (email) => {
  let emailValido = /^w+@[a-zA-Z_]+?.[a-zA-Z] {2,3}$/;
  return(emailValido.test(email)) 
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValido && nombreValido) {
      setMostrarCars(true);
      setError("");      
    }
    else{
      setError (true);
    }
  };

  const onNameChange = (e) =>{
    setNombre(e.target.value);
};
const onEmailChange = (e)=>{
    setEmail(e.target.value);
};
console.log(nombre, email);
  

  return (
    <div className={style.form}>
      <form 
      onSubmit={handleSubmit}>
      <input className={style.input} type="text" placeholder="Nombre..." onChange={onNameChange} value={nombre}/> 
      <input className={style.input} type="email" placeholder="Email..." onChange={onEmailChange} value={email}/> 
      <button className={style.buttonSend}>Enviar</button>
      {error ? (
        <div >“Por favor verifique su información nuevamente”.</div> 
        ): null}
      </form>
      {mostrarCard ? <CardContact nombre={nombre}/> : null}
    </div>
  );
};

export default Form;
