'use strict';

var App = {
	init: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.getElementById('songList').addEventListener('click', function(event) {
			var elementClicked = event.target;
			if (elementClicked.className === 'audioTrackName') {
				this.playAudioTrack(elementClicked.id);
				}    
			}.bind(this));
	},
	playAudioTrack: function(songLocation) {
		const audioPlayer = document.getElementById('audioPlayer');
		if (audioPlayer.paused !== true) {
			audioPlayer.pause();
		} else if (songLocation === audioPlayer.src) {
			audioPlayer.play();
		} else {
			audioPlayer.src = songLocation;
			audioPlayer.play();
		};
	}
}


App.init();