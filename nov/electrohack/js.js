(function(){

    var embed_url = "https://embed.spotify.com/?uri=";

    var player = $("iframe#player");


    function qPlay(){

      //$("#player-section").append(xml);
      setTimeout(function(){
        console.log("cool");
        player.contents().find('.clickable.play-pause-btn').click();
        var btn = $('.clickable .play-pause-btn')
        console.log(btn);
        btn.click();
      }, 2000);
    }

   $('.clickable.play-pause-btn').click(qPlay);



})();