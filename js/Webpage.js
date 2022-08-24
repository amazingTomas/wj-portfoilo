$("document").ready(function(){
    AOS.init();
    $(".header .nav ul li").eq(1).addClass("on");

        let count=0;
    
        $(window).on("mousewheel DOMMouseScroll", function(e){
            let delta=e.originalEvent.wheelDelta;
            let firefox=e.originalEvent.detail;
            // firefox -해당 브라우저가 아니면 확인할 수 없음
            // console.log(delta)
    
            if($(".section").is(":animated")){
                return
            }
            
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
            console.log(count)
    
            $(".section").animate({
                top: -100 * count +"%"
                // top : "-100%"
            }, 1000)

        }) //wheel 이벤트

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


        $(".txt-box ul li").click(function(){
            count = $(this).index();
            $(".section").animate({
                top: -100 * count +"%"
                // top : "-100%"
            }, 1000)
        })
            






}) //js