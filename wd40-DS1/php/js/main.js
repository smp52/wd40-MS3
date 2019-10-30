$(".quote__expand").click(function(){
    
    $(".dashboard__content").css("transform", "translateY(0)");
    $(".quote").fadeOut();
    
    $(".clock").css("opacity", "0");
    
    setTimeout(function(){
        
        $(".clock__left").css({
            "text-align": "left",
            "padding": "5rem"
        });
    
        $(".clock__right").css({
            "text-align": "right",
            "padding": "5rem"
        });
        
        $(".clock").css({
            "width": "100vw",
            "left": "0",
            "top": "0",
            "transform": "translateY(0)",
            "color": "#333",
            "display": "grid",
            "grid-template-columns": "auto auto",
            "opacity": "1"
        });
        
    }, 600);
    
    
    
});

$(".dashboard__collapse").click(function(){
    
    
    
    
    $(".dashboard__content").css("transform", "translateY(100%)");
    $(".quote").fadeIn();
    
    $(".clock").css("opacity", "0");
    
    setTimeout(function(){
        
        $(".clock").css({
            "width": "30vw",
            "left": "calc(50% - 15vw)",
            "top": "40%",
            "transform": "translateY(-50%)",
            "color": "#fff",
            "display": "block",
            "opacity": "1"
        });

        $(".clock__left").css({
            "text-align": "center",
            "padding": "0"
        });

        $(".clock__right").css({
            "text-align": "center",
            "padding": "0"
        });
        
    },600);
    
    
    
});