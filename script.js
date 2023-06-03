function hitung() {
  var deret = document.getElementById("deret").value;
  var batas = document.getElementById("batas").value;
  var suku_ke = document.getElementById("suku_ke").value;
  var sum = 0;
  var deret_str = "";
  var suku_n = 0;

  if (deret === "ganjil") {
    /* ini pernyataan if yang digunakan untuk memeriksa apakah input jenis deret yang diberikan oleh pengguna adalah "ganjil", jika benar maka program akan menjalankan */
    for (var i = 1; i <= batas; i++) {
      /* loop 'for' yang akan mengulang sebanyak 'batas' kali, dimulai dari 1 hingga 'batas'. variabel 'i' digunakan sebagai interator loop. setiap iterasi program akan menjalankan blok kode di daldm kurung kurawal */
      var deret_ganjil =
        2 * i -
        1; /* syntax untuk menghitung bilangan ganjil ke i pada deret ganjil, yaitu dengan cara mengalikan 'i' dengan 2 dan mengurangi hasilnya dengan 1. hasil perhitungan tersebut disimpan dalam variabel 'deret_ganjil' */
      deret_str +=
        deret_ganjil +
        " "; /* syntax untuk menambahkan 'deret_genap' ke variabel 'deret_str' yang berisi deret bilangan genap, diikuti dengan spasi */
      sum +=
        deret_ganjil; /*Pernyataan ini digunakan untuk mengakumulasi atau menjumlahkan nilai deret_ganjil ke dalam variabel sum. +=*/
      if (i == suku_ke) {
        /*Pernyataan ini menggunakan struktur pengkondisian if untuk memeriksa apakah nilai i sama dengan nilai suku_ke. Jika kondisi ini terpenuhi, maka pernyataan di dalam blok kurung {} akan dieksekusi.*/
        suku_n = deret_ganjil;
      }
    }
    localStorage.setItem("deretGanjil", JSON.stringify(deret_str));
    localStorage.setItem("jumlahDeret", JSON.stringify(sum));
    localStorage.setItem("sukuke", JSON.stringify(suku_ke));
    localStorage.setItem("sukun", JSON.stringify(suku_n));
    var hasilTerakhir = localStorage.getItem("hasilDeret");
    var hasilTerakhir = localStorage.getItem("jumlahDeret");
    var hasilTerakhir = localStorage.getItem("sukuke");
    var hasilTerakhir = localStorage.getItem("sukun");
    document.getElementById("hasil").innerHTML =
      "Deret bilangan ganjil: " +
      deret_str +
      "<br>Jumlah deret: " +
      sum +
      "<br>Suku ke-" +
      suku_ke +
      ": " +
      suku_n;
    console.log(deret_str);
    console.log(sum);
    console.log(suku_ke);
    console.log(suku_n);
  } else if (deret === "genap") {
    /* ini pernyataan if yang digunakan untuk memeriksa apakah input jenis deret yang diberikan oleh pengguna adalah "genap", jika benar maka program akan menjalankan */
    for (var i = 1; i <= batas; i++) {
      /* loop 'for' yang akan mengulang sebanyak 'batas' kali, dimulai dari 1 hingga 'batas'. variabel 'i' digunakan sebagai interator loop. setiap iterasi program akan menjalankan blok kode di daldm kurung kurawal */
      var deret_genap =
        2 *
        i; /* syntax untuk menghitung bilangan genap ke i pada deret ganjil, yaitu dengan cara mengalikan 'i' dengan 2. hasil perhitungan tersebut disimpan dalam variabel 'deret_genap' */
      deret_str +=
        deret_genap +
        " "; /* syntax untuk menambahkan 'deret_genap' ke variabel 'deret_str' yang berisi deret bilangan genap, diikuti dengan spasi */
      sum +=
        deret_genap; /*Pernyataan ini digunakan untuk mengakumulasi atau menjumlahkan nilai deret_genap ke dalam variabel sum. += */
      if (i == suku_ke) {
        /*Pernyataan ini menggunakan struktur pengkondisian if untuk memeriksa apakah nilai i sama dengan nilai suku_ke. Jika kondisi ini terpenuhi, maka pernyataan di dalam blok kurung {} akan dieksekusi.*/
        suku_n = deret_genap;
      }
    }

    var hasilTerakhir = localStorage.getItem("hasilDeret");
    console.log(hasilTerakhir);

    document.getElementById("hasil").innerHTML =
      "Deret bilangan genap: " +
      deret_str +
      "<br>Jumlah deret: " +
      sum +
      "<br>Suku ke-" +
      suku_ke +
      ": " +
      suku_n;
  }
}

function reset() {
  // fungsi untuk mereset
  document.getElementById("deret").selectedIndex = 0;
  document.getElementById("batas").value = "";
  document.getElementById("suku_ke").value = "";
  document.getElementById("hasil").innerHTML = "";
}
