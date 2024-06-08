// Buat 2 program dengan promise

// No.1

const cekPassword = (sandi) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const password = 'fazztrack'
            let cek = sandi === password
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Password yang Anda Masukkan Salah!'))
            }
        }, 3000)
    })
}

cekPassword('fazztrack')
    .then(function (cek) {
        if (cek) {
            const succes = 'Login Success!'
            console.log(succes)
    }
    })
    .catch(function (Error) {
    console.log(Error)
    })

// No. 2

const cekBilanganGenap = (bilangan) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bilangan % 2 === 0) {
                resolve()
            } else {
                reject(new Error('Anda memasukkan bukan bilangan Genap!'))
            }
        }, 3000)
    })
}

cekBilanganGenap(3)
    .then(function () {
        if (true) {
            const succes = 'Bilangan Genap!'
            console.log(succes)
        }
    })
    .catch(function (Error) {
    console.log(Error)
    })