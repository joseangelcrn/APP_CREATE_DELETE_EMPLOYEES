module.exports = () => {

  var db = require('../libs/db-connection')(); 
  var Schema = require("mongoose").Schema;

  var Empleado = Schema({
      dni:String,
      nombre:String,
      apel1:String,
      apel2:String,
      cargo:String,
      pais:String,
      ciudad:String
  });

  return db.model('empleados',Empleado);
}
