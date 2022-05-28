//KONTROLLER BURADA!

const httpStatus = require("http-status");
const logger = require("../logs/adminLogger");

const urunlerValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    logger.error("urunlerValidation hatası: ", error);
    res
      .status(httpStatus.BAD_REQUEST)
      .json({ hataMesaji: "Ürün bilgileri eksik veya hatalı." });

    return;
  }

  Object.assign(req, value);

  return next();
};

const siparislerValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate({ id: req.body.id });

  if (error) {
    logger.error("siparislerValidation hatası: ", error);

    res
      .send({
        hataMesaji: "Sipariş işleminde hata oluştu.",
        status: httpStatus.BAD_REQUEST,
      });

    return;
  }

  Object.assign(req, value);

  return next();
};

module.exports = {
    urunlerValidation,
    siparislerValidation,
};
