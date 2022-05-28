const siparisValidate = ({
  
    Admin:[{
      Kahvalti:[{
      Urun:{type: String},
      Fiyat:{type: Object}, //objectler double değeri ile değiştirilecek. 
      İçindekiler:[{
        
     }],
       }],
       icecekler:[{
       Urun:{type: String},
       Fiyat:{type: Object},
        }],
     
         Tek_Bagel:[{
         Urun:{type: String},
         Fiyat:{type: Object},
         }],
 
          Tatlilar:[{
           Urun:{type: String},
           Fiyat:{type: Object},
            }],
 
            Sandviçler:[{
             Urun:{type: String},
             Fiyat:{type: Object},
             İçindekiler:[{
               
            }],
              }],
              
              Hafta_Sonu_Ozel:[{
               Urun:{type: String},
               Fiyat:{type: Object},
                }],
 
                Ekstralar:[{
                 Urun:{type: String},
                 Fiyat:{type: Object},
                  }],
       
            }],
 
 });
 
 
 
 module.exports = {
   siparisValidate
 }