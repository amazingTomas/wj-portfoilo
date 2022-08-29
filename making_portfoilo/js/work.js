$("document").ready(function(){
    AOS.init();


    $(".section .click-content .content").eq(0).addClass("on");

    $(".header .nav ul li").eq(2).addClass("on");

    $(".section .click-content .content").click(function(){
        let i=$(".section .click-content .content").index(this)
        $(".img-content img").hide().eq(i).fadeIn();

        $(".section .click-content .content").removeClass("on").eq(i).addClass("on");
    })




})