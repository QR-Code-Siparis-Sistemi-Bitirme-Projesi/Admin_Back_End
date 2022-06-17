const { connectDB } = require("./DataBase");

module.exports = () => {
  connectDB();
};
