const Joi = require("joi");


const AdminValidate = Joi.object({
  sifre: Joi.string().required() //alphanum()
});


module.exports = {
    AdminValidate
}