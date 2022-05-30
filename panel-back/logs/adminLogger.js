const winston = require("winston");
// Log işlemleri...
const logger = winston.createLogger({

  format: winston.format.json(),
  defaultMeta: { service: "bilgiler-service" }, 
  transports: [
    new winston.transports.File({
      level: "error",
      filename: "panel-back/logFile/errors.log",  //Hatalarla oluşturulacak log kısmı.
    }),
    new winston.transports.File({
      level: "info",
      filename: "panel-back/logFile/errors.log", //Bilgilerin olacağı log kısmı.
    }),
    new winston.transports.File({ filename: "panel-back/logFile/errors.log" }), //Her türlü logun bulunacağı kısım.
  ],
});

module.exports = logger;