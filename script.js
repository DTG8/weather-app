document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'c63e628ffbcaf8cb671797db6c5a0cb7'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weather-result');
            if (data.cod === 200) {
                const temperature = (data.main.temp - 273.15).toFixed(2);
                weatherResult.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            } else {
                weatherResult.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
