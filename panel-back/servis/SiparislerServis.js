const {kahvalti,icecekler,TekBagel,Tatlilar,Sandvicler,HaftaSonuOzel,Ekstralar} = require("../Schemas/siparisSchemas");

const SiparisAl = async ()  => {
  const siparisler = await Siparis.find({});
 



  const siparisObj = {

    siparisObj: siparisler,
  }

  return siparisObj;
};

const update = (DuzenlenenSiparis) => {   //Düzenlenmiş bilgi.
  const guncelSiparis = {
    siparişler: DuzenlenenSiparis.siparişler,
  };

  return Siparis.findByIdAndUpdate(DuzenlenenSiparis.id, guncelSiparis); //Id ile bilgiyi bulup düzenlenen ile değiştirme.
};

const remove = (silineceksiparis) => {
  return Siparis.findByIdAndDelete(silineceksiparis.id); //Id ile bilgiyi bulup silme.
};

const list = () => {
  return Silgi.find({}); //Bilgileri görüntüleme.
};

module.exports = {
  SiparisAl,
  update,
  remove,
  list
};
