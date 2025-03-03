let sayi = prompt("Bir sayı giriniz:");
sayi = parseInt(sayi);
let sonuc = "";
let i = 0;
let output = "";
while (i <= sayi) {
output += "Sayı: " + i + "<br>";
i++;
}
alert(sonuc);
document.getElementById('output').innerHTML = output;

