//KONTROLLER BURADA!

const httpStatus = require("http-status");
const logger = require("../logs/adminLogger");
const jwt = require("jsonwebtoken");
const {
  refreshTokenList,
  createTokens,
} = require("../servis/AdminLoginServis");
const { icerikOlmayan, icerikOlan } = require("../validations/UrunlerValidate");

// İlk sağlanması gereken kullanıcı isteği koşulları burada.
// Yorum satırları aynı hataları tekrarlamamak adına silinmedi.

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

        console.log("doğrulama: ", reqProps);

        // iceriksiz.forEach((prop) => {
        //   if (prop != "tabIndex") {
        //     console.log("contains - ", reqProps.includes(prop));
        //     if (reqProps.includes(prop) == true) {
        //     }
        //   } else {
        //     res
        //       .status(httpStatus.BAD_REQUEST)
        //       .json({ hataMesaji: "Ürün bilgileri eksik veya hatalı." });
        //   }
        // });

        if (!!reqObj.Urun == false || !!reqObj.Fiyat == false) {
          // Ürün bilgisi veya Fiyat bilgisinde hata varsa bu koşulu döndürür.
          res
            .status(httpStatus.BAD_REQUEST)
            .json("Ürün bilgileri eksik veya hatalı.");
          return;
        }
        // else{res.status(200).json("Ürün ekleme başarılı.");

        // console.log(req.body);

        break;
      // console.log("dogrulama - ", reqObj.Urun);

      //break;
      case 2:
        const iceriksiz2 = Object.getOwnPropertyNames(icerikOlmayan);
        const reqProps2 = Object.getOwnPropertyNames(req.body);

        console.log("doğrulama: ", reqProps2);

        if (!!reqObj.Urun == false || !!reqObj.Fiyat == false) {
          // Ürün bilgisi veya Fiyat bilgisinde hata varsa bu koşulu döndürür.
          res
            .status(httpStatus.BAD_REQUEST)
            .json("Ürün bilgileri eksik veya hatalı.");

          return;
        }

        break;
      case 3:
        const icerikli = Object.getOwnPropertyNames(icerikOlan);
        const reqProps3 = Object.getOwnPropertyNames(req.body);

        console.log("doğrulama: ", reqProps3);

        if (
          !!reqObj.Urun == false ||
          !!reqObj.Fiyat == false ||
          !!reqObj.Icindekiler == false
        ) {
          // Ürün bilgisi veya Fiyat bilgisinde hata varsa bu koşulu döndürür.
          res
            .status(httpStatus.BAD_REQUEST)
            .json("Ürün bilgileri eksik veya hatalı.");

          return;
        }

        break;
      case 4:
        const iceriksiz3 = Object.getOwnPropertyNames(icerikOlmayan);
        const reqProps4 = Object.getOwnPropertyNames(req.body);

        console.log("doğrulama: ", reqProps4);

        if (!!reqObj.Urun == false || !!reqObj.Fiyat == false) {
          // Ürün bilgisi veya Fiyat bilgisinde hata varsa bu koşulu döndürür.
          res
            .status(httpStatus.BAD_REQUEST)
            .json("Ürün bilgileri eksik veya hatalı.");

          return;
        }

        break;
      case 5:
        const icerikli2 = Object.getOwnPropertyNames(icerikOlan);
        const reqProps5 = Object.getOwnPropertyNames(req.body);

        console.log("doğrulama: ", reqProps5);

        if (
          !!reqObj.Urun == false ||
          !!reqObj.Fiyat == false ||
          !!reqObj.Icindekiler == false
        ) {
          // Ürün bilgisi veya Fiyat bilgisinde hata varsa bu koşulu döndürür.
          res
            .status(httpStatus.BAD_REQUEST)
            .json("Ürün bilgileri eksik veya hatalı.");

          return;
        }

        break;
      case 6:
        const iceriksiz4 = Object.getOwnPropertyNames(icerikOlmayan);
        const reqProps6 = Object.getOwnPropertyNames(req.body);

        console.log("doğrulama: ", reqProps6);

        if (!!reqObj.Urun == false || !!reqObj.Fiyat == false) {
          // Ürün bilgisi veya Fiyat bilgisinde hata varsa bu koşulu döndürür.
          res
            .status(httpStatus.BAD_REQUEST)
            .json("Ürün bilgileri eksik veya hatalı.");

          return;
        }

        break;
      case 7:
        const iceriksiz5 = Object.getOwnPropertyNames(icerikOlmayan);
        const reqProps7 = Object.getOwnPropertyNames(req.body);

        console.log("doğrulama: ", reqProps7);

        if (!!reqObj.Urun == false || !!reqObj.Fiyat == false) {
          // Ürün bilgisi veya Fiyat bilgisinde hata varsa bu koşulu döndürür.
          res
            .status(httpStatus.BAD_REQUEST)
            .json("Ürün bilgileri eksik veya hatalı.");

          return;
        }

        break;
    }
    return next();
  }

  res.send({
    hataMesaji: "Hangi menü tablosunda olacağını belirtiniz..",
    status: httpStatus.BAD_REQUEST,
  });
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
  const { value, error } = schema.validate(req.body);

  console.log(error);
  if (error) {
    logger.error("siparislerValidation hatası: ", error);

    res.send({
      hataMesaji: "Sipariş işleminde hata oluştu(middle).",
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

  return next();
};

const LoginAktifMi = () => (req, res, next) => {
  const header = req.header("Authorization");
  if (!header) {
    res.status(401).send({ hataMesaji: "Hesaba giriş yapılmamış." });
  }

  const headerElements = header.split(" ");

  const accessToken = headerElements[1];

  const refreshToken = headerElements[2];
  if (!accessToken) {
    res.status(401).send({ hataMesaji: "Hesaba giriş yapılmamış." });
    return;
  }

  jwt.verify(refreshToken, process.env.REFRESHTOKENSECRET, (err, admin) => {
    console.log("Hata: ", err);
    console.log("Admin: ", admin);
    if (!err && refreshTokenList.includes(refreshToken)) {
      const { accessToken, refreshToken } = createTokens(req.body.admin);

      // admin.accessToken = accessToken;
      // admin.refreshToken = refreshToken;

      const resAdmin = {
        admin: admin.sifre,

        access: accessToken,

        refresh: refreshToken,
      };

      res.admin = resAdmin;

      console.log("New Tokens: ", admin);

      return next();
    } else {
      res.status(401).send({
        hataMesajı: "Giriş yapılmadı veya uzun süredir işlem yapılmadı.",
      });
      return;
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
