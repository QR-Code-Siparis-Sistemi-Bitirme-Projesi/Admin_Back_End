const { siparis } = require("../Schemas/siparisSchemas");

const siparisEkle = async (urunData) => {
  var yeniUrun = new siparis(urunData);
  return yeniUrun.save();
};

const SiparisAl = async () => {
  const siparisler = await siparis.find({});

  const siparisObj = {
    siparisObj: siparisler,
  };

  return siparisObj;
};

const siparisGuncelle = (DuzenlenenSiparis) => {
  //Düzenlenmiş sipariş.
  const guncelSiparis = {
    siparisler: DuzenlenenSiparis.siparisler,
  };

  return siparis.findByIdAndUpdate(DuzenlenenSiparis.id, guncelSiparis); //Id ile siparişi bulup düzenlenen ile değiştirme.
};

const siparisSil = (silineceksiparis) => {
  return siparis.findByIdAndDelete(silineceksiparis.id); //Id ile siparişi bulup silme.
};

module.exports = {
  siparisEkle,
  SiparisAl,
  siparisGuncelle,
  siparisSil,
};
