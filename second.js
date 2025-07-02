async function fetchWeather() {
      const city = document.getElementById('cityName').value;
      const apiKey = '810b1386685740e5927202440252406';
      const baseUrl = 'https://api.weatherapi.com/v1/current.json';
      const apiUrl = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`;

      try {
        const valuee = await fetch(apiUrl);

        const response = await valuee.json();

    //first box 
    
    city_name.innerHTML = response.location.name;
    state.innerHTML = response.location.region;
    countryy.innerHTML = response.location.country;
    local_time.innerHTML = response.location.localtime;
    time_zone.innerHTML = response.location.tz_id;
    console.log(response)

    //second box

    temp.innerHTML = response.current.temp_c + " \u00B0C";
    degreee.innerHTML =response.current.feelslike_c + " \u00B0C";
    statuss.innerHTML = response.current.condition.text;
    humidity.innerHTML = response.current.humidity;
    heat.innerHTML = response.current.heatindex_c;

    //third box

    pressure.innerHTML = response.current.pressure_in;
    wind_speed_kph.innerHTML =response.current.wind_kph;
    wind_speed_mph.innerHTML =response.current.wind_mph
    wind_dir.innerHTML = response.current.wind_dir; 
    precipitation_in.innerHTML = response.current.precip_in;
    precipitation_mm.innerHTML = response.current.precip_mm;
    uv.innerHTML = response.current.uv;

    let iconUrl = response.current.condition.icon;
        if (iconUrl.startsWith("//")) {
          iconUrl = "https:" + iconUrl;
        }
        document.body.style.backgroundImage = `url('${iconUrl}')`;



        
      } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
      }
      city.value= '';

    }


function btnnnn(){
  
    let button2 = document.getElementById("btn");
    let b = document.getElementById("bttnn");
    let navv = document.getElementById("naavv");
    let card_body = document.querySelectorAll(".card-body");
    let card_header = document.querySelectorAll(".card-header");
    let blueee = document.getElementById("bluee");
    let h = document.getElementById("house")
    let panel =document.querySelectorAll(".my-0");

    let d = b.textContent;


    //  DARK MODE

    if(d == "Dark Mode"){
        document.body.style.backgroundColor = "black";
        navv.style.backgroundColor = "#09122C";
        button2.style.color = "white";

        card_body.forEach(card => {
          card.style.backgroundColor = "#393053";
        card.style.color = "#FAF1E6";
      })

      card_header.forEach(head =>{
        head.style.backgroundColor = "#18122B";
      })
        
        
        blueee.style.color = "#FAF6E9";
        h.style.color = "#FAF6E9";

        panel.forEach(p=>{
       p.style.color = "#57B4BA";
        })
       

        b.textContent = "White Mode";

    
    }


   // WHITE MODE


    if  (d == "White Mode") {
        document.body.style.backgroundColor = "rgb(227,232,228)";
        navv.style.backgroundColor = "rgb(159,170,195)";
         button2.style.color = "black";
           
         card_body.forEach(card => {
         card.style.backgroundColor = "#D9EAFD";
        card.style.color = "#1A120B";
      })

        card_header.forEach(head =>{
         head.style.backgroundColor = "#BCCCDC";
        
      })

      panel.forEach(p=>{
       p.style.color = "#35155D";
        })

        h.style.color = "#0B2447";
        blueee.style.color = "#0B2447";
        

         
  
       b.textContent = "Dark Mode";
    }
}