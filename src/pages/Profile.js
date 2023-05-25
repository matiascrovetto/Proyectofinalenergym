import React from "react";

  export const Profile = () => {
 
  return (
    <div className="container">
        <h2>Crear Perfil</h2>
        <form>
          <div className="form-group">
            <label htmlFor="usuario">Usuario:</label>
            <input type="text" className="form-control" id="usuario" placeholder="Ingrese su nombre de usuario" />
          </div>
          <div className="form-group">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" className="form-control" id="direccion" placeholder="Ingrese su dirección" />
          </div>
          <div className="form-group">
            <label htmlFor="edad">Edad:</label>
            <input type="number" className="form-control" id="edad" placeholder="Ingrese su edad" />
          </div>
          <div className="form-group">
            <label htmlFor="sexo">Sexo:</label>
            <select className="form-control" id="sexo">
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="estatura">Estatura:</label>
            <input type="number" className="form-control" id="estatura" placeholder="Ingrese su estatura en centímetros" />
          </div>
          <div className="form-group">
            <label htmlFor="peso">Peso:</label>
            <input type="number" className="form-control" id="peso" placeholder="Ingrese su peso en kilogramos" />
          </div>
          <div className="form-group">
            <label htmlFor="enfermedad">Enfermedad Crónica:</label>
            <textarea className="form-control" id="enfermedad" placeholder="Ingrese si tiene alguna enfermedad crónica" defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    );
  }

export default Profile