$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: '0Ni4Rwm13y0',
        containment: '#main_visual',
        showControls: false,
        autoPlay: true,

        playOnlyIfVisible: true,

    });

    $('#conVideo').YTPlayer({
        videoURL: '0Ni4Rwm13y0',
        containment: '#bgm',
        showControls: false,
        autoPlay: true,

        playOnlyIfVisible: true,
    });
    $('#conVideo2').YTPlayer({
        videoURL: '0Ni4Rwm13y0',
        containment: '#bgm2',
        showControls: false,
        autoPlay: true,

        playOnlyIfVisible: true,
    });
    $('#conVideo3').YTPlayer({
        videoURL: '0Ni4Rwm13y0',
        containment: '#bgm3',
        showControls: false,
        autoPlay: true,

        playOnlyIfVisible: true,
    });

    $('main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });

})