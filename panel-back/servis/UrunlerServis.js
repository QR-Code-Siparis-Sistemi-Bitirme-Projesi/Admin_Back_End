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

const update = (DuzenlenenUrun) => {
  
  //Düzenlenmiş Ürün.
  
  
};
const guncelUrun = {
  
  siparişler: DuzenlenenUrun.siparişler,
  
  yemek: DuzenlenenUrun.yemek,
  
  isim: DuzenlenenUrun.isim,
  
  fiyat: DuzenlenenUrun.fiyat,
  
  içerik: DuzenlenenUrun.içerik,
  
  icecek: DuzenlenenUrun.icecek,
  
  tatli: DuzenlenenUrun.tatli,
  
  Urun: DuzenlenenUrun.Urun,
  
  Fiyat: DuzenlenenUrun.Fiyat,
  
  içindekiler: DuzenlenenUrun.içindekiler,
  
};

switch(tabIndex){
  case 1: 
 Tatlilar.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); //Id ile ürünü bulup düzenlenen ile değiştirme.
  break
  case 2:
   icecekler.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); //Id ile ürünü bulup düzenlenen ile değiştirme.
  break;
  // return Tatlilar.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); //Id ile ürünü bulup düzenlenen ile değiştirme.
  
};


const remove = (UrunSil) => {
  return Tatlilar.findByIdAndDelete(UrunSil.id); //Id ile ürünü bulup silme.
};

const list = () => {
  return Urun.find({}); //Ürünleri görüntüleme.
};

module.exports = {
  MenuAl,
  update,
  remove,
  list
};
