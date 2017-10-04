$(document).ready( () => {

    $('.skill-item').mouseover( function (item) {
      $('.skill-item').css('font-weight', 'normal');
      $(this).css('font-weight', 'bold');
    });

    $('.mini-skill-item').mouseover( function (item) {
      $(this).css('opacity', '1');
    })

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {
  
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });

  $(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.white-screen').offset().top; // pixels to the top of div1
        var ht = $('.white-screen').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll < os + ht) {
          $('.nav-title').css('display', 'none');
        }
        if(scroll > os + ht) {
          // console.log($('.nav').css('bottom'));
          $('.nav-title').css('display', 'unset');
        }
        if ($('.nav').css('top') != '0px') {
          $('.nav-title').css('display', 'none');
        }
      });
    });
});

new jBox('Tooltip', {
    attach: '.tooltip',
    width: 200,
    trigger: 'mouseenter',
    position: {
      x: 'center',
      y: 'bottom'
    },
    outside: 'y',
    animation: 'move',
    closeOnClick: false,
    isolateScroll: false,
    blockScroll: false
});