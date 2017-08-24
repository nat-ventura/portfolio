// function toggle(elementID) {
//     var elementCSS = $(elementID).css('display');
//     console.log(elementCSS);
//     if (elementCSS == 'none') {
//         $(elementID).css('display', 'block')
//     } else {
//         $(elementID).css('display', 'none')
//     }
// }

// $('.overlay.air').click( () => {
//     var githubAir = `
//         <p>
            // AirSpace is a group response platform that allows group members to provide feedback and answer a host user's questions.
            // Group members can initiate or join existing sessions via phone, tablet, or computer by going to the AirSpace website and entering their host's unique passport key.
            // The host can then send surveys and view member responses in real time.
//         </p>
//         <a href="https://github.com/aarontsosa/airtv" target="_blank"><button>GitHub</button></a>
//     `;
//     toggle('#airbox');
//     $('#airbox').html(githubAir);
//     $('#airbox').css({
//         // display: 'flex',
//         'font-size':'1rem'
//     });
// });

// $('.overlay.bio').click( () => {
//     var githubBio = `
//         <p>
//             BioLingual is an interactive anatomy map that translates the names of body parts and commonly associated symptoms using ApiMedic and the Google Translate API.
//             Users can click or tap an area of the body on our main body display in order to read a translation of that body part in another language of their choice.
//         </p>
//         <a href="https://github.com/aarontsosa/airtv" target="_blank"><button>GitHub</button></a>
//     `;
//     toggle('#biobox');
//     $('#biobox').html(githubBio);
//     $('#biobox').css({
//         // display: 'flex',
//         'font-size':'1rem'
//     });
// });

var githubAir = `
    AirSpace is a group response platform that allows group members to provide feedback and answer a host user's questions.
  `;

var githubBio = `
    BioLingual is an interactive anatomy map that translates the names of body parts and commonly associated symptoms using ApiMedic and the Google Translate API.
  `;

$('.overlay.air').on('click',function(){
    if($('#airtech').css('display')!='none'){
    $('#airdesc').html(githubAir).show().siblings('div').hide();
    }else if($('#airdesc').css('display')!='none'){
        $('#airtech').show().siblings('div').hide();
    }
});

$('.overlay.bio').on('click',function(){
    if($('#biotech').css('display')!='none'){
    $('#biodesc').html(githubBio).show().siblings('div').hide();
    }else if($('#biodesc').css('display')!='none'){
        $('#biotech').show().siblings('div').hide();
    }
});


if (Modernizr.touchevents){
    $('.project img').on('click', function(event){
        event.preventDefault();
        $(this).parent('.project').addClass('hover');
    });
    $('.project .overlay').on('click', function(){
        $(this).parent('.project').removeClass('hover');
    });
}