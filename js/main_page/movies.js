import { createBanners } from "./display_movies.js"
import { popularMovies,fetchTrailer} from "../fetch.js";
createBanners();

let popularMove = await popularMovies().then((data) => data.results);

  let randomMovie = popularMove[Math.floor(Math.random() * popularMove.length)];
  let trailer = await fetchTrailer(randomMovie.id).then((data) => data.results);
  let randomTrailer = trailer[Math.floor(Math.random() * trailer.length)].key;

  $(".main-video").prepend(`<iframe src="https://www.youtube.com/embed/${randomTrailer}?autoplay=1&rel=0&loop=1&mute=1&controls=0&playlist=${randomTrailer}"></iframe>`)

  $(".logo").append(`
  <div>
  <h2>${randomMovie.title}</h2>
  <br />
  <p>Watch ${randomMovie.title}</p>
  <p>
    ${randomMovie.overview}
  </p>
</div>
`)

$(".section2").on("click",".play",function(){
  $(".section2").append(`<div class="displayMovie">
  <i class="material-icons" id="close" style="font-size:36px; color:white">close</i>
  </div>`)
  let id = $(this).parent().attr("value");
  // console.log(id);
  (async function(){
      let trailer = await fetchTrailer(id).then((data) => data.results);
      let randomTrailer = trailer[Math.floor(Math.random() * trailer.length)].key;    
      $(".displayMovie").append(`<iframe src="https://www.youtube.com/embed/${randomTrailer}?autoplay=1&rel=0&loop=1&mute=1&controls=0&playlist=${randomTrailer}"></iframe>`)      
  })();
 
})
$(".section2").on("click","#close",function(){
  $(".displayMovie").remove();
  
})
$(".section2").on("click",".more",function(){
  let id = $(this).parent().attr("value");
  // console.log(id);
})

$("#home").on("click",function(){
    
    window.location.href="main_page.html"
})

$("#tv-shows").on("click",function(){
    
    window.location.href="Tv_shows.html"
})

$("#movies").on("click",function(){
    
    window.location.href="movies.html"
})
$("#news-popular").on("click",function(){
    
    window.location.href="news-popular.html"
})

