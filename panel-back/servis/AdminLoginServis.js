const Admin = require("../Schemas/Admin");
var jwt = require("jsonwebtoken");

let refreshTokenList = [];

const AdminGirisKontrol = async (adminBilgi) => {
    const adminVeri = await Admin.find({ sifre: adminBilgi.sifre }); 

   
   const admin = adminVeri[0];

  console.log(adminVeri);

  if (adminVeri.length == 0) throw Error("Şifre hatalı.");

  const newTokens = createTokens(Admin);

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
    { sifre: Admin.sifre },
    process.env.ACCESSTOKENSECRET,
    { expiresIn: "30m" }
  );

  const refreshToken = jwt.sign(
    { sifre: Admin.sifre },
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
