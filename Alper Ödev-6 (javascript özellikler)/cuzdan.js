function cuzdanss() {
    var param=prompt("Cüzdanınızda Ne Kadar Para Var ? :");
    var caklıt=prompt("Alacağınız Çikolata Ne kadar ? :");
    var kactanealırım = Math.trunc(param/caklıt);
    var nekadarımkaldı =param-kactanealırım*caklıt;
    alert(caklıt+ " TL Fiyatındaki Çikolatadan " +kactanealırım+ " Adet Alabilirsiniz" + " Geri Kalan Paranız ise " +nekadarımkaldı+ " TL'dir.");
}