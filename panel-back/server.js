const app = require("./app");
const { UrunlerRoutes } = require("./a-routes");
const logger = require("./logs/adminLogger");
const app_port = process.env.APP_PORT || 3003;

app.use(UrunlerRoutes);

app.listen(app_port, () => {
  console.log(`${process.env.APP_PORT} portu dinleniyor...`);
  logger.info(`${process.env.APP_PORT} portu dinleme işlemi.`);
});
