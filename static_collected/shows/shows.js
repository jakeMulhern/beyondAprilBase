'use strict';

var App = {
	init: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		var testItem = document.getElementById('songList');
		console.log(testItem);
		document.getElementById('songList').addEventListener('click', function(event) {
			var elementClicked = event.target;
			if (elementClicked.className === 'audioTrackName') {
				this.changeAudioTrack(elementClicked.id);
				}    
			}.bind(this));
	},
	changeAudioTrack: function(songLocation) {
		const audioPlayer = document.getElementById('audioPlayer');
		audioPlayer.src = songLocation;
		audioPlayer.play();
	},
	makeAlert(elementClicked) {
		alert(elementClicked.id);
	}
}


App.init();