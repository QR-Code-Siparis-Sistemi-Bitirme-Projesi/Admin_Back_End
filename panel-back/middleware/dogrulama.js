//KONTROLLER BURADA!

const httpStatus = require("http-status");
const logger = require("../logs/adminLogger");
const {
  refreshTokenList,
  createTokens,
} = require("../servis/AdminLoginServis");
const urunlerValidate = require("../validations/UrunlerValidate");

const secmeliValidasyon = (req, res, next) => {
  const { tabIndex } = req.body;
  console.log("tabIndex - ", tabIndex);

  if (tabIndex) {
    switch (tabIndex) {
      case 1:
        console.log("dogrulama - ", urunlerValidate.Tatlilar);
    }

    next();
  }

  res.status(500).send();
};

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

    res.send({
      hataMesaji: "Sipariş işleminde hata oluştu.",
      status: httpStatus.BAD_REQUEST,
    });

    return;
  }

  Object.assign(req, value);

  return next();
};

const AdminGirisValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      hataMesaji: "Şifre eksik veya yanlış!",
    });

    return;
  }

  Object.assign(req, value);

  next();
};

const LoginAktifMi = () => (req, res, next) => {
  const accessToken = req.header("Authorization").split(" ")[1];
  const refreshToken = req.body.token.refreshToken;

  if (!accessToken) {
    res.status(401).send({ hataMesaji: "Hesaba giriş yapılmamış." });
  }

  jwt.verify(refreshToken, process.env.REFRESHTOKENSECRET, (err, admin) => {
    if (!err && refreshTokenList.includes(refreshToken)) {
      const { accessToken, refreshToken } = createTokens(req.body.admin);

      admin.accessToken = accessToken;
      admin.refreshToken = refreshToken;

      console.log("New Tokens: ", admin);

      next();
    } else {
      res.status(401).send({
        hataMesajı: "Giriş yapılmadı veya uzun süredir işlem yapılmadı.",
      });
    }
  });
};

module.exports = {
  urunlerValidation,
  siparislerValidation,
  AdminGirisValidation,
  LoginAktifMi,
  secmeliValidasyon,
};
