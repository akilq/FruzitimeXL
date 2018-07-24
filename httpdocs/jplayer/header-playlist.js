$(document).ready(function(){
	
	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			artist:"",
			title:"Fruzitime Radio",
			mp3: 'https://listen.shoutcast.com/fruzitimeradiocuracao'
		},

	], {
		swfPath: "jplayer",
		supplied: "mp3",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

})