function tersiniGoster() {
    const sayi = document.getElementById('sayiInput').value;

    if (sayi.length === 3) {
        const tersi = sayi.split('').reverse().join('');
        document.getElementById('sonuc').innerText = `Tersi: ${tersi}`;
    } else {
        document.getElementById('sonuc').innerText = "Lütfen 3 basamaklı bir sayı girin.";
    }
}