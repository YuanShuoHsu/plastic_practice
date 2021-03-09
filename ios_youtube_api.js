// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady(){
    player = new YT.Player('player_0',{
        width: '100%',
        videoId: 'XZlUiWzfTzE',
        playerVars: { 'autoplay': 0, 'playsinline': 1 },
        // events:{
        //     'onReady': onPlayerReady
        // }
    });
    player = new YT.Player('player_1',{
        width: '100%',
        videoId: 'hn1JByl_WNM',
        playerVars: { 'autoplay': 0, 'playsinline': 1 },
        // events:{
        //     'onReady': onPlayerReady
        // }
    });
    player = new YT.Player('player_2',{
        width: '100%',
        videoId: 'NZgg6WWAPog',
        playerVars: { 'autoplay': 0, 'playsinline': 1 },
        // events:{
        //     'onReady': onPlayerReady
        // }
    });
    player = new YT.Player('player_3',{
        width: '100%',
        videoId: '2y3UPsdad60',
        playerVars: { 'autoplay': 0, 'playsinline': 1 },
        // events:{
        //     'onReady': onPlayerReady
        // }
    });
    player = new YT.Player('player_4',{
        width: '100%',
        videoId: 'rLXnfV0nklQ',
        playerVars: { 'autoplay': 0, 'playsinline': 1 },
        // events:{
        //     'onReady': onPlayerReady
        // }
    });
    player = new YT.Player('player_5',{
        width: '100%',
        videoId: 'SXSt1Yy7w1g',
        playerVars: { 'autoplay': 0, 'playsinline': 1 },
        // events:{
        //     'onReady': onPlayerReady
        // }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event){
    // event.target.mute();
    // event.target.playVideo();
}