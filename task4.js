// Mengambil data dari API

const endPoint = 'https://jsonplaceholder.typicode.com/users'

    async function getName(endPoint) {
        const response = await fetch(endPoint);
        let result=[]
        let names = await response.json()
        result=names.map((data)=>data.name)
        console.log(result);
}
      
getName(endPoint)
