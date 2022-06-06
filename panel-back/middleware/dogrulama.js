//KONTROLLER BURADA!

const httpStatus = require("http-status");
const logger = require("../logs/adminLogger");
const {
  refreshTokenList,
  createTokens,
} = require("../servis/AdminLoginServis");
const { icerikOlmayan, icerikOlan } = require("../validations/UrunlerValidate");
const { Tatlilar }
  = require("../Schemas/urunSchemas");

const secmeliValidasyon = (req, res, next) => {
  const reqObj = req.body;
  console.log("tabIndex - ", reqObj.tabIndex);

  if (reqObj.tabIndex) {
    switch (reqObj.tabIndex) {
      case 1:
        // const deneme = Object.getOwnPropertyNames(reqObj);
        const iceriksiz = Object.getOwnPropertyNames(icerikOlmayan);
        const reqProps = Object.getOwnPropertyNames(req.body);

        // deneme2.contains(req.body?.Urun);

        console.log("dogrulama - ", reqProps);
        console.log("dogrulama2 - ", deneme3);

        iceriksiz.forEach(prop => {
          if (prop != "tabIndex") {
            console.log("contains - ", reqProps.includes(prop));
          }

        });
        // console.log("dogrulama - ", reqObj.Urun);

        res
          .status(httpStatus.BAD_REQUEST)
          .json({ hataMesaji: "Ürün bilgileri eksik veya hatalı." });

        return;

      /**req.body içerisinde Tatlilar propperti leri var mı? ver tileri tutuyor mu 
       * typeOf 
      */
      //break;
      case 2:
        console.log("dogrulama - ", urunlerValidate.icecekler);
        break;
      case 3:
        console.log("dogrulama - ", urunlerValidate.kahvalti);
        break;
      case 4:
        console.log("dogrulama - ", urunlerValidate.TekBagel);
        break;
      case 5:
        console.log("dogrulama - ", urunlerValidate.Sandvicler);
        break;
      case 6:
        console.log("dogrulama - ", urunlerValidate.HaftaSonuOzel);
        break;
      case 7:
        console.log("dogrulama - ", urunlerValidate.Ekstralar);
        break;
    }

    return next();
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
