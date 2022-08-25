const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = process.env

const sign = (payload={})=>{
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "8h" } )
}

// Verificar que el token este bien
const verify = (token) => {
    return jwt.verify(token, JWT_SECRET)
  }
  
  module.exports = { sign, verify }