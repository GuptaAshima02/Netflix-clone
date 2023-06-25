let players = [];
export function onYouTubeIframeAPIReady(index, container, trailer) {
  console.log(container, trailer);
  let player = new YT.Player(container, {
    videoId: trailer,
    playerVars: {
      controls: 0,
      autoplay: 1,
      mute: 1,
      loop: 1,
      rel: 0,
      playlist: trailer,
    },
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // }
  });
  players[index] = player;
}
$(".main-video").on("click", ".volume", function () {
  let index = parseInt($(this).parent().attr("id"));
  if (players[index].isMuted()) {
    $(this).html("volume_up");
    players[index].unMute();
  } else {
    $(this).html("volume_off");
    players[index].mute();
  }
});

$(".section2").on("click", ".volume", function () {
  let index = parseInt($(this).parent().attr("id"));
  if (players[index].isMuted()) {
    $(this).html("volume_up");
    players[index].unMute();
  } else {
    $(this).html("volume_off");
    players[index].mute();
  }
});

$(".section2").on("click", ".more-volume", function () {
    let index = parseInt($(this).parent().attr("id"));
    console.log(index)
    if (players[index].isMuted()) {
      $(this).html("volume_up");
      players[index].unMute();
    } else {
      $(this).html("volume_off");
      players[index].mute();
    }
  });
