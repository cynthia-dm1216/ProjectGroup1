//Url and acces key
$(document).ready(function () {
    var queryname = "Superman";
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
            // create divs here//
           var imageContainer= $("<div>").attr('uk-grid', '');
           var ukimage = $("<div>").addClass('uk-width-expand@m superPics');
            var h2title = $('<h2>').text('Wallpapers');
            //Loop
            for (var i = 0; i < 4; i++) {
                 //console.log(result[i]);
                var imageURL = result[i].urls.regular;
                var altdescription = result[i]["alt_description"];
                console.log(altdescription);
                //console.log(imageURL);
                // image divs
                var img = $('<img>').attr({src:imageURL,alt:altdescription })
                //append img uk
                ukimage.append(img)
            
               
            }

         ukimage.prepend(h2title)
         imageContainer.prepend(ukimage)
         $
            //$('.image img').attr('src',imageURL );
        });

})
