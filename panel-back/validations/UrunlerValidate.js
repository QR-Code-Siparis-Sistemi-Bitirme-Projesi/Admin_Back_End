const urunlerValidate = {
  Kahvalti: [
    {
      Urun: { type: String },
      Fiyat: { type: Object }, //objectler double değeri ile değiştirilecek.
      İçindekiler: [{}],
    },
  ],

  icecekler: [
    {
      Urun: { type: String },
      Fiyat: { type: Number },
    },
  ],

  Tek_Bagel: [
    {
      Urun: { type: String },
      Fiyat: { type: Number },
    },
  ],

  Tatlilar: [
    {
      Urun: { type: String },
      Fiyat: { type: Number },
    },
  ],

  Sandviçler: [
    {
      Urun: { type: String },
      Fiyat: { type: Number },
      İçindekiler: [{}],
    },
  ],

  Hafta_Sonu_Ozel: [
    {
      Urun: { type: String },
      Fiyat: { type: Number },
    },
  ],

  Ekstralar: [
    {
      Urun: { type: String },
      Fiyat: { type: Number },
    },
  ],
};
 
 
 
 module.exports = {
   urunlerValidate
 }