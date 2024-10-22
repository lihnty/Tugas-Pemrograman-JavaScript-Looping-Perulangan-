// tugas 1

let nilaiAwal = 3;
let nilaiAkhir = 7;
let hasil = "";

for (let i = nilaiAwal; i <= nilaiAkhir; i++) {
  hasil += i + " "; 
}
console.log(hasil); 

// tugas 2

let angka = "";

for (let i = 1; i <= 9; i++) {
  if (i % 2 === 0) {
    angka += "x "; 
  } else {
    angka += i + " "; 
  }
}
console.log(angka);

// tugas 3

let size = parseInt(prompt("Masukkan Angka:"));
let kotak = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    kotak += "*";
  }
  kotak += "\n";
}

console.log(kotak);

// tugas 4
let limit = parseInt(prompt("Masukkan angka:"));


for (let i = 1; i <= limit; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Pondok");
    } else if (i % 5 === 0) {
        console.log("Informatika");
    } else {
        console.log(i);
    }
}