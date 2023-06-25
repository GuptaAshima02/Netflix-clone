import {
  popularMovies,
  bollywoodMovies,
  anime,
  dramas,
  comedys,
  Indiandramas,
  kdramas,
  ActionAdventure,
  SciFiFantasy,
  Mystery,
  comedyseries,
  crimeseries,
  kmovies,
  ActionAdventureM,
  SciFiFantasyM,
  MysteryM,
  crimeMovies,
  thrillerMovies,
  News,
  fetchTrailer,
  fetchTrailerTv,
} from "../fetch.js";

let popular = await popularMovies().then((data) => data.results);
let bollywood = await bollywoodMovies().then((data) => data.results);
let animeShow = await anime().then((data) => data.results);
let dramaShow = await dramas().then((data) => data.results);
let comedy = await comedys().then((data) => data.results);
let indrama = await Indiandramas().then((data) => data.results);
let kdrama = await kdramas().then((data) => data.results);
let actionAdventure = await ActionAdventure().then((data) => data.results);
let sciFiFantasy = await SciFiFantasy().then((data) => data.results);
let mystery = await Mystery().then((data) => data.results);
let comedyser = await comedyseries().then((data) => data.results);
let crime = await crimeseries().then((data) => data.results);
let kmovie = await kmovies().then((data) => data.results);
let actionAdventuremovie = await ActionAdventureM().then(
  (data) => data.results
);
let sciFiFantasymovie = await SciFiFantasyM().then((data) => data.results);
let mysterymovie = await MysteryM().then((data) => data.results);
let crimemovie = await crimeMovies().then((data) => data.results);
let thrillermovie = await thrillerMovies().then((data) => data.results);
let news = await News().then((data) => data.results);

function displayBanner(item, no) {
  let name = item.title ? item.title : item.name;
  let type = item.title ? "movie" : "tv";
  let fav = "";
  let users = JSON.parse(localStorage.getItem("users"));
  let user_id = parseInt(sessionStorage.getItem("user_id"));
  let favMovie = users[user_id].favMovie;
  let favTv = users[user_id].favTv;

  if (
    favMovie.includes(item.id.toString()) ||
    favTv.includes(item.id.toString())
  ) {
    fav = "check_circle";
  } else {
    fav = "add_circle_outline";
  }

  if (item.trailer != "") {
    $(`#slide${no}`).append(`
  <div class="item">
    <img src="https://image.tmdb.org/t/p/original/${item.backdrop_path}" alt="">
    <div class="movie-icon" value="${[item.id, name, type, item.trailer]}">
    <i class="material-icons play"  style="font-size:32px">play_circle_filled</i>
    <i class="material-icons add" style="font-size:32px">${fav}</i>
    <i class="material-icons like" style="font-size:32px">thumb_up</i>
    <i class="material-icons moreinfo" value="${
      item.overview
    }" style="font-size:32px ;float: right;">arrow_drop_down_circle</i>
    </div>
  </div>
`);
  }
}

async function setTrailer(item) {
  let trailer = "";
  let randomTrailer = "";
  let type = item.title ? "movie" : "tv";
  if (type == "movie")
    trailer = await fetchTrailer(item.id).then((data) => data.results);
  else trailer = await fetchTrailerTv(item.id).then((data) => data.results);
  if (trailer.length > 0) {
    randomTrailer = trailer[Math.floor(Math.random() * trailer.length)].key;
  }
  return randomTrailer;
}

for (let item of popular) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}

for (let item of bollywood) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of animeShow) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of dramaShow) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of comedy) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of indrama) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of kdrama) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of actionAdventure) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of sciFiFantasy) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of mystery) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of comedyser) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of crime) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}

for (let item of kmovie) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}

for (let item of actionAdventuremovie) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}

for (let item of sciFiFantasymovie) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of mysterymovie) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}

for (let item of crimemovie) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of thrillermovie) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}
for (let item of news) {
  let trailer = await setTrailer(item);
  item.trailer = trailer;
}

export function createBanners() {
  for (let item of popular) {
    displayBanner(item, 1);
  }
  for (let item of bollywood) {
    if (item.backdrop_path != null) {
      displayBanner(item, 2);
    }
  }
  for (let item of animeShow) {
    if (item.backdrop_path != null) {
      displayBanner(item, 3);
    }
  }
  for (let item of dramaShow) {
    if (item.backdrop_path != null) {
      displayBanner(item, 4);
    }
  }
  for (let item of comedy) {
    if (item.backdrop_path != null) {
      displayBanner(item, 5);
    }
  }
  for (let item of indrama) {
    if (item.backdrop_path != null) {
      displayBanner(item, 6);
    }
  }
  for (let item of kdrama) {
    if (item.backdrop_path != null) {
      displayBanner(item, 7);
    }
  }
  for (let item of actionAdventure) {
    if (item.backdrop_path != null) {
      displayBanner(item, 8);
    }
  }
  for (let item of sciFiFantasy) {
    if (item.backdrop_path != null) {
      displayBanner(item, 9);
    }
  }
  for (let item of mystery) {
    if (item.backdrop_path != null) {
      displayBanner(item, 10);
    }
  }
  for (let item of comedyser) {
    if (item.backdrop_path != null) {
      displayBanner(item, 11);
    }
  }
  for (let item of crime) {
    if (item.backdrop_path != null) {
      displayBanner(item, 12);
    }
  }

  for (let item of kmovie) {
    if (item.backdrop_path != null) {
      displayBanner(item, 13);
    }
  }

  for (let item of actionAdventuremovie) {
    if (item.backdrop_path != null) {
      displayBanner(item, 14);
    }
  }

  for (let item of sciFiFantasymovie) {
    if (item.backdrop_path != null) {
      displayBanner(item, 15);
    }
  }
  for (let item of mysterymovie) {
    if (item.backdrop_path != null) {
      displayBanner(item, 16);
    }
  }

  for (let item of crimemovie) {
    if (item.backdrop_path != null) {
      displayBanner(item, 17);
    }
  }
  for (let item of thrillermovie) {
    if (item.backdrop_path != null) {
      displayBanner(item, 18);
    }
  }
  for (let item of news) {
    if (item.backdrop_path != null) {
      displayBanner(item, 19);
    }
  }

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
}
