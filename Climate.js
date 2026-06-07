async function control() {

    const city = document.querySelector("#city").value.trim();

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // shortcuts (clean code)
        const area = data.nearest_area[0];
        const current = data.current_condition[0];
        const today = data.weather[0];
        const astro = today.astronomy[0];

        // UI updates (clean & readable)
        document.querySelector("#location").innerText = area.areaName[0].value;
        document.querySelector("#country").innerText = area.country[0].value;

        document.querySelector("#temp").innerText = current.temp_C + "°C";
        document.querySelector("#feels").innerText = current.FeelsLikeC + "°C";

        document.querySelector("#condition").innerText = current.weatherDesc[0].value;
        document.querySelector("#wind").innerText = current.windspeedKmph + " km/h";

        document.querySelector("#max").innerText = today.maxtempC + "°C";
        document.querySelector("#min").innerText = today.mintempC + "°C";

        document.querySelector("#sunrise").innerText = astro.sunrise;
        document.querySelector("#sunset").innerText = astro.sunset;

    } catch (error) {
        console.error(error);
        alert("Weather data fetch failed. Please try again.");
    }
}


 async function control2() {

    let url2 = `https://wttr.in/Lahore?format=j1`;
    const response = await fetch(url2);
    const data1 = await response.json();

    let Show1 = document.querySelector("#Show1");

    let msg1 = document.querySelector("#msg1");
    msg1.style.display = "block";
    msg1.innerHTML = "Tomorrow’s weather forecast is ready for you...";
    // Day 1
for (let i = 0; i < 6; i++) {

    let time = String(data1.weather[1].hourly[i].time).padStart(4, '0');

    Show1.innerHTML += `
    <div class="weather-card">
        <h3>${time.slice(0,2)}:${time.slice(2,4)}</h3>

        <p>DewPoint: ${data1.weather[1].hourly[i].DewPointC}</p>
        <p>Temp: ${data1.weather[1].hourly[i].tempC}°C</p>
        <p>Feels Like: ${data1.weather[1].hourly[i].FeelsLikeC}°C</p>
        <p>Condition: ${data1.weather[1].hourly[i].weatherDesc[0].value}</p>
        <p>Humidity: ${data1.weather[1].hourly[i].humidity}%</p>
        <p>Wind: ${data1.weather[1].hourly[i].windspeedKmph} km/h</p>
        <p>Rain Chance: ${data1.weather[1].hourly[i].chanceofrain}%</p>
    </div>
    `;
}
 }

async function control3() {

    let url2 = `https://wttr.in/Lahore?format=j1`;
    const response = await fetch(url2);
    const data1 = await response.json();
    let Show2 = document.querySelector("#Show2");
    let msg2 = document.querySelector("#msg2");
     msg2.style.display = "block";
    msg2.innerHTML = "Extended forecast for after tomorrow is loading...";
    // Day 2
    for(let j = 0; j < 6; j++) {
       
        let time = String(data1.weather[2].hourly[j].time).padStart(4, '0');

Show2.innerHTML += `
<div class="weather-card">
    <h3>${time.slice(0,2)}:${time.slice(2,4)}</h3>
    
    <p>DewPoint: ${data1.weather[2].hourly[j].DewPointC}</p>
    <p>Temp: ${data1.weather[2].hourly[j].tempC}°C</p>
    <p>Feels: ${data1.weather[2].hourly[j].FeelsLikeC}°C</p>
    <p>Condition: ${data1.weather[2].hourly[j].weatherDesc[0].value}</p>
    <p>Humidity: ${data1.weather[2].hourly[j].humidity}%</p>
    <p>Wind: ${data1.weather[2].hourly[j].windspeedKmph} km/h</p>
    <p>Rain Chance: ${data1.weather[2].hourly[j].chanceofrain}%</p>
</div>
`;
    }
}

//control2();


