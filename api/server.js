
// const btn = document.querySelector("#btnShowData");
const express = require('express')
const app = express()
const port = 8000
const countries = require("./data.json")
let cors = require('cors')

//  app.get('/all', (req, res) => {


//     for (let i = 0 ; i <= poele.length ; i++ ) {

//         casserolle.push(poele[i].name)
//         // tableau.push(data[i].region)
//         // tableau.push(data[i].capital)
//     }

//     res.send(casserolle)
// })


app.get("/all", (req, res) => {
    let countriesNames = [];
    for (let i = 0; i < countries.length; i++) {
        countriesNames.push(countries[i].name);
        countriesNames.push(countries[i].region)
        countriesNames.push(countries[i].capital)
    }
    res.send(countriesNames);
});



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
