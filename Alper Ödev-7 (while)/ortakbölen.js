let sayi1 = parseInt(prompt("Birinci sayıyı girin:"));
let sayi2 = parseInt(prompt("İkinci sayıyı girin:"));

let ortakBolenler = [];
let i = 1;

while (i <= Math.min(sayi1, sayi2)) {
    if (sayi1 % i === 0 && sayi2 % i === 0) {
        ortakBolenler.push(i);
    }
    i++;
}

alert("Ortak bölenler: " + ortakBolenler.join(", "));