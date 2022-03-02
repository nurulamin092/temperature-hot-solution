const API_KEY = `0463c657c8e3e0bb4b70d7d49f872d33`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${city}&appid=${API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    setInnerText('icon', temperature.weather[0].icon)

    console.log(temperature);
}