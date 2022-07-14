const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');

const separator = document.getElementById('separator');

const day_name = document.getElementById('day_name')
const date = document.getElementById('date')

const w_temp = document.getElementById('w_temp')
const w_place = document.getElementById('w_place')
const w_img = document.getElementById('w_img')
const w_urlbase = "../../assets/img/weather/"


function getDateTime(){
    fetch('../../../api/display_api.php')
    .then(response => response.json())
    .then(data => {
        hours.innerHTML = data.hours
        minutes.innerHTML = data.minutes
        day_name.innerHTML = data.day_name
        date.innerHTML = data.day + " / " + data.month + " / " + data.year
    })
}

function getWeather(){
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tvrdošín?unitGroup=metric&include=days%2Ccurrent&key=38UT3CRHKLYLJWP37LNRSKGJE&contentType=json')
    .then(response => response.json())
    .then(data => {
        w_temp.innerHTML = data.currentConditions.temp + '°'
        w_place.innerHTML = data.address
        w_img.setAttribute("src", w_urlbase + data.currentConditions.icon + ".svg");
    })
}

function getSpotify(){
    fetch('../../../api/spotify_api/index.php')
    .then(response => response.json())
    .then(data => {
        if(data == null || data.is_playing == false){
            console.log('nothing is playing')
        }else{
            var artistss = ''
            data.item.artists.forEach(function(artist){
                artistss = artist.name + ', ' + artistss
                
            })
            console.log('_ARTIST: ' + artistss.slice(0, -2))
            console.log('_NAME: ' + data.item.name)
            console.log('_IMG: ' + data.item.album.images[0].url)
            // console.log('artist: ' + data.item.artists)
        }
    })
}

getSpotify()
getWeather()
getDateTime();
// setInterval(getData, 30000)

