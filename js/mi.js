   var mySwiper = new Swiper(".glyph-t",{
   		pagination:".swiper-pagination",
   		nextButton:".swiper-button-next",
   		prevButton:".swiper-button-prev",
   		loop:true,
   		autoplay:2000,
   		effect : 'fade',
		fade: {
		  crossFade: false,
		}
   })
   
       $(".page-01 p").click(function(){
               index = $(this).index();
               $(this).addClass("on").siblings().removeClass("on")
               
               swer.slideTo(index,1000)
   
          })
           var swer = new Swiper('.glyph-h',{   
//         		autoplay:3000,
           		speed:1000,
               	onTransitionEnd:function(){
                   	$(".page-01 p").eq(quer.activeIndex).addClass("on").siblings().removeClass("on")
               	}
           }); 
       
       $(".page-02 p").click(function(){
               index = $(this).index();
               $(this).addClass("on1").siblings().removeClass("on1")
               
               swer1.slideTo(index,1000)
   
          })
           var swer1 = new Swiper('.glyph-b',{ 
           		speed:1000,
//         		autoplay:3000,
               	onTransitionEnd:function(){
                   	$(".page-02 p").eq(quer.activeIndex).addClass("on1").siblings().removeClass("on1")
               	}
           });     
	$(".logo_li").mouseenter(function(){
		$(".xiala").toggle();
	})
	$(".logo_li").mouseleave(function(){
		$(".xiala").toggle();
	})
	

