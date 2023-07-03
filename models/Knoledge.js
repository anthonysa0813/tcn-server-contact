const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KnowledgeSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
    trim: true,
  },
  level: {
    type: String,
    required: [true, "El nivel es requerido"],
    trim: true,
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: [true, "El employee es requerido"],
  },
});

// Antes de que se elimine un documento de Knowledge, realiza esta acción
KnowledgeSchema.pre("remove", function (next) {
  // Elimina los documentos relacionados de Employee que tengan este ID de Knowledge
  this.model("Employee").updateMany(
    { knowledge: this._id },
    { $pull: { knowledge: this._id } },
    next
  );
});

module.exports = mongoose.model("Knowledge", KnowledgeSchema);
