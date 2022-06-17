const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    sifre: { type: String, required: true },
  },
  {
    collection: "Admin",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("AdminSchema", AdminSchema);
