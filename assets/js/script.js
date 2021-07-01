// メイン スライダー
$('.slider').slick ({
    autoplay:true,
    autoplaySpeed:2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
});


// ハンバーガーメニュー
$('.hamburger-menu').on('click',function(){
    $('.global-nav').fadeToggle(300);
    $('.hamburger-menu').toggleClass('cross');
    $('body').toggleClass('noscroll');
});

// ページ内リンクを押してた時、ハンバーガー閉じる
$('#menu a[href]').on('click', function(event) {
    $('.hamburger-menu').trigger('click');
});

