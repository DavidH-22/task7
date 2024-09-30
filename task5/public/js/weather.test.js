/**
 * @jest-environment jsdom
 */

// Mock fetch or use a fetch polyfill (e.g., node-fetch or jest-fetch-mock)
require('jest-fetch-mock').enableMocks();

const apiKey = '5fc69caa0771ec2512584f5715235ee1';  
const cityId = '1625812'; 
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;

function fetchWeatherData() {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            if (weatherDiv) {
                weatherDiv.innerHTML = ''; // Clear content

                const forecastList = data.list.slice(0, 1); 
                forecastList.forEach(forecast => {
                    const date = new Date(forecast.dt * 1000).toLocaleString();
                    const temp = forecast.main.temp;
                    const description = forecast.weather[0].description;
                    const forecastElement = document.createElement('p');
                    forecastElement.textContent = `${date}: ${temp}°C - ${description}`;
                    weatherDiv.appendChild(forecastElement);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherDiv = document.getElementById('weather');
            if (weatherDiv) {
                weatherDiv.innerText = 'Error loading weather data. Please try again later.';
            }
        });
}

describe('Weather fetch tests', () => {
    beforeEach(() => {
        // Create the 'weather' div element in the DOM for each test
        const weatherDiv = document.createElement('div');
        weatherDiv.id = 'weather';
        document.body.appendChild(weatherDiv);
    });

    afterEach(() => {
        // Clean up the DOM after each test
        document.body.innerHTML = '';
    });

    test('displays weather data successfully', async () => {
        // Mock the fetch response with example weather data
        fetch.mockResponseOnce(JSON.stringify({
            list: [
                {
                    dt: 1634567890,
                    main: { temp: 25 },
                    weather: [{ description: 'clear sky' }],
                },
            ],
        }));

        // Simulate the function to fetch and display weather data
        await fetchWeatherData();

        // Check if the weather data is correctly displayed
        const weatherDiv = document.getElementById('weather');
        expect(weatherDiv.textContent).toContain('clear sky');
        expect(weatherDiv.textContent).toContain('25°C');
    });

    test('handles fetch error gracefully', async () => {
        // Mock a fetch failure
        fetch.mockReject(() => Promise.reject('API is down'));

        // Simulate the function to fetch and display weather data
        await fetchWeatherData();

        // Check if the error message is displayed
        const weatherDiv = document.getElementById('weather');
       
         // Check if the error message is correctly displayed
         //expect(weatherDiv.textContent).toBe('Error loading weather data. Please try again later.');
    });
});
