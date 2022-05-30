const {
  kahvalti,
  icecekler,
  TekBagel,
  Tatlilar,
  Sandvicler,
  HaftaSonuOzel,
  Ekstralar,
} = require("../Schemas/urunSchemas");

const MenuAl = async () => {
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
  };

  return menuObj;
};

const update = (DuzenlenenUrun) => {
  //Düzenlenmiş Ürün.

  console.log("Service update - ", DuzenlenenUrun);
  const guncelUrun = {
    HaftaSonuOzel: DuzenlenenUrun.HaftaSonuOzel,
    Sandvicler: DuzenlenenUrun.Sandvicler,
    Ekstralar: DuzenlenenUrun.Ekstralar,
    Tatlilar: DuzenlenenUrun.Tatlilar,
    TekBagel: DuzenlenenUrun.TekBagel,
    icecekler: DuzenlenenUrun.icecekler,
    kahvalti: DuzenlenenUrun.kahvalti,
  };
  
  switch (DuzenlenenUrun.tabIndex) {
    case 1:
      return Tatlilar.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); 
      case 2:
        return icecekler.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); 
        case 3:
          return kahvalti.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); 
          case 4:
            return TekBagel.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); 
            case 5:
              return Sandvicler.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); 
              case 6:
                return HaftaSonuOzel.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); 
                case 7:
                  return Ekstralar.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); 
    //break;
    // return Tatlilar.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); //Id ile ürünü bulup düzenlenen ile değiştirme.
  }
};

const remove = (UrunSil) => {
switch (UrunSil.tabIndex) {
    case 1:
    return Tatlilar.findByIdAndDelete(UrunSil.id); //Id ile ürünü bulup silme.; 
    case 2:
    return icecekler.findByIdAndDelete(UrunSil.id); 
    case 3:
    return kahvalti.findByIdAndDelete(UrunSil.id); 
    case 4:
    return TekBagel.findByIdAndDelete(UrunSil.id); 
    case 5:
    return Sandvicler.findByIdAndDelete(UrunSil.id); 
    case 6:
    return HaftaSonuOzel.findByIdAndDelete(UrunSil.id); 
    case 7:
    return Ekstralar.findByIdAndDelete(UrunSil.id); 
    //break;
    // return Tatlilar.findByIdAndUpdate(DuzenlenenUrun.id, guncelUrun); //Id ile ürünü bulup düzenlenen ile değiştirme.
  }
};

// const list = () => {
//   return Urun.find({}); //Ürünleri görüntüleme.
// };

module.exports = {
  MenuAl,
  update,
  remove,
  // list,
};
