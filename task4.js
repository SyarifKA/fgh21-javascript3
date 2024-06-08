// Program FAZZFOOD

const FazzFood = function (harga, kodePromo, inputJarak, pajak) {
let biayaAntar = 5000
let jarak = 2
let nilaiPajak = 0
let potongan = 0
let selisihJarak = 0

// Menampilkan Harga
console.log('Harga : '+harga)

// Perhitungan Promo
if (kodePromo === 'FAZZFOOD50') {
    if (harga >= 50000) {
        potongan = harga * 0.5
        if (potongan > 50000) {
            potongan = 50000
        }
    }
    
} else if (kodePromo === 'DITRAKTIR60') {
    if (harga >= 25000) {
        potongan = harga * 0.6
        if (potongan > 30000) {
            potongan = 30000
        }
    }
}

console.log('Potongan : '+potongan)

// Perhitungan pajak
if (pajak === true) {
    nilaiPajak = harga*0.05
}
console.log('Pajak : '+nilaiPajak)

// Perhitungan Biaya Antar
if (inputJarak < jarak) {
    biayaAntar = biayaAntar
} else if (inputJarak > jarak) {
    selisihJarak = inputJarak - jarak
    biayaAntar = biayaAntar + (selisihJarak*3000)
}
console.log('Biaya Antar : '+biayaAntar)

// Perhitungan Subtotal
let subTotal = (harga + biayaAntar + nilaiPajak) - potongan

console.log('SubTotal : '+subTotal)
}

FazzFood(75000, 'FAZZFOOD50', 5, true)