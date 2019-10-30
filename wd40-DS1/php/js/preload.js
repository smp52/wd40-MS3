var visitedPage = false,
    disableScroll = false,
    disableSideScroll = false;

visitedPage = sessionStorage.visited;

    
    if (!visitedPage) {
        var perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
            estimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            loadTime = parseInt((estimatedTime/1000)%60)*100,
            startTime = new Date(),
            endTime,
            preloadDelay;

        $(window).on("load", function(){

            endTime = new Date();
            preloadDelay = loadTime - (endTime - startTime);

            // PRELOADER FUNCTIONS 
            setTimeout(function(){

                $(".preload__bar").fadeOut(500);

                setTimeout(function(){
                    $(".preload").css({
                        "transform": "translateX(100vw)",
                        "transition": "all 1.3s cubic-bezier(0.860, 0.000, 0.070, 1.000)"
                    });
                }, 400);

            }, preloadDelay);  

        });
    }
    else {
        $(document).ready(function(){
            $(".preload").css({
                "transform": "translateX(-100vw)",
                "transition": "all 1.3s cubic-bezier(0.860, 0.000, 0.070, 1.000)"
            });
        });
    }



