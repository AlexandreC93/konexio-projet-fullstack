
// const btn = document.querySelector("#btnShowData");
const express = require('express')
const app = express()
const port = 8000
 const data = require("/Users/ASF/Desktop/Konexio/konexio-projet-fullstack/api/data.json")
 

let i = 0
app.get('/all', (req, res) => {
    
    for (i=0;i <= data.length;i++){
        result = data[i].name
    }
    res.send(result)
})



app.listen(port, () => {
    console.log('Server started' + port)
})

/*

CREER UNE FONCTION 
RECUPERER LE JSON 
UNE FOIS RECUPERER AJOUTER UL 
CHAQUE LI EST UN PAYS 
LI = INFO UTILE 
AFTER LOAD APPELER LA FONCTION 

*/






// btn.addEventListener('click',getAllCountries)
