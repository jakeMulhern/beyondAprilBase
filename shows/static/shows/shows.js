'use strict';

var App = {
	init: function() {
		this.bindEvents();
		let tracklist = document.getElementsByClassName('audioTrackName');
	},
	bindEvents: function() {
		document.getElementById('songList').addEventListener('click', function(event) {
			var elementClicked = event.target;
			if (elementClicked.className === 'audioTrackName') {
				this.playAudioTrack(elementClicked.id);
				}    
			}.bind(this));
		document.getElementById('audioPlayer').addEventListener('ended', this.autoPlayNextTrack.bind(this));
	},
	playAudioTrack: function(songLocation) {
		console.log(songLocation);
		
		const audioPlayer = document.getElementById('audioPlayer');

		if (audioPlayer.paused !== true) {
			audioPlayer.pause();
		} else if (songLocation === audioPlayer.src) {
			audioPlayer.play();
		} else {
			audioPlayer.src = songLocation;
			audioPlayer.play();
		};
	},
	autoPlayNextTrack: function() {
		const currentTrack = document.getElementById('audioPlayer').src;
		const trackListElements = document.getElementsByClassName('audioTrackName');
		let nextTrack;

		for (let i = 0; i < trackListElements.length; i++) {
			if (trackListElements[i].id === currentTrack) {
				if (trackListElements[i + 1] === undefined) {
					return;
				} else {
					nextTrack = trackListElements[i + 1].id;
				}
			}
		}
		
		this.playAudioTrack(nextTrack);
	},
}


App.init();