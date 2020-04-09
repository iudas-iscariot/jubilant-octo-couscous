$(window).scroll(function(){
            if ($(window).scrollTop() > '200'){
                    $('.navbar').css({"background":"black"});
                    $('.navbar').css({"opacity":"0.8"});
                }
            else {
                $('.navbar').css({"background":"transparent"});
            }
});
