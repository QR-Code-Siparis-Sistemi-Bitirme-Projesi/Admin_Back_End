const winston = require("winston");
// Log kayıt işlemleri...
const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: "bilgiler-service" },
  transports: [
    new winston.transports.File({
      level: "error",
      filename: "panel-back/logFile/errors.log", //Hatalarla oluşturulacak log kısmı.
    }),
    new winston.transports.File({
      level: "info",
      filename: "panel-back/logFile/veri.log", //Verilerin olacağı log kısmı.
    }),
    new winston.transports.File({ filename: "panel-back/logFile/all.log" }), //Her türlü logun bulunacağı kısım.
  ],
});

module.exports = logger;
