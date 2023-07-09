const { Router } = require("express");
const router = Router();
const { saveCvFile } = require("../helpers/save-cv-file");
const { check } = require("express-validator");
const validationFields = require("../middlewares/validationFields");
const User = require("../models/employee");
const { validateFile } = require("../middlewares/validationFile");
const fs = require("fs");
const path = require("path");
const validateJWT = require("../helpers/validate-jwt");
const Employee = require("../models/employee");

router.post("/", validateFile, async (req, res) => {
  const pathComplete = await saveCvFile(req.files, "curriculums");

  return res.status(200).json({
    path: pathComplete,
  });
});

router.put("/", async (req, res) => {
  try {
    const { iduser, idcv } = req.query;
    const pathComplete = await saveCvFile(req.files, "curriculums");
    const user = await Employee.findById(iduser);

    //eliminar el cv de la upload
    const pathFile = path.join(__dirname, `../uploads/curriculums/${idcv}`);
    fs.unlink(pathFile, (error) => {
      if (error) {
        console.error("Error al eliminar el archivo:", error);
      } else {
        console.log("Archivo eliminado exitosamente");
      }
    });
    // actualizar el cv del usuario
    user.cv = pathComplete;
    user.save();
    return res.json({
      message: "CV actualizado",
      cv: user.cv,
    });
  } catch (error) {
    console.log("Error: " + error);
    return res.status(500).json({
      message: "jeje",
    });
  }
});

module.exports = router;
