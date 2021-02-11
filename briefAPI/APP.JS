const APIKEY = `45c8e2283fc824689f543f0e7e3d2da0`;
/*Appel à l'Api openweather */
let APIcall =function (ville) {
let url=`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}&units=metric&lang=fr`;
fetch(url)
.then(response => response.json()
.then((data) =>{ console.log(data);

document.querySelector(`#city`).innerHTML= data.name +'<br>' + data.weather['0'].description ;
document.querySelector(`#temp`).innerHTML=  "<i class='fas fa-temperature-low mb-3 fa-2x'></i>" +  data.main.temp  + '°C'  +'<br>'+ data.main.temp_min  + '°'+'/'+  data.main.temp_max + '°'

document.querySelector(`#humidity`).innerHTML= "<i class='fas fa-tint mb-3 fa-2x'></i>" + data.main.humidity + '%';
document.querySelector(`#wind`).innerHTML= "<i class='fas fa-wind mb-3 fa-2x'></i>"+  data.wind.speed +' km/h';
})
)
.catch((err) => console.log('Erreur:'+ err));
};
/* Ecouteur d'événement */
document.querySelector('form').addEventListener('input',function(e){
e.preventDefault();

let localisation = document.querySelector('#input-city').value;
APIcall(localisation);
});
/* Appel par défaut*/
APIcall('korba');