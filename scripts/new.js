// function toggle(elementID) {
//   var elementCSS = $(elementID.css('filter')
//   if (elementCSS == 'invert(1)') {

//   }
// }

$(document).ready( () => {

    $('.skill-item').mouseover( function (item) {
      // $(this).parent('.skills-box').children('.row').css('font-weight', 'normal');
      $('.skill-item').css('font-weight', 'normal');
      $(this).css('font-weight', 'bold');
    });

    $('.mini-skill-item').mouseover( function (item) {
      // $('.skill-item p').css('opacity', '0');
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
        // if  {
        //   $('.nav-title').css('display', 'none');
        // }

    });
});

    // $('.contact-item').mouseover ( function (item) {
    //   $(this).css('opacity', '1');
    // });
  });

    // $('.flower-container').click( () => {
    //   var filtered = $('.flower').css('filter')
    //   if (filtered == 'none') {
    //     $('.flower').css('filter', 'invert(1)')
        // $('.top-name').css('padding-top', '62%')
        // $('.white-screen').css('height', '100%')
        // $('.white-screen').css('background-color', 'rgba(67, 245, 255, 0.91)');

      //   ;
      // }
      // if (filtered == 'invert(1)') {
      //   $('.flower').css('filter', 'none')
      //   $('.white-screen').css('height', '110%');
        // $('.flower').css('height', '40rem')
        // $('.top-name').css('padding-top', '68%')
        // $('.white-screen').css('background-color', 'rgba(255,255,255,.9');
        // $('.white-screen').css('background-color','rgba(255, 162, 219, 0.91)');
//       }
//     });


// 

// 

// $(window).scroll(function() {
//   var scrolledY = $(window).scrollTop();
//   $('.blue-divider').css('background-position', 'left ' + ((scrolledY)) + 'px');
// });

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
    // blockScroll: 'false'
    isolateScroll: false,
    blockScroll: false
});