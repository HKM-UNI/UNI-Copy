function radioPlayer(){var a=document.getElementById("audio_player");$("#pButton").on("click",(function(){a.paused?(a.play.src="http://82.145.59.200:38618/",pButton.className="",pButton.className="pause"):(a.pause(),pButton.className="",pButton.className="play")})),$("#rngVolume").on("change",(function(e){var t=e.target.value;console.log(t),a.volume=t}))}radioPlayer();