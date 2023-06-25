let users = JSON.parse(localStorage.getItem("users"));
let user_id = parseInt(sessionStorage.getItem("user_id"));
let favMovie = users[user_id].favMovie;
let favTv = users[user_id].favTv;



$(`#myList`).append(`
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
