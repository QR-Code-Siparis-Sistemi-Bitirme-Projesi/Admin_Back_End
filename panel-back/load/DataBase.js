const Monngoose = require("mongoose");
const db = Monngoose.connection;

db.on("error", () => {
  console.log("Veri tabanı bağlantı hatası!");
});

db.once("open", () => {
  console.log("Veri tabanı bağlantısı sağlandı.");
});

const connectDB = async () => {
  await Monngoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

const closeConnection = async () => {
  await Monngoose.connection.close();
};

module.exports = {
  connectDB,
  closeConnection,
};
