const { Router } = require("express");

const { logingEmployee } = require("../../controllers/employee");

const router = Router();

// Login en Employee
router.post("/login", logingEmployee);

// router.get('/all', )

module.exports = router;
