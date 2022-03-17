const pool = require("../db");

const saludo = (req, res) => {
  res.send("Holaaaaa");
};
const peticion = (req, res) => {
  res.send(`hola ${req.params.nombre}`);
};
const valor = async (req, res) => {
  const {
    nombres,
    apellidos,
    correo,
    telefonos,
    celular,
    direccion,
    codigopostal,
  } = req.body;
  const result = await pool.query(
    "INSERT INTO libreta (Nombres, apellidos, correo, telefonos, celular, direccion, codigopostal) values ($1, $2, $3, $4, $5, $6, $7)",
    [nombres, apellidos, correo, telefonos, celular, direccion, codigopostal]
  );
  console.log(result);
  res.json(result.rows[0]);
};
module.exports = {
  saludo,
  peticion,
  valor,
};
