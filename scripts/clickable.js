if (Modernizr.touchevents){
    $('.project img').on('click', function(event){
        event.preventDefault();
        $(this).parent('.project').addClass('hover');
    });
    $('.project .overlay').on('click', function(){
        $(this).parent('.project').removeClass('hover');
    });
}