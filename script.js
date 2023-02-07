$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu_main').toggleClass('active');
        $("body").toggleClass('lock');
    });
});
