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