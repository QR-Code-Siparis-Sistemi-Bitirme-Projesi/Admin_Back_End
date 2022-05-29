const {kahvalti,icecekler,TekBagel,Tatlilar,Sandvicler,HaftaSonuOzel,Ekstralar} = require("../Schemas/urunSchemas");

const MenuAl = async ()  => {
  const Kahvaltı = await kahvalti.find({});
  const Icecekler = await icecekler.find({});
  const Tek_Bagel = await TekBagel.find({});
  const tatlilar = await Tatlilar.find({});
  const Sandviçler = await Sandvicler.find({});
  const Hafta_Sonu_Ozel = await HaftaSonuOzel.find({});
  const ekstralar = await Ekstralar.find({});



  const menuObj = {

    kahvaltiObj: Kahvaltı,
    
    icecekObj: Icecekler,
    
    bagelObj: Tek_Bagel,

    tatliObj: tatlilar,

    sanvicObj: Sandviçler,

    haftaSonuObj: Hafta_Sonu_Ozel,

    ekstraObj: ekstralar,

  }

  return menuObj;
};

const update = (DuzenlenenUrun) => {   //Düzenlenmiş bilgi.
  const guncelUrun = {
    siparişler: DuzenlenenBilgi.siparişler,
    yemek: DuzenlenenBilgi.yemek,
    isim: DuzenlenenBilgi.isim,
    fiyat:DuzenlenenBilgi.fiyat,
    içerik:DuzenlenenBilgi.içerik,
    icecek:DuzenlenenBilgi.icecek,
    tatli:DuzenlenenBilgi.tatli
  };

  return Urun.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); //Id ile bilgiyi bulup düzenlenen ile değiştirme.
};

const remove = (silinecekUrun) => {
  return Bilgi.findByIdAndDelete(silinecekUrun.id); //Id ile bilgiyi bulup silme.
};

const list = () => {
  return Urun.find({}); //Bilgileri görüntüleme.
};

module.exports = {
  MenuAl,
  update,
  remove,
  list
};
