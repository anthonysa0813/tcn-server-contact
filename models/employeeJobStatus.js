const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeJobStatusSchema = new Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    status: {
      type: String,
      required: false,
      default: "",
    },
    confirm: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

EmployeeJobStatusSchema.pre("remove", function (next) {
  // Elimina la referencia a este documento en la propiedad "employee" del modelo Employee
  this.model("Employee").updateOne(
    { _id: this.employee },
    { $pull: { jobStatus: this._id } },
    next
  );
});

const model = mongoose.model("EmployeeJobStatus", EmployeeJobStatusSchema);

module.exports = model;
