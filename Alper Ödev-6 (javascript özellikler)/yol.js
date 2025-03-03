function yol() {
    var kilometre=prompt("İki Şehir arasındaki Kilometre Bilgisi Giriniz:");
    var sure=prompt("Ulaşmak İstediğiniz Süreyi Giriniz(Saat):");
    var hızı = Math.trunc(kilometre/sure);
    alert("Gideceğiniz Hız: "+hızı);
}