const { request, response } = require("express");
const Service = require("../models/Service");
const User = require("../models/employee");

const {
  mailNodeSendSelection,
} = require("../mail_config/nodemailer/mailNodeSendSelectionUser");
const {
  mailNodeSendDescartado,
} = require("../mail_config/nodemailer/mailNodeSendDescartado");
const {
  sendEmailToSupervisor,
} = require("../mail_config/nodemailer/mailNodeSendToSupervisor");
const {
  mailNodeSendHiredUser,
} = require("../mail_config/nodemailer/mailNodeSendHiredUser");

const confirmJob = async (req = request, res = response) => {
  try {
    const { idUser, idService, response } = req.query;
    const service = await Service.findById(idService);
    const user = await User.findById(idUser);

    await sendEmailToSupervisor(
      user.email,
      user.name,
      service.title,
      service.supervisor,
      response
    );
    return res.redirect("http://localhost:3000/confirm");
  } catch (error) {
    return res.json({
      messag: "Hubo un error: " + error.message,
    });
  }
};

const selectUser = async (req = request, res = response) => {
  try {
    const { user, idService } = req.body;
    const service = await Service.findById(idService);
    const employee = await User.findById(user);
    await mailNodeSendSelection(
      employee.email,
      employee.name,
      service.title,
      service.whatsapp,
      idService,
      user
    );
    return res.send({
      message: "Se ha enviado la notificación",
    });
  } catch (error) {
    return res.json({
      messag: "Hubo un error: " + error.message,
    });
  }
};

const discardedUser = async (req = request, res = response) => {
  try {
    const { user, idService } = req.body;
    const service = await Service.findById(idService);
    const employee = await User.findById(user);
    await mailNodeSendDescartado(employee.email, employee.name, service.title);
    res.json({
      message: "Se ha enviado la notificación",
    });
  } catch (error) {
    return res.json({
      messag: "Hubo un error: " + error.message,
    });
  }
};

const hiredUser = async (req = request, res = response) => {
  try {
    const { user, idService } = req.body;
    const service = await Service.findById(idService);
    const employee = await User.findById(user);
    await mailNodeSendHiredUser(
      employee.email,
      employee.name,
      service.title,
      service.whatsapp
    );
    return res.json({
      message: "se ha enviado el correo",
    });
  } catch (error) {
    return res.json({
      message: "Hubo un error: " + error.message,
    });
  }
};

module.exports = {
  confirmJob,
  selectUser,
  discardedUser,
  hiredUser,
};
