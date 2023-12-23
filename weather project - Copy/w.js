document.getElementById("searchbutton").addEventListener("click",searchweatherinfo)


window.addEventListener("load", topcitiesdisplay);
async function topcitiesdisplay(){
  let topcitiesmaindiv=document.getElementById("topcitiesdiv");
    // above catch topcities main parent div

  let topcitiesarray=["Mumbai","Kolkata","Surat","Pune"];
  for(let i=0;i<topcitiesarray.length;i++){
    let str="";
    try{
         let response1= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${topcitiesarray[i]}&appid=cea89fe72b070ced9848cc671e1c7dac&units=metric`);
         let response2= await response1.json();
         //response2.name
         //response2.main.feels_like
         let div=document.createElement("div");
         str+=`${response2.name} : ${response2.main.feels_like}`;
         div.innerHTML=str;
         topcitiesmaindiv.append(div);
         
    }
    catch{
      console.log(error);
    }
  }
  document.getElementById("topcitiesdiv").setAttribute("class","topcitiesdiv");
}
/**above function we display indias top cityes by traves a loop in prestored array topcitiesarray and 
 * every index of cities by them we make an api call and create a div and store city name and current weather temparature
 * inside the div element and then we append the div in topcitiesmaindiv
 */
  
async function searchweatherinfo(){
    let searchname=document.getElementById("searchname").value;
   if(searchname!==""){
    document.getElementById("topcitiesdiv").style.display="none";
    document.getElementById("buffermain").style.display="grid";
    try{
      let resp1= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchname}&appid=cea89fe72b070ced9848cc671e1c7dac&units=metric`);
      let resp2= await resp1.json();
    
      if(resp2.cod!=404){
        document.getElementById("currentw").style.display="grid";
        document.getElementById("city").innerText=resp2.name;
        document.getElementById("temp").innerText=(`${resp2.main.feels_like} c`);
        displayresult(resp2);
      }
      else{
        document.getElementById("buffermain").style.display="none";
        alert("City not Found")
      }
      

    }
    catch(err){
     console.log(err);
     document.getElementById("buffermain").style.display="none";
    }
   }
    }




function displayresult(data){
  
    document.getElementById("buffermain").style.display="none";
    //console.log(data);
    document.getElementById("detailsection").style.display="grid";
    document.getElementById("description").innerText=`Description:${data.weather[0].description}`;
    document.getElementById("temparature").innerText=`Temp :${data.main.temp}`;
    document.getElementById("feelslike").innerText=`Feels :${data.main.feels_like}`;
    document.getElementById("tempmin").innerText=`Temp Min :${data.main.temp_min}`;
    document.getElementById("tempmax").innerText=`Temp Max :${data.main.temp_max}`;
    document.getElementById("pressure").innerText=`Pressure :${data.main.pressure}`;
    document.getElementById("humidity").innerText=`Humidity :${data.main.humidity}`;
    document.getElementById("sealevel").innerText=`Sea-lvl :${data.main.sea_level}`;
    document.getElementById("groundlevel").innerText=`Ground-lvl :${data.main.grnd_level}`;
    document.getElementById("visibility").innerText=`Visibility :${data.visibility/1000}km`;
    document.getElementById("windspeed").innerText=`Wind speed :${data.wind.speed}km/hr`;
    document.getElementById("winddegree").innerText=`Wind Degree :${data.wind.deg}`;
  let rise=data.sys.sunrise;
  let set=data.sys.sunset;
  let tobj=new Convertsunriseandsunsettoutc(rise,set)
  
  document.getElementById("sunrise").innerText=`Sunrise :${tobj.sunrise}`;
  document.getElementById("sunset").innerText=`Sunset :${tobj.settime}`
 
}
function Convertsunriseandsunsettoutc(rise,set){


  var riseInMilliseconds = new Date(rise * 1000);
  var setInMilliseconds = new Date(set * 1000);
  
  // Extract time as a string
  var riseTimeString = riseInMilliseconds.toLocaleTimeString();
  var setTimeString = setInMilliseconds.toLocaleTimeString();
  
 /* console.log("Rise time: " + riseTimeString);
  console.log("Set time: " + setTimeString);*/
  this.sunrise=riseTimeString;
  this.settime=setTimeString;
}

