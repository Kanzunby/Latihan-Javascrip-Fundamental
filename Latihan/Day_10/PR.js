/**
 *
 * Convert day_8/1.pr_result_kanzun.html to use array of object
 * Inventory apps new version
 */

var produk = [
  { nama: "Buku", harga: 5000, stok: 100 },
  { nama: "Pulpen", harga: 3000, stok: 100 },
  { nama: "Pensil", harga: 2000, stok: 100 },
  { nama: "Stip", harga: 1000, stok: 100 },
];

function lihatBarang() {
  var lihatBarang = "Daftar barang yang tersedia:\n\n";
  for (i = 0; i < produk.length; i++)
    lihatBarang += `${i + 1}. ${produk[i].nama}, harga ${
      produk[i].harga
    }, jumlah stok ${produk[i].stok}\n`;
  return lihatBarang;
}

function tambahBarang(nama, harga, stok) {
  var produkUpdate = produk;
  var produkTambah = { nama: nama, harga: harga, stok: stok };
  produkUpdate.push(produkTambah);
  return lihatBarang();
}

function updateStok(nomerBarang, stok) {
  var produkUpdate = produk; // daftar produk baru
  produkUpdate[nomerBarang - 1].stok += stok;
  return lihatBarang();
}

function hapusBarang(nomerBarang) {
  var produkUpdate = produk;
  produkUpdate.splice(nomerBarang - 1, 1);
  return lihatBarang();
}

console.log(lihatBarang());
console.log(tambahBarang("Penggasris", 3000, 150));
console.log(tambahBarang("Tipe-X", 5000, 120));
console.log(tambahBarang("Spidol", 4000, 100));

console.log(updateStok(3, 70));
console.log(updateStok(4, 30));

console.log(hapusBarang(5));
console.log(hapusBarang(6));
