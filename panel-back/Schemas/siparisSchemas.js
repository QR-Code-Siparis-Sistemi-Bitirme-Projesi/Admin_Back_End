const mongoose = require("mongoose");

const SiparisSchema = new mongoose.Schema(
  {
    masaNo: { type: Number },
    Urun: { type: String },
    Fiyat: { type: Number },
    icindekiler: { type: Array },
    Ekstralar: { type: Array },
    Not: { type: String },
    ToplamFiyat: { type: Number },
  },              
  //TOPLAM ÜRÜN SAYISINI VE TOPLAM FİYATI VERECEK BİR BİÇİMDE DÜZENLENECEK!
  {
    collection: "Siparisler", 
    versionKey: false,
    default: undefined,
  }
);

SiparisSchema.post("save", (doc) => {
  logger.info("Sipariş başarıyla oluşturuldu, Sipariş bilgileri: ", doc);
});


const siparis = mongoose.model("SiparisSchema", SiparisSchema);

module.exports = siparis;