// Mengambil data dari API

// const endPoint = 'https://jsonplaceholder.typicode.com/users'

//     async function getName(endPoint) {
//         const response = await fetch(endPoint);
//         let result=[]
//         let names = await response.json()
//         result=names.map((data)=>data.name)
//         console.log(result);
// }
      
// getName(endPoint)

// cara lain
const endPoint = fetch('https://jsonplaceholder.typicode.com/users')

endPoint.then(res => {
    res.json().then(data => {
        const names = data.map(people => people.name)
        for (let i = 0; i < names.length; i++){
            console.log(names[i])
        }
    })
})