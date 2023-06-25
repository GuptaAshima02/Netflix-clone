import { createBanners } from "./display_movies.js";
import { dramas, fetchTrailer,fetchTrailerTv } from "../fetch.js";
import { onYouTubeIframeAPIReady } from "../youtubeApi.js";

createBanners();

let users = JSON.parse(localStorage.getItem("users"));
let user_id = parseInt(sessionStorage.getItem("user_id"));

let dramaShow = await dramas().then((data) => data.results);

let randomTv = dramaShow[Math.floor(Math.random() * dramaShow.length)];
let trailer = await fetchTrailerTv(randomTv.id).then((data) => data.results);
let randomTrailer = trailer[Math.floor(Math.random() * trailer.length)].key;

onYouTubeIframeAPIReady(0, "trailer", randomTrailer);


// $(".logo").append(`
//   <div>
//   <h2>${randomTv.name}</h2>
//   <br />
//   <p>Watch ${randomTv.name}</p>
//   <p>
//     ${randomTv.overview}
//   </p>
// </div>
// `);

$(document).on("click", ".play", function () {
  $(".section2").append(`<div class="displayMovie" id="1">
    <div id="showMovie"></div>
    <i class="material-icons volume" style="font-size:36px;float:right;">volume_off</i>
    <i class="material-icons" id="close" style="font-size:36px; color:white">close</i></div>`);

  let randomTrailer = $(this).parent().attr("value").split(",")[3];
  // console.log(randomTrailer);
  onYouTubeIframeAPIReady(1, "showMovie", randomTrailer);
});
$(".section2").on("click", "#close", function () {
  $(".displayMovie").remove();
});
$(".section2").on("click", "#more-info-close", function () {
  $(".more-info").remove();
});

$(".section2").on("click", ".moreinfo", function () {
  let [id, title, type, randomTrailer] = $(this)
    .parent()
    .attr("value")
    .split(",");
  let overview = $(this).attr("value");

  $(".section2").append(`
    <div class="more-info" id="2">
    <i class="material-icons more-volume" style="font-size:36px;float:right;">volume_off</i>
        <div id="main-more-trailer">
            <div id="more-trailer"></div>
        </div>
        <i class="material-icons" id="more-info-close" style="font-size:36px; color:white">close</i>
        <h2 class="more-info-title">${title}</h2>
        <p class="more-info-overview">
               ${overview}
        </p>
          <div class="video-items" value="${[id]}">
            <button class="b1 play" ><i class="material-icons " >play_arrow</i><span>Play</span></button>
            <i class="material-icons add" style="font-size:32px">add_circle_outline</i>
            <i class="material-icons like" style="font-size:32px">thumb_up</i>
          </div>
    </div>
    `);
  onYouTubeIframeAPIReady(2, "more-trailer", randomTrailer);
});

$(".section2").on("click", ".add", function () {
  let type = $(this).parent().attr("value").split(",")[2];
  let id = $(this).parent().attr("value").split(",")[0];
  if ($(this).html() == "add_circle_outline") {
    
    if (type == "movie") {
      users[user_id].favMovie.push(id);
    }
    else{
      users[user_id].favTv.push(id);
    }
    $(this).html("check_circle");
  } 
  else {
    if (type == "movie") {
      let index = users[user_id].favMovie.indexOf(id.toString());
      users[user_id].favMovie.splice(index,1)
    }
    else{
      let index = users[user_id].favTv.indexOf(id.toString());
      users[user_id].favTv.splice(index,1);
    }
    $(this).html("add_circle_outline");
  }
  localStorage.setItem("users",JSON.stringify(users));
});

$("#home").on("click", function () {
  window.location.href = "main_page.html";
});

$("#tv-shows").on("click", function () {
  window.location.href = "Tv_shows.html";
});

$("#movies").on("click", function () {
  window.location.href = "movies.html";
});
$("#news-popular").on("click", function () {
  window.location.href = "news-popular.html";
});