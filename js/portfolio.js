$("document").ready(function(){
    AOS.init();

    $(".header .nav ul li").click(function(){
        let i=$(this).index();
        $(".header .nav ul li").removeClass("on").eq(i).addClass("on");
    })





    
}) //js