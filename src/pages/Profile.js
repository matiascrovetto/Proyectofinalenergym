import React, { useContext, useState } from "react";
import { Context } from "../store/AppContext";

export const Profile = () => {
  const {store}=useContext(Context)
  const [formData, setFormData] = useState({
    usuario: "",
    direccion: "",
    edad: 0,
    sexo: "masculino",
    estatura: 0,
    peso: 0,
    enfermedad: "",
    username: store.currentUser.user.username

  });

  const { usuario, direccion, edad, sexo, estatura, peso, enfermedad } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
console.log(store.currentUser)
    try {
      const response = await fetch("https://5000-matiascrove-proyectofin-3npfomteive.ws-us98.gitpod.io/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("¡Perfil creado exitosamente!");
      } else {
        console.log("Error al crear el perfil");
      }
    } catch (error) {
      console.log("Error al crear el perfil:", error.message);
    }
  };

  return (
    <div className="container">
      <h2>Crear Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="usuario">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="usuario"
            placeholder="Ingrese su nombre de usuario"
            value={usuario}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            placeholder="Ingrese su dirección"
            value={direccion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            className="form-control"
            id="edad"
            placeholder="Ingrese su edad"
            value={edad}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sexo">Sexo:</label>
          <select
            className="form-control"
            id="sexo"
            value={sexo}
            onChange={handleChange}
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="estatura">Estatura:</label>
          <input
            type="number"
            className="form-control"
            id="estatura"
            placeholder="Ingrese su estatura en centímetros"
            value={estatura}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="peso">Peso:</label>
          <input
            type="number"
            className="form-control"
            id="peso"
            placeholder="Ingrese su peso en kilogramos"
            value={peso}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="enfermedad">Enfermedad Crónica:</label>
          <textarea
            className="form-control"
            id="enfermedad"
            placeholder="Ingrese si tiene alguna enfermedad crónica"
            value={enfermedad}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Profile;
