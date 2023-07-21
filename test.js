/**
 * Nama : Mochammad Shaffa Prawiranegara
 * NPM  : 2006528105
 * Membuat pola dinamis berdasarkan input n.
 * @param {number} n - Jumlah baris dan kolom pada pola yang akan dibuat.
 * @returns {string} - Pola yang telah dibuat dalam bentuk string.
 */
polaDinamik = (n) => {
  console.log(`Input: ${n}`);
  console.log(`Output:`);
  let pola = "";

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      pola += "*";

      for (let j = 1; j < n; j++) {
        if (j % 2 === 1) {
          pola += j;
        } else {
          pola += "*";
        }
      }
    } else {
      for (let j = 0; j < n; j++) {
        if (j % 2 === 0) {
          pola += j;
        } else {
          pola += "*";
        }
      }
    }

    pola += "\n";
  }

  return pola;
};

// periksa sesuai contoh soal
console.log(polaDinamik(5));
console.log(polaDinamik(4));
