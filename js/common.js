        $(function(){
        //导航切换样式
          $(".nav li .li_a").click(function(event){
              $(this).parent().addClass("active").siblings("li").removeClass("active");

          });
        //合唱团-订单中心
          $(".tab_ul li").click(function(event){
              $(this).addClass("active").siblings("li").removeClass("active");
              var tab =$(this).index();
              $('.tab_box>.tab').eq(tab).show().siblings('.tab').hide();
            
          });
 
          //页码
          $(".list_page a.a_common").click(function(event){
              $(this).addClass("active").siblings("a").removeClass("active");
           });
     //导航栏固定
        $(window).scroll(function() {
            if($(window).scrollTop()>=84){
                $(".nav ").addClass("nav_fixed");

            }else{
                $(".nav_fixed").addClass("nav").removeClass("nav_fixed");
               
            }
            });
         $(".top").html();
          $("#izl_rmenu").each(function(){
                 $(this).find(".btn_top").click(function(){
                    $("html, body").animate({
                        "scroll-top":0
                    },"fast");
                });           
          })
   
          $(window).scroll(function(){
              if($(window).scrollTop()>=84) {
                    $(".izl_rmenu").fadeIn();
                     // some code..
                }else {
                  $(".izl_rmenu").fadeOut();
                }

          });

          })



           

