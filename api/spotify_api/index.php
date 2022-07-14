<?php
    
	require_once 'lib/api.php';
    header('Content-Type: application/json');
	use Phpfastcache\Helper\Psr16Adapter;

	$defaultDriver = 'Files';
	$cache = new Psr16Adapter($defaultDriver);

//	print 'Spotify integration temporarily disabled';

//	$api = _get_api_object();

	/* */

	$art = '';
	$nowplaying = '';
	$current = current_track($cache);

	if (current_track_is_playing($current)) {
		$art = current_track_album_art($current);
		$nowplaying = 'Now Playing: ' . current_track_apa($current);
	} else {
		$nowplaying = current_track_apa($current);
	}

	$playlist = current_track_playlist($current, $cache);

	$desc = '';
	if (isset($playlist->name)) {
		$desc = 'Playlist: ' . $playlist->name;
	}

	// echo $current;
    echo json_encode($current);
?>

