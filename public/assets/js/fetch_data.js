const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');

const separator = document.getElementById('separator');

const day_name = document.getElementById('day_name')
const date = document.getElementById('date')

const w_temp = document.getElementById('w_temp')
const w_place = document.getElementById('w_place')
const w_img = document.getElementById('w_img')
const w_urlbase = "../../assets/img/weather/"

const s_image = document.getElementById('thumbnail_img')
const s_artist = document.getElementById('artistname')
const s_track = document.getElementById('track_name')
const s_element = document.getElementById('spotify_element')
const w_element = document.getElementById('weather_element')

var manual_hide = false

function getDateTime(){
    const d = new Date();

    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hour = d.getHours();
    let minutess = d.getMinutes();

    if (day < 10) {day = "0" + day}
    if (month < 10) {month = "0" + month}
    if (hour < 10) {hour = "0" + hour}
    if (minutess < 10) {minutess = "0" + minutess}
    
    let day2 = d.getDay();


    hours.innerHTML = hour
    minutes.innerHTML = minutess
    // day_name.innerHTML = data.day_name
    date.innerHTML = day + " / " + month + " / " + year
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
            s_element.style.animation = "s_hide 2s ease forwards"
        }else{
            var artistss = ''
            var songname = ''
            data.item.artists.forEach(function(artist){
                artistss = artist.name + ', ' + artistss
                
            })
            if(data.item.name.length > 40){
                songname = data.item.name.substring(0, 40) + '...'
            }else{
                songname = data.item.name
            }
            s_image.setAttribute("src", data.item.album.images[0].url)
            s_artist.innerHTML = artistss.slice(0, -2)
            s_track.innerHTML = songname
            if(!manual_hide){
                s_element.style.animation = "s_show 2s ease forwards"
            }
            // console.log('_ARTIST: ' + artistss.slice(0, -2))
            // console.log('_NAME: ' + data.item.name)
            // console.log('_IMG: ' + data.item.album.images[0].url)
            // console.log('artist: ' + data.item.artists)
        }
    })
}

function manualHide(){
    if(!manual_hide){
        w_element.style.animation = "w_show 2s ease forwards"
    }else{
        w_element.style.animation = "w_hide 2s ease forwards"
        s_element.style.animation = "s_hide 2s ease forwards"
    }
}

document.onkeypress = function (e) {
    if(e.keyCode == 32){
        if(manual_hide){
            manual_hide = false
            manualHide()
        }else{
            manual_hide = true
            manualHide()
        }
    }
    // use e.keyCode
};

getSpotify()
setInterval(getSpotify, 1000)

getWeather()
setInterval(getWeather, 1000)

getDateTime();
setInterval(getDateTime, 1000)

