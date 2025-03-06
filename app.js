//Document write ile çıktı almak.
document.writeln("Hello!<br>");
document.write("Welcome to my page.");
//PopUp ile çıktı almak.
alert("miuw");

/*
Değişken tanımlama;
var -> function scope [ram bellekte fazla yer kaplar]
Let - const -> block scope özelliği taşır. (Fonksiyon içerisine oluşturulmuş)
if block altındaki değişkeni let ve const ile oluşturursak, fonksiyon içinde
çağıramayız!
 const sabit, let değiştirilebilir
*/

/*
VERİ TİPLERİ:
1-String("cat", "2001")
2-Number(0,1,2,3,4,5,6,7,8,9)
3-Boolean(1-0)
4-Null
5-Undefined
6-Object
7-Function
*/

//console.log(typeof veri); veri adlı değişkenin tipini bulma

//object tipinde veri oluşturma (burada admin object tipinde bir veri)
let admin = {
    Ad: "Beyza Nur",
    Soyad: "Keskin",
    Yas: 23
}

console.log(admin);
// === operatörü hem veri tipine hem de içindeki değerlerin eşit olup olmamasına bakar 

/*----------NOT ORTALAMASI BULMA----------

let vize = Number(prompt("Vize notunu giriniz: "));
let final = Number(prompt("Final notunu giriniz:"));

let ortalama = vize*0.4 + final*0.6;

if(ortalama>45){
    alert("Dersi geçtiniz! Ortalama: " + ortalama );
}

else{
    alert("Dersten kaldiniz! Ortalama: " + ortalama);
}  
*/

/*----------YAKIT İSTASYONU----------

let benzin = 45.31, dizel = 46.23, lpg = 26.25;
const newline = "\r\n";

const bilgimetni = "1-Dizel" + newline
+ "2-Benzin" + newline
+ "3-LPG" + newline
+ "Lütfen yakıt türünü seçiniz!"

let yakitTipi = prompt(bilgimetni);
let yakitLitresi = Number(prompt("Lütfen alacağınız litre miktarını giriniz!"));
let müşteriBakiye = Number(prompt("Lütfen ödeme yapacağınız tutarı giriniz!"));

if(yakitTipi=="1"){
    //Dizel
    let ödenecekTutar = dizel*yakitLitresi;
    if(ödenecekTutar<müşteriBakiye){
        //bakiye yeterli
        alert("Yakıt alma işlemi başarılı!" + newline
            + "Kalan bakiyeniz: " + (müşteriBakiye-ödenecekTutar)
        )
    }
    else{
        //bakiye yetersiz
        alert("Ödeme işlemi gerçekleştirilemiyor!" + newline
             + "Ödenecek tutar: " + ödenecekTutar + newline
             + "Bakiye: " + müşteriBakiye + newline 
             + "Eksik tutar: " + (ödenecekTutar-müşteriBakiye)
        );
    }
}

else if(yakitTipi=="2"){
    //Benzin
    let ödenecekTutar = benzin*yakitLitresi;
    if(ödenecekTutar<müşteriBakiye){
        //bakiye yeterli
        alert("Yakıt alma işlemi başarılı!" + newline
            + "Kalan bakiyeniz: " + (müşteriBakiye-ödenecekTutar)
        )
    }
    else{
        //bakiye yetersiz
        alert("Ödeme işlemi gerçekleştirilemiyor!" + newline
             + "Ödenecek tutar: " + ödenecekTutar + newline
             + "Bakiye: " + müşteriBakiye + newline 
             + "Eksik tutar: " + (ödenecekTutar-müşteriBakiye)
        );
    }
}

else if(yakitTipi=="3"){
    //LPG
    let ödenecekTutar = lpg*yakitLitresi;
    if(ödenecekTutar<müşteriBakiye){
        //bakiye yeterli
        alert("Yakıt alma işlemi başarılı!" + newline
            + "Kalan bakiyeniz: " + (müşteriBakiye-ödenecekTutar)
        )
    }
    else{
        //bakiye yetersiz
        alert("Ödeme işlemi gerçekleştirilemiyor!" + newline
             + "Ödenecek tutar: " + ödenecekTutar + newline
             + "Bakiye: " + müşteriBakiye + newline 
             + "Eksik tutar: " + (ödenecekTutar-müşteriBakiye)
        );
    }
}

else{
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}
*/

/*----------HAFTANIN GÜNLERİ----------

let newline = "\r\n";
let haftanınGünleri = "1-Pazartesi" + newline
           + "2-Salı" + newline
           + "3-Çarşamba" + newline
           + "4-Perşembe" + newline
           + "5-Cuma" + newline
           + "6-Cumartesi" + newline
           + "7-Pazar" + newline
           + "Lütfen bir gün seçiniz!:";

let deger = prompt(haftanınGünleri);

switch (deger) {
    case "1":
        console.log("Pazartesi Günü");
        break;
    case "2":
        console.log("Salı Günü");
        break;
    case "3":
        console.log("Çarşamba Günü");
        break;
    case "4":
        console.log("Perşembe Günü");
        break;
    case "5":
        console.log("Cuma Günü");
        break;
    case "6":
        console.log("Cumartesi Günü");
        break;
    case "7":
        console.log("Pazar Günü");
        break;
    default:
        console.log("Geçersiz bir seçim yaptınız!");
}
*/        

//ATM UYGULAMASI

const newline = "\r\n";
let bakiye = 1000;

let ekran = "LÜTFEN GERÇEKLEŞTİRMEK İSTEDİĞİNİZ İŞLEMİ TUŞLAYINIZ" + newline
        + "1-Bakiye Sorgulama" + newline
        + "2-Para Çekme" + newline
        + "3-Para Yatırma" + newline
        + "4-Çıkış";

let seçim = prompt(ekran);        
switch(seçim){
    case "1":
    alert("Bakiyeniz: " + bakiye);
    break;

    case "2":
    let cekilenTutar = Number(prompt("Lütfen çekmek istediğiniz para miktarını giriniz: "));
    if(cekilenTutar<bakiye){
        yeniBakiye = bakiye-cekilenTutar;
        alert("İşlem Başarılı!" + newline
            + "Çekilen Tutar: " + cekilenTutar + newline
            + "Kalan Bakiye: " + (yeniBakiye)
        );
    }
    else{
        alert("İşlem Başarısız!" + " "
            + "Bakiyeniz Yetersiz!" + newline
            + "Mevcut Bakiye: " + bakiye
        );
    }
    break;

    case "3":
    let yatırılanTutar = Number(prompt("Lütfen yatırmak istediğiniz para miktarını giriniz: "));
    yeniBakiye = bakiye + yatırılanTutar;
    alert("İşlem Başarılı!" + newline
         +"Güncel Bakiye: " + yeniBakiye
    );
    break;

    case "4":
        alert("Sistemden ç ıkış yapılıyor..." );
        console.log("Çıkış yapıldı.");
    break;
    
    default:
        console.log("1-4 arasında bir değer girilmeli!");
    break;    
}        