$("document").ready(function(){

    AOS.init();

    $(".header .nav ul li").eq(0).addClass("on");


    
    let count = 0;
    $(window).on("mousewheel DOMMouseScroll", function(e){
        let delta=e.originalEvent.wheelDelta;
        let firefox=e.originalEvent.detail;
        // firefox -해당 브라우저가 아니면 확인할 수 없음
        // console.log(delta)
        
        if($(".section").is(":animated")){
            return
        } //세게 막 돌려도 하나씩 가지게하는 코드 --마구동작하는것 막는코드
        
        // 휠을 내리면 -값이 나오고 올리면 정상값이 나온다.
        if(delta<0 || firefox<0){
            //휠 내린거
            count++;
            if(count>$(".section").length-1){
                count=$(".section").length-1;
            }
        }else{
            //휠 올린거
            count--;
            if(count<0){
                count=0;
            }
        }

        if(count == 0){
            $(".txt-section, .img-section p").addClass("aos-animate")
        } //aos 작동되게 하려면 이코드 입력해야한다.
        if(count == 1){
            $(".txt-section, .img-section p").addClass("aos-animate")
        } //aos 작동되게 하려면 이코드 입력해야한다.
        if(count == 1){
            $(".txt-section p").addClass("aos-animate")
        } //aos 작동되게 하려면 이코드 입력해야한다.
        if(count == 2){
            $(".skill-box .item").addClass("aos-animate")
        } //aos 작동되게 하려면 이코드 입력해야한다.
        console.log(count)

        $(".section").stop().animate({
            top: -100*count+"%"
        },1000) //section 하나씩 스크롤되게 하는 코드



     


    }) //마우스 wheel 이벤트


    $("body").swipe({
        swipe: function(event, direction){
            if($(".section").is(":animated")){
                return
            }
            if(direction=="up"){
                count++;
                if(count>$(".section").length-1){
                    count=$(".section").length-1;
                }

            }else if(direction=="down"){
                count--;
                if(count<0){
                    count=0;
                }

            }else if(direction=="left"){
            }else if(direction=="right"){   
            }

            $(".section").stop().animate({
                top: -100*count+"%"
            },1000)
        }
    })






    let bar=new ProgressBar.Line("#pro1",{
        strokeWidth:0.5,
        duration:5000, 
        color:"#de5e3b",
    }) //bar1
    bar.animate(0.6)

    bar=new ProgressBar.Line("#pro2",{
        strokeWidth:0.5,
        duration:5000,
        color:"#de5e3b",
    }) //bar2
    bar.animate(0.6)

    bar=new ProgressBar.Line("#pro3",{
        strokeWidth:0.5,
        duration:5000,
        color:"#de5e3b",
    }) //bar3
    bar.animate(0.6)

    bar=new ProgressBar.Line("#pro4",{
        strokeWidth:0.5,
        duration:5000,
        color:"#de5e3b",
    }) //bar4
    bar.animate(0.6) //progressbar 이벤트

    
    $(".section:nth-child(4) .skill-content .skill-box .item").eq(0).addClass("on")
    $(".section:nth-child(4) .skill-content .skill-box .item").click(function(){
        let i=$(this).index();
        $(".section:nth-child(4) .skill-content .skill-txt p").hide().eq(i).slideDown();
        $(".section:nth-child(4) .skill-content .skill-box .item").removeClass("on").eq(i).addClass("on")
    })








}) //js