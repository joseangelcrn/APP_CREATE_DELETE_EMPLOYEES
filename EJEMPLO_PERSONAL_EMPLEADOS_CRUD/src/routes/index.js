const express = require("express");
const router = express.Router();

const model = require("../model/empleado")();

router.get("/", (req, res) => {
  model.find({}, (err, empleados) => {
    if (err) throw err;

    res.render("index", {
      title: "Gestion Empleados",
      empleados: empleados
    });
  });
});

router.post("/add", (req, res) => {
  let body = req.body;
  console.log(body);

  model.create(body, (err, empleado) => {
    if (err) throw err;
    res.redirect("/");
  });
});


router.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    model.remove({_id:id},(err,empleados)=>{
        if (err) throw err;
        res.redirect('/');
    });
});
module.exports = router;
