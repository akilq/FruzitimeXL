<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Fruzitime Radio Curacao</title>
	<link rel="stylesheet" href="./_css/style.css"/>
	<link rel="stylesheet" href="./_css/jplayer.blue.monday.scss"media="all"/>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/jquery.jplayer.min.js"></script>
	<style>
	.player {
		margin: auto;
	}
	body {
		background:transparent;
	}
	</style>
	<script>
	var station = "https://listen.shoutcast.com/FruzitimeRadioCuracao",
		servertype = "",
		metadata = true,
		autoplay = true,
		stationname = "Fruzitime Radio",
		slogan = "Radio Test",
		twitter = "https://twitter.com/radiofruz",
		facebook = "https://www.facebook.com/fruzitimeradio";
	</script>
	<script type="text/javascript" src="./_js/main.js"></script>
</head>
<body>
<input id="checker" type="hidden" value=""/>
<div class="player">
	<div id="stationlogo">
		<img src="./logo.png" width="180" height="180" alt="Radio test" />
	</div>
	<div id="nowplaying">
		<div class="popout"><a href=https://listen.shoutcast.com/FruzitimeRadioCuracao'&amp;m=sc&amp;rid=145562%27&amp;server=sc2&amp;format=mp3&amp;autoplay=true&amp;metadata=true&amp;stationname=Radio%20078&amp;stationslogan=Internet%20Radio%20Test&amp;twitter=https://twitter.com/radio078&amp;facebook=https://www.facebook.com/fruzitimeradio&amp;embedded=1" target="blank" id="popout"><div><img src="./fs.png" alt="Pop-out" /></div></a></div>
		 <div id="albumcover"></div>		<div id="current">
			<span class="artist big">test.nl</span><br>
			<span class="title">My station</span>
		</div>
		<div id="station">
			Radio test<span id="divider"> - </span><span class="station">Internet Radio Test</span>
		</div>
	</div>
	<div id="jquery_jplayer_1" class="jp-jplayer"></div>
	<div id="jp_container_1" class="jp-audio">
		<div class="jp-type-single">
		  <div class="jp-gui jp-interface">
			<ul class="jp-controls">
			  <li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
			  <li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
			  <li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>
			  <li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>
			  <li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>
			</ul>
			<div class="jp-volume-bar">
			  <div class="jp-volume-bar-value"></div>
			</div>
			<div class="jp-time-holder">
			  <div class="jp-current-time"></div>
			</div>
		  </div>
		  <div class="jp-no-solution">
			<span>Update Required</span>
		  </div>
		</div>
	</div>
	<div class="logo">
		<a href='https://Fruzitimeradio.com ' target='_blank'><img src="./_img/logo.png" alt="Hallo!" /></a>
	</div>
	<div class="links">
		<a href="https://www.facebook.com/fruzitimeradio" target="blank" id="facebook"><div><img src="./fb.png" alt="Facebook" /></div></a>
		<a href="https://twitter.com/tweety" target="blank" id="twitter"><div><img src="./_img/twitter.png" alt="Twitter" /></div></a>
		<a href="https://listen.shoutcast.com/FruzitimeRadioCuracao" target="blank"><div id="winamp"><img src="./_img/wa.png" alt="Winamp" /></div></a>
	</div>
  </div>
</body>
</html>