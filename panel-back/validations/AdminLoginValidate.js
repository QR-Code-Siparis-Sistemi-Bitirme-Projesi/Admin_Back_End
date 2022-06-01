const Joi = require("joi");


const AdminValidate = Joi.object({
  kAdi: Joi.string().required(),
  sifre: Joi.string().required() //alphanum()
});


module.exports = {
    AdminValidate
}