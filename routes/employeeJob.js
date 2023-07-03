const { Router } = require("express");
const {
  confirmJob,
  selectUser,
  discardedUser,
  hiredUser,
} = require("../controllers/employeeJob");

const router = Router();

// confirm status about job
router.get("/", confirmJob);

router.post("/select", selectUser);

router.post("/discarded", discardedUser);

router.post("/hired", hiredUser);

router.get("/confirm", confirmJob);

module.exports = router;
