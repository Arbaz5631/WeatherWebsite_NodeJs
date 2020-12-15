const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const city_output = document.getElementById("city_output");
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const full = document.getElementById('full');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = city_name.value;
    if (cityVal === "") {
        city_output.innerText = `Please write the name of city before search `;
        temp_status.innerHTML="";
        full.innerHTML="";
    }
    else {
        try {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=0e12ad84dbe4bcdf1f980898cfc713b6`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            let num = ((arrData[0].main.temp) - 273.15);
            num = num.toFixed(0);
            temp.innerText = num;
            let tempMood = arrData[0].weather[0].main;
            
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></>";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></>";
            }
            city_output.innerText = `${arrData[0].name},${arrData[0].sys.country}`
      
        } catch {
            city_output.innerText = `Please enter city name properly`
            temp_status.innerHTML="";
            full.innerHTML="";
        }
    }

}
submitBtn.addEventListener('click', getInfo);