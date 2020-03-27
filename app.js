const days = document.querySelector(".days");
const widge = document.querySelector('.widget');

const weatherData = {
  tempUnit: "C",
  windSpeedUnit: "m/s",
  days: [
    {
      day: "Mon",
      temp: 22,
      windDirection: "north-east",
      windSpeed: 10,
      type: "sunny"
    },
    {
      day: "Tue",
      temp: 14,
      windDirection: "north-west",
      windSpeed: 12,
      type: "rainy"
    },
    {
      day: "Wed",
      temp: 17,
      windDirection: "north-east",
      windSpeed: 14,
      type: "cloudy"
    },
    {
      day: "Thu",
      temp: 26,
      windDirection: "north-west",
      windSpeed: 6,
      type: "rainy"
    },
    {
      day: "Fri",
      temp: 12,
      windDirection: "north-east",
      windSpeed: 9,
      type: "sunny"
    },
    {
      day: "Sat",
      temp: 29,
      windDirection: "north-east",
      windSpeed: 15,
      type: "cloudy"
    },
    {
      day: "Sun",
      temp: 15,
      windDirection: "north-west",
      windSpeed: 12,
      type: "cloudy"
    }
  ]
};

for(let i = 0; i < weatherData.days.length; i++) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    let time = null;
    if(weatherData.days[i].type === 'sunny') {
        time = 'day.svg'
    }
    if(weatherData.days[i].type === 'cloudy') {
        time = 'cloudy.svg'
    }
    if(weatherData.days[i].type === 'rainy') {
        time = 'rain.svg'
    }

    cardDiv.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${weatherData.days[i].day}</h5>
            <img src="./img/${time}">
            <span class="text-muted">${weatherData.days[i].type}</span>
            <p class="card-text text-muted">${weatherData.days[i].temp} ${weatherData.tempUnit}</p>
        </div>
    `;

    let wind = null;
    if(weatherData.days[i].windDirection === 'north-west') {
        wind = 'fa fa-long-arrow-left'
    }
    if(weatherData.days[i].windDirection === 'north-east') {
        wind = 'fa fa-long-arrow-right'
    }

    cardDiv.addEventListener('click', ()=> {
        widge.innerHTML = `
            <h2 class="card-title">${weatherData.days[i].day}</h2>
            <img src="./img/${time}">
            <p>Wind Speed ${weatherData.days[i].windSpeed}</p>
            <i class="${wind}" style="font-size:48px"></i>
        `;
    });

    days.appendChild(cardDiv)
}

