$(function(){

　//メニューをクリックしたときに、そのメニューの料金や詳細を表示するための設定
  $('.menu-reader').on('click',function(){

    var clickedMenu = $('.menu-reader').index(this);

    if($('.menu-content').eq(clickedMenu).hasClass('open')){

      $('.menu-content').eq(clickedMenu).removeClass('open');
      $('.menu-content').eq(clickedMenu).slideUp();
      $('.menu-reader i').eq(clickedMenu).removeClass('fa-minus');
      $('.menu-reader i').eq(clickedMenu).addClass('fa-plus');

    }else{

      $('.menu-content').eq(clickedMenu).addClass('open');
      $('.menu-content').eq(clickedMenu).slideDown();
      $('.menu-reader i').eq(clickedMenu).removeClass('fa-plus');
      $('.menu-reader i').eq(clickedMenu).addClass('fa-minus');

    }

  });

});
