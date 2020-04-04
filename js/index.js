$(window).scroll(function(){
            if ($(window).scrollTop() > '200'){
                    $('.navbar').css({"background":"black"});
//                    $('.navbar').css({"opacity":"0.7"});
                }
            else if(window.innerWidth <= 768){
                $('.navbar').css({"background":"black"});
                $('.navbar').css({"top":"20px"});
            }
            else {
                $('.navbar').css({"background":"transparent"});
            }
});
