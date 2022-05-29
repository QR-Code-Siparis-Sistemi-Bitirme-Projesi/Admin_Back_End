const {kahvalti,icecekler,TekBagel,Tatlilar,Sandvicler,HaftaSonuOzel,Ekstralar} = require("../Schemas/siparisSchemas");

const SiparisAl = async ()  => {
  const siparisler = await Siparis.find({});
 



  const siparisObj = {

    siparisObj: siparisler,
  }

  return siparisObj;
};

const update = (DuzenlenenSiparis) => {   //Düzenlenmiş sipariş.
  const guncelSiparis = {
    siparişler: DuzenlenenSiparis.siparişler,
  };

  return Siparis.findByIdAndUpdate(DuzenlenenSiparis.id, guncelSiparis); //Id ile siparişi bulup düzenlenen ile değiştirme.
};

const remove = (silineceksiparis) => {
  return Siparis.findByIdAndDelete(silineceksiparis.id); //Id ile siparişi bulup silme.
};

const list = () => {
  return Silgi.find({}); //Siparişleri görüntüleme.
};

module.exports = {
  SiparisAl,
  update,
  remove,
  list
};
