// function toggle(elementID) {
//   var elementCSS = $(elementID.css('filter')
//   if (elementCSS == 'invert(1)') {

//   }
// }

$(document).ready( () => {

    $('.skill-item').click(function (item) {
      $(this).parent('.skills-box').children('.row').css('font-weight', 'normal');
      $(this).siblings('.skill-item').css('font-weight', 'normal');
      $(this).css('font-weight', 'bold');
    });

    $('.flower-container').click( () => {
      var filtered = $('.flower').css('filter')
      if (filtered == 'none') {
        $('.flower').css('filter', 'invert(1)')
      }
      if (filtered == 'invert(1)') {
        $('.flower').css('filter', 'none')
      }
    });
});

new jBox('Tooltip', {
    attach: '.tooltip',
    width: 200,
    trigger: 'click',
    position: {
      x: 'center',
      y: 'bottom'
    },
    outside: 'y',
    animation: 'move',
    closeOnClick: true,
    // blockScroll: 'false'
    isolateScroll: false,
    blockScroll: false
});