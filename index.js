//Url and acces key
$(document).ready(function () {
    var queryname = "SuperHero";
    var AccessKey = "JINdia7koUjq_pI2PJaRPDBiIJfg9sGoHF4a3t_2olw";
    var queryUrl = "https://api.unsplash.com/search/photos/?client_id=" + AccessKey + "&query=" + queryname;
    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    }); 
    // Ajax  GET request
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        //after data comes back from API
        .then(function (response) {
            // console.log(response);
            var result = response.results;
            //Loop
            for (var i = 0; i < result.length; i++) {
                // console.log(result[i]);
                var imageURL = result[i].urls.regular;
                //console.log(imageURL);

            }
           //creating divs for slideShow
           var slideShowDiv = $("<div>").addClass("uk-h3");
           var slideshowFadeDiv = $("<div>").addClass("uk-position-relative uk-visible-toggle uk-light");
           var slideShowItems = $("<ul>").addClass("uk-slideshow-items")
        });

})
