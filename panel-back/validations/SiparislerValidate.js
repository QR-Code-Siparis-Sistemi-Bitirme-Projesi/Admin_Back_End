const Joi = require("joi");

const SiparisValidate = Joi.object({
  masaNo: Joi.number().required(),
  Urun: Joi.string().required(),
  Fiyat: Joi.number().required(),
  icindekiler: Joi.array().min(1),
  Ekstralar: Joi.array().max(50),
  Not: Joi.string().max(120).alphanum(),
  ToplamFiyat: Joi.number().required().min(1),
});


module.exports = {
  SiparisValidate
}