//Created with House Gardener
//key= 62e14fb430cf6b4be5cad32141764cf3
  let simpleWeatherApi = {
    button: document.querySelector("button"),
    fetchTemp: () => {
    const input = document.querySelector("input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=62e14fb430cf6b4be5cad32141764cf3`)
        .then(res => res.json())
        .then(jsonRes => {
          document.querySelector("h2").innerHTML = (`Current weather in ${jsonRes.name}`);
          document.getElementById("temp").innerHTML = (`Temp: ${jsonRes.main.temp}`);
          document.getElementById("feel").textContent = (`Feels Like: ${jsonRes.main.feels_like}`);
          document.getElementById("other").textContent = (`Skies: ${jsonRes.weather[0].description} || Humidity: ${jsonRes.main.humidity}`);
        })
        .catch(err => {
          console.log(`error ${err}`);
          alert("sorry, there are no results for your search");
        })
      }
    }
  simpleWeatherApi.button.addEventListener('click', simpleWeatherApi.fetchTemp);
