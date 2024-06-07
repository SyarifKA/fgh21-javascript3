const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// a. then & catch
cekHariKerja('senin')
    .then(function (cek) {
        if (cek) {
            const succes = 'Hari Kerja'
            console.log(succes)
    }
    })
    .catch(function (Error) {
    console.log(Error)
    })
// penjelasan : Menangkap hasil sukses atau kesalahan dari operasi yang membutuhkan waktu untuk menyelesaikan.

// b. try & catch
async function hariKerja() {
    try {
        const result = await cekHariKerja('senin')
       console.log(result)
    } catch (Error) {
        console.log(Error)
    }
}
hariKerja()
// penjelasan : Menangkap kesalahan yang terjadi saat kode dieksekusi.