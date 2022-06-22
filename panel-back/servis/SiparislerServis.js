const SiparisSchema = require("../Schemas/siparisSchemas");

const siparisEkle = async (siparisData) => {
  console.log("Siparis servisi", siparisData);
  const yeniUrun = new SiparisSchema(siparisData);
  console.log(yeniUrun);
  return await yeniUrun.save();
};

const SiparisAl = async () => {
  const siparisler = await SiparisSchema.find({
    // createdAt: {

    //   $gte: ilkTarih("2010-04-29T00:00:00.000Z"),
  
    //   $lt: sonTarih("2010-05-01T00:00:00.000Z")
  
    // }
  });

  const siparisObj = {
    siparisObj: siparisler,
  };

  return siparisObj;
};

const siparisGuncelle = (DuzenlenenSiparis) => {
  //Düzenlenmiş sipariş.
  console.log("Sipariş güncellemesi: ", DuzenlenenSiparis);
  const guncelSiparis = {
    SiparisSchema: DuzenlenenSiparis.SiparisSchema,

    masaNo: DuzenlenenSiparis.masaNo,
    Urun: DuzenlenenSiparis.Urun,
    Fiyat: DuzenlenenSiparis.Fiyat,
    icindekiler: DuzenlenenSiparis.icindekiler,
    Ekstralar: DuzenlenenSiparis.Ekstralar,
    Not: DuzenlenenSiparis.Not,
    ToplamFiyat: DuzenlenenSiparis.ToplamFiyat,
    SiparisAktifMi: DuzenlenenSiparis.SiparisAktifMi,
  };

  return SiparisSchema.findByIdAndUpdate(DuzenlenenSiparis.id, guncelSiparis); //Id ile siparişi bulup düzenlenen ile değiştirme.
};

const siparisSil = (silineceksiparis) => {
  return SiparisSchema.findByIdAndDelete(silineceksiparis.id); //Id ile siparişi bulup silme.
};

module.exports = {
  siparisEkle,
  SiparisAl,
  siparisGuncelle,
  siparisSil,
};
