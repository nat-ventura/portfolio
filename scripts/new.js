function toggle(elementID) {
  var elementCSS = $(elementID).css('display');
  console.log(elementCSS);
  if (elementCSS == 'none') {
      $(elementID).css('display', 'block')
  } else {
      $(elementID).css('display', 'none')
  }
}

$(document).ready( () => {
  // for (var i in skills) {
    
    // $('.skill-item').on('click', (event) => {
    //   var select = event.currentTarget.children[1].textContent
    //   return '<b>' + select + '</b>';
    // });

    $('.skill-item').click(function (item) {
      $(this).parent('.skills-box').children('.row').css('font-weight', 'normal');
      $(this).siblings('.skill-item').css('font-weight', 'normal');
      $(this).css('font-weight', 'bold');
    });
  // };
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