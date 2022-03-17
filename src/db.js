const { Pool } = require("pg");
const { password } = require("pg/lib/defaults");
require("dotenv").config();

const db = new Pool({
  user: process.env.user,
  password: process.env.Password,
  host: "localhost",
  port: 5432,
  database: "libretas",
});
module.exports = db;
