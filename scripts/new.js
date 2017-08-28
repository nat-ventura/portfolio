new jBox('Tooltip', {
    attach: '.tooltip',
    width: 200,
    trigger: 'click',
    position: {
      x: 'center',
      y: 'bottom'
    },
    outside: 'y',
    // pointer: 'bottom:500',
    // offset: '5',
    // pointTo: 'target',
    animation: 'move',
    closeOnClick: true
});
