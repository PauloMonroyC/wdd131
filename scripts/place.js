document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

const temperature = 6.5; // °C
const windSpeed = 13; // km/h 

function calculateWindChill(temp,wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

document.addEventListener('DOMContentLoaded', () => {
    const windChillElement = document.getElementById('windChillValue');

    let windChillDisplay;

    if (temperature <= 10 && windSpeed > 4.8) {windChillDisplay = `${calculateWindChill(temperature, windSpeed)}°C` ;} 
        else {windChillDisplay = 'N/A';}
        windChillElement.textContent = windChillDisplay;
}); 