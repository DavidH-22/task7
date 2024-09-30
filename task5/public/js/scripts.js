

//mengatur navbar untuk tahu sedang berada di section mana
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.navbar ul li a');
    
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            var currentId = section.getAttribute('id');
            
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === currentId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

//membuat tampilan menjadi darkmode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.navbar ul li a').forEach(function(element) {
        element.classList.toggle('dark-mode');
    });
    document.querySelector('.highlight-item').classList.toggle('dark-mode');
    document.querySelector('.feature-item').classList.toggle('dark-mode');
    document.querySelector('p').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.contact-info').classList.toggle('dark-mode');
    document.querySelector('.about-section').classList.toggle('dark-mode');
    document.querySelectorAll('input[type="text"], textarea[type="pesan"], .message-box, select[id="provinsi"]').forEach(function(element) {
        element.classList.toggle('dark-mode');
    });


    document.querySelector('input[type="submit"]').classList.toggle('dark-mode');
    document.getElementById('message-info').classList.toggle('dark-mode');
});
//mengecek data kota yang di input apakah tersedia atau tidak
function checkAvailability() {
    const kota = document.getElementById('nama-kota').value;
    const resultDiv = document.getElementById('result');

    if (kota === "") {
        resultDiv.textContent = "please input your city.";
        resultDiv.style.color = "red";
    } else {
        // Simulate an availability check
        if (kota=== "surakarta") {
            resultDiv.textContent = "IndoMedia avaible at your area!";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Sorry, IndoMedia not avaible in your area.";
            resultDiv.style.color = "red";
        }
    }
}
//mengirimkan data ke backend jika sudah lolos validasi
document.getElementById("form").addEventListener("submit", function() {


    // mengosongkan text area
    const messageElement = document.getElementById("message"); // Use messageElement consistently
    messageElement.textContent = "";
    messageElement.className = "";

    // mengambil data
    const nameD = document.getElementById("namaD").value.trim();
    const namaB = document.getElementById("namaB").value.trim();
    const notelp = document.getElementById("notelp").value.trim();
 

    // memvalidasi data bagian front end
    if (nameD == "" || namaB == "" || notelp == "" ) {
        messageElement.textContent = "Please fill in all fields.";
        messageElement.className = "error";
    }  else if (!validatePhone(notelp)) {
        messageElement.textContent = "Please enter a valid phone number.";
        messageElement.className = "error";
    } else {
        messageElement.textContent = `Thank you, your data have been submitted successfully.`;
        messageElement.className = "success";

       
    }
});

//validasi penulisan nomor telepon
function validatePhone(notelp) {
    const phonePattern = /^[0-9]{10,15}$/; // Adjust pattern according to your needs
    return phonePattern.test(notelp);
}

//api untuk menampilkan cuaca
const apiKey = '5fc69caa0771ec2512584f5715235ee1';  
    const cityId = '1625812'; 
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = '';

            const forecastList = data.list.slice(0, 1); 
            forecastList.forEach(forecast => {
                const date = new Date(forecast.dt * 1000).toLocaleString();
                const temp = forecast.main.temp;
                const description = forecast.weather[0].description;
                const forecastElement = document.createElement('p');
                forecastElement.textContent = `${date}: ${temp}°C - ${description}`;
                weatherDiv.appendChild(forecastElement);
            });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather').innerText = 'Error loading weather data. Please try again later.';
        });

       