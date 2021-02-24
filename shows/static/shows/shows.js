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
				this.playAudioTrack(elementClicked);
				}    
			}.bind(this));
		document.getElementById('audioPlayer').addEventListener('ended', this.autoPlayNextTrack.bind(this));
	},
	playAudioTrack: function(song) {
		
		const songLocation = song.id;
		const songName = song.innerHTML;
		const audioPlayer = document.getElementById('audioPlayer');
		const currentTrackName = document.getElementById('currentTrack');

		if (audioPlayer.paused !== true) {
			audioPlayer.pause();
		} else if (songLocation === audioPlayer.src) {
			audioPlayer.play();
		} else {
			audioPlayer.src = songLocation;
			audioPlayer.play();
			currentTrackName.innerHTML = 'Currently Playing: ' + songName;
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
					nextTrack = trackListElements[i + 1];
				}
			}
		}
		
		this.playAudioTrack(nextTrack);
	},
}


App.init();