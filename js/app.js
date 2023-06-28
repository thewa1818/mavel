
//上いらない

// const weatherNum = 3;

// const fetchW = async () =>{
//   for(let i =1; i <= weatherNum; i++){
//     await getW(i);
//   }
// };


const getW = async (id) =>{
  const url = `https://whenisthenextmcufilm.com/api`;
  const res = await fetch(url);
  const weather = await res .json();
  console.log(weather);
  createW(weather);
}


function createW(weather){
  const tenki = `
  <p class="count">あと${weather.following_production.days_until}日</p>
  <p class="day">公開日${weather.following_production.release_date}</p>
  <img src="${weather.following_production.poster_url}">
  <img src="${weather.poster_url}">
  
  `

  $(".list").append(tenki);
};

getW();

//こんなやり方もあった

// const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo';


// fetch(url)
//   .then(data => data.json())
//   .then(json => console.log(json))




