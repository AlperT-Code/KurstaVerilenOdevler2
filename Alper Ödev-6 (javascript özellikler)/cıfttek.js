document.getElementById('kontrolButon').addEventListener('click', function() {
    const sayi = Number(document.getElementById('sayiInput').value);
    const sonuc = (sayi % 2 === 0) ? `${sayi} sayısı çifttir.` : `${sayi} sayısı tektir.`;
    document.getElementById('sonuc').innerText = sonuc;
});
