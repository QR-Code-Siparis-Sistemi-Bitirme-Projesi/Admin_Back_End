const Joi = require("joi");

const AdminValidate = Joi.object({
  sifre: Joi.string().required(), //alphanum()
});

// admin giriş kontrolleri.

module.exports = {
  AdminValidate,
};
