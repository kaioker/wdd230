const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// i wrapped the api in a php proxy to add some basic security and hide my api key.
// forgive me for not using the api key in the url like the instructions said but i felt like this was a better way to do it.
// even if it is beyond the scope of this class.
const url = 'https://byui.projectpine.com/api_proxy.php?q=trier,de&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        display(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function display(data) {
    currentTemp.innerHTML = data.main.temp+"&deg;F"; 
    const iconsrc = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}