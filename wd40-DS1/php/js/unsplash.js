var unsplashSearch = {
    APIkey: 'ebffa201a7d10119ea7b232582d312671b379691e32538daa3484790e959eda7',
    query: 'aerial',
    quantity: 30, // MAX of 30
    page: 1,
    status: false,
    success: false
};

var unsplashOutput = {
    height: 400,
    width: 400,
    list: undefined,
    image: undefined,
    url: undefined,
    urlFinal: undefined,
    totalLoaded: 0,
    outputArray: []
}

function searchUnsplash() {
    
    // AJAX Call To Unsplash API
    $.getJSON('https://api.unsplash.com/search/photos?query=' + unsplashSearch.query + '&page=' + unsplashSearch.page + '&orientation=landscape&per_page=' + unsplashSearch.quantity + '&client_id=' + unsplashSearch.APIkey, function(data) {
        
        // Log Data object to console
        console.log(data);
        
        // Store data object in a variable
        unsplashOutput.list = data.results; 
        
        
    }).done(function(){ // After Ajax call completes
        
        // Check to soo if results are empty
        if (unsplashOutput.list.length == 0) {
            
            unsplashSearch.success = false;
            
            $(".dashboard").css("background-image", "linear-gradient(rgba(0,0,0,. 2), rgba(0,0,0, .2)), url('https://images.unsplash.com/photo-1555999003-3f2bc447570e?ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80')");
            
        }
        
        else {
            unsplashSearch.success = true;
        }
        
        // Loop through results
        
        var whichImage = Math.floor(Math.random() * unsplashOutput.list.length);
        
        console.log(unsplashOutput.list[whichImage].urls.full + '?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=crop&w=2000&h=1800&ixid=eyJhcHBfaWQiOjY0Mzc4fQ');
        
        unsplashOutput.url = unsplashOutput.list[whichImage].urls.full + '?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=crop&w=2000&h=1800&ixid=eyJhcHBfaWQiOjY0Mzc4fQ';
        
        $(".dashboard").css("background-image", "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('" + unsplashOutput.url + "')");
        
        
    });
}

$(document).ready(function(){
    
    searchUnsplash();
    
});

