const tag = document.querySelector(".tags");
const arrayy = document.querySelector(".array");
const hello = document.querySelector(".hey");
const arr = [];
const a = []
let arrIndex;
let tempo=0;
const size = document.querySelectorAll("#je");
let ap;
let ap1;

hello.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && hello.value != "") {

    arr.push(hello.value)

    fetchApiBylocation(hello.value);
    arrayy.innerHTML = " "

    arr.forEach(passArray);
    hello.value = null;

  }
})




function passArray(val) {
  const lit = document.createElement("li");
  lit.id = "je"
  lit.appendChild(document.createTextNode(val));
  arrayy.appendChild(lit);

  helloo();

}


function helloo() {
  const siz = document.querySelectorAll("#je");
  const gais = document.querySelectorAll("#gais")

  for (var i = 0; i < siz.length; i++) {
    hi = Array.from(siz)




    hi[i].onclick = function () {
      arrIndex = arr.indexOf(this.innerHTML);
      arr.splice(arrIndex, 1)
      a.splice(arrIndex, 1)
      arrayy.removeChild(arrayy.childNodes[arrIndex + 1])
      delgarne(this.innerHTML)
    }
  }
}




//now we are gonna add apis hahahah

const city = document.querySelector(".cityName");
const mintemp = document.querySelector("#mintemp");
const maxtemp = document.querySelector("#maxtemp");
const AQI = document.querySelector(".AQI");
const cloud = document.querySelector(".cloud");
const humid = document.querySelector(".humid");
const pressure = document.querySelector(".pressure");
const wind = document.querySelector(".wind");
const status1 = document.querySelector(".status1");
const status2 = document.querySelector(".status2");
const mid = document.querySelector(".middle")
const banner = mid.querySelector("img");
const temp = document.querySelector(".temp");

window.onload = () => {
  if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition(success, onerror))
  }
}

function success(position) {

  ap = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=f4d137f69ce05356ecf89b473454ba65`;
  ap1 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f4d137f69ce05356ecf89b473454ba65`;
  callAqi(ap1);
  callApi(ap);

}
//weather json file fetch
function callApi(ap) {
  fetch(ap).then((a) => {
    return a.json();
  }).then((result) => {

    resultt(result)
  })
    .catch(() => {
      console.log("access error")
    })
}

//aqi json file fetch
function callAqi(ap1) {
  fetch(ap1).then((ab) => {
    return ab.json();
  }).then((resulta) => {

    aqiDisplay(resulta);
  }).catch(() => {
    console.log("failed");
  })
}

function resultt(re) {
  const name = re.name;
  const mintempp = re.main.temp_min;
  const maxtempp = re.main.temp_max;
  const tempp = re.main.temp;
  const wind1 = re.wind.speed;
  const humid1 = re.main.humidity;
  const cloud1 = re.clouds.all;
  const pressure1 = re.main.pressure;
  const status11 = re.weather[0].description;
  const id = re.weather[0].id;

  city.innerHTML = `${name}`
  mintemp.innerHTML = `${mintempp} °C`
  maxtemp.innerHTML = `${maxtempp} °C `
  wind.innerHTML = `${wind1} m/s`
  humid.innerHTML = `${humid1} %`
  pressure.innerHTML = `${pressure1} hpa`
  cloud.innerHTML = `${cloud1}%`;
  status1.innerHTML = `${status11}`
  temp.innerHTML = `,🌡 : ${tempp} °C `

  if (id == 800) {
    banner.src = "icons/clear.svg";
  } else if (id >= 200 && id <= 232) {
    banner.src = "icons/storm.svg";
  } else if (id >= 600 && id <= 622) {
    banner.src = "icons/snow.svg";
  } else if (id >= 701 && id <= 781) {
    banner.src = "icons/haze.svg";
  } else if (id >= 801 && id <= 804) {
    banner.src = "icons/cloud.svg";
  } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
    banner.src = "icons/rain.svg";
  }


}


function aqiDisplay(ree) {
  var text;
  const aqiindex = ree.list[0].main.aqi;
  AQI.innerHTML = `:${aqiindex}`
  if (aqiindex == 5) { status2.innerHTML = "Very poor AQI" }
  else if (aqiindex == 4) {
    status2.innerHTML = "Poor AQI";
  } else {
    console.log("jej")
  }

}






//making api request from each of the tags in the tagbox


function fetchApiBylocation(x) {
  const ap2 = `https://api.openweathermap.org/data/2.5/weather?q=${x}&units=metric&appid=f4d137f69ce05356ecf89b473454ba65`;
  fetch(ap2).then((hello) => {
    return hello.json()
  }).then((resp) => {
    implement(resp)


  })

}



function implement(resp) {
  const nam = resp.name;
  const temp21=resp.main.temp;
const   cloud21=resp.clouds.all;
const humidity21=resp.main.humidity;
const latt=resp.coord.lat 
const lon=resp.coord.lat
const idd=resp.weather[0].id;


  const template = document.querySelector(".display")
  var clone = template.cloneNode(true)
  const lo = document.querySelector(".location")
  
  const disp = document.querySelector(".display");
  const one=document.querySelector(".temperature");
const clouddd=document.querySelector(".cloudd");
const humidityy=document.querySelector(".humiditi");
const banners=document.querySelector(".banners")


 


 
 

   humidityy.innerHTML = `${humidity21} %`
  
   clouddd.innerHTML = `${cloud21}%`;

  one.innerHTML = ` ${temp21} °C`

   
 
  

  lo.innerHTML = `${nam}`
  if (idd == 800) {
    banners.src = "icons/clear.svg";
  } else if (idd >= 200 && idd <= 232) {
    banners.src = "icons/storm.svg";
  } else if (idd >= 600 && idd <= 622) {
    banners.src = "icons/snow.svg";
  } else if (idd >= 701 && idd <= 781) {
    banners.src = "icons/haze.svg";
  } else if (idd >= 801 && idd <= 804) {
    banners.src = "icons/cloud.svg";
  } else if ((idd >= 500 && idd <= 531) || (id >= 300 && id <= 321)) {
    banners.src = "icons/rain.svg";
  }
 
  template.removeAttribute("id")

seeaqi(`${latt}`,`${lon}`);
  template.setAttribute("id", "#gais")
  template.parentNode.appendChild(clone)
  const waste = document.querySelector("#hahagais")

  waste.style.display="none"
 
}


function delgarne(x) {
  
  console.log(x)
  const gais = document.querySelectorAll("#gais");
  const loc = document.querySelectorAll(".location");
  const disp = document.querySelectorAll(".display")
  const waste = document.querySelector("#hahagais")

  

  for (var i = 0; i < loc.length; i++) {
    if (loc[i].innerHTML === x) {
      disp[i].style.display = "none ";
     
     tempo=tempo+1;
    
    }
  }
 console.log(tempo)
hey(tempo)
}


function hey(tempo){
  const disp = document.querySelectorAll(".display")
  const wast=document.querySelectorAll("#hahagais")
if(tempo+1==disp.length){
 
 wast.setAttribute("id","omg1")

}


}

function seeaqi(l,lo){
  call = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${l}&lon=${lo}&appid=f4d137f69ce05356ecf89b473454ba65`;
  fetch(call).then((a) => {
    return a.json();
  }).then((resul) => {
seeres(resul)
    
  })
    .catch(() => {
      console.log("access error")
    })

}

function seeres(rep) {
  console.log(rep);
  const aqii=document.querySelector(".aqio")
  const aqiind = rep.list[0].main.aqi;
  aqii.innerHTML = `:${aqiind}`


}



