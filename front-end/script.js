let url = 'file:///C:/Users/ASF/Desktop/Konexio/konexio-projet-fullstack/front-end/index.html'


let btn = document.querySelector('#btnShowData');

btn.addEventListener('click',getAllCountries)

function getAllCountries(){
    fetch(url)

    .then(function(){
        
    })
    
}

