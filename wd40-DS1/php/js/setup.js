var setupSlide = 1,
    setupValues = {
        birthday: undefined,
        location: undefined,
        
    };

function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

function changeSetupSlide(direction) {
    
    
    console.log("current slide " + setupSlide);
    
    $(".setup__slide--" + setupSlide).fadeOut(500);
    
    if (direction) {
        
        setupSlide++;
        
    }
    
    else {
        
        setupSlide--;
        
    }
    
    var colorDelta = (setupSlide) * (20);
    
    var NewColor = LightenDarkenColor("#0d3045", colorDelta);
    
    $(".setup").css("background-color", NewColor);
    
    setTimeout(function(){
        
        console.log("next slide " + setupSlide);
        
        $(".setup__slide--" + setupSlide).fadeIn(500);
        $(".setup__slide--" + setupSlide).css("display", "flex");
        
        $(".setup__progress-bar--inner").css("width", "calc(" + (16.66 * setupSlide) + "%)");
        
    }, 500);
    
}


// Click Event Handlers
$(".setup__next").click(function(){
    
    changeSetupSlide(true);
    
});

$(".setup__back").click(function(){
    
    changeSetupSlide(false);
    
});

$(".setup__submit").click(function(){
    
    $(".setup").css("transform", "translateX(-100vw)");
    $(".dashboard").fadeIn(1000);
    
});

// Input event Handlers

var memeSlider = document.querySelector('#meme-slider');


// use 'change' instead to see the difference in response
memeSlider.addEventListener('input', function () {
    
  var ranking = $("#meme-slider").val();
    var rankingOutput;
    
    if (ranking < 3) {
        rankingOutput = 'Pretty Lame';
    }
    
    else if (ranking < 5) {
        rankingOutput = 'You Basic';
    }
    else if (ranking < 7) {
        rankingOutput = "That's more like it"
    }
    else {
        rankingOutput = "Peak Degeneracy"
    }
    
  $("#meme-level").text(rankingOutput);
    
}, false);