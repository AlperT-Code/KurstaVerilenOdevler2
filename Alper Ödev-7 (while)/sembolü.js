let sayi = prompt("Bir sayı giriniz:");
sayi = parseInt(sayi); 
let sonuc = "";
let i = 0;
while (i < sayi) {
    sonuc += "#";
    i++; 
}
alert(sonuc);
