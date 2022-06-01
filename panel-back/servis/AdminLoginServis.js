const Admin = require("../Schemas/Admin");
var jwt = require("jsonwebtoken");

let refreshTokenList = [];

const AdminGirisKontrolu = async (adminBilgi) => {
    const adminVeri = await Admin.find({ sfire: adminBilgi.sfire }); 

    const admin = adminVeri[0];

  if (adminVeri.length == 0) throw Error("Şifre hatalı.");

  const newTokens = tokenOlustur(Admin);

  let AdminLogin = {
     sifre: Admin.sifre,
    tokens: {
      access: newTokens.accessToken,
      refresh: newTokens.refreshToken,
    },
  };

  return AdminLogin;
};

const createTokens = (Admin) => {
  const accessToken = jwt.sign(
    { sifre: adminBilgi.sifre },
    process.env.ACCESSTOKENSECRET,
    { expiresIn: "30m" }
  );

  const refreshToken = jwt.sign(
    { sifre: adminBilgi.sifre },
    process.env.REFRESHTOKENSECRET,
    { expiresIn: "1h" }
  );

  refreshTokenList.push(refreshToken);
  return { accessToken, refreshToken };
};

module.exports = {
  AdminGirisKontrolu,
  createTokens,
  refreshTokenList,
};
