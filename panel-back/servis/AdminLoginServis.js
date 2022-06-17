const Admin = require("../Schemas/Admin");
var jwt = require("jsonwebtoken");

let refreshTokenList = [];

const AdminGirisKontrol = async (adminBilgi) => {
  const adminVeri = await Admin.find({ sifre: adminBilgi.sifre });

  const admin = adminVeri[0];

  console.log(adminVeri);

  if (adminVeri.length == 0) throw Error("Şifre hatalı.");

  const newTokens = createTokens();

  let AdminLogin = {
    tokens: {
      access: newTokens.accessToken,
      refresh: newTokens.refreshToken,
    },
  };

  return AdminLogin;
};
const createTokens = () => {
  console.log("Admin servis ");
  const accessToken = jwt.sign(
    { tasiyici: "Umut" },
    process.env.ACCESSTOKENSECRET,
    { expiresIn: "30m" }
  );

  const refreshToken = jwt.sign(
    { tasiyici: "Umut" },
    process.env.REFRESHTOKENSECRET,
    { expiresIn: "1h" }
  );

  refreshTokenList.push(refreshToken);
  return { accessToken, refreshToken };
};

module.exports = {
  AdminGirisKontrol,
  createTokens,
  refreshTokenList,
};
