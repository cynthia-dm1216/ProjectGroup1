$(document).ready(function () {

    // User story
    // As a superhero fanatic, I want to search for my favorite superhero so I can learn more about them.

    // Acceptance Criteria
    // GIVEN the application
    // WHEN I arrive on the home screen
    // THEN I am presented with an animation telling me about the application

    // Alexandra
    // WHEN I submit a search query 
    // THEN the page reloads and views information about the superhero
    // On form submit, take value of input field
    // Get data from superhero api for single result
    // Render data on DOM

    // Alvin
    // When I receive multiple results for a search query
    // THEN the page presents me with buttons to browse through them
    // When I click on a button of a multiple search result
    // THEN I am presented with the information of another result
    // Get data from superhero api for multiple results
    // Render data on DOM
    $("button").on("click", function (e) { // Change to target form and submit event when HTML is ready
        e.preventDefault();

        // Superhero API ---------WORKS!!!        
        var queryName = "Spider-man";
        var accessToken = "2839209799538545";
        var queryURL = "https://superheroapi.com/api/" + accessToken + "/search/" + queryName;

        jQuery.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.results;

            // Create a div to hold the buttons
            var heroPaginationDiv = $("<div>").addClass("heroPagination uk-width-1-1 uk-child-width-expand uk-margin-remove uk-flex uk-flex-center uk-text-center uk-text-bold");
            
            // Loop through results
            if (results.length > 1) {
                for (var i = 0; i < results.length; i++) {
                    var hero = results[i];
                    // Take data for each result
                    var name = hero.name;
                    var publisher = hero.biography.publisher;
                    var imageUrl = hero.image.url;
                    var fullName = hero.biography["full-name"];
                    var birthPlace = hero.biography["place-of-birth"];
                    var firstAppearance = hero.biography["first-appearance"];
                    var alignment = hero.biography.alignment;
                    var occupation = hero.work.occupation;
                    var gender = hero.appearance.gender;
                    var race = hero.appearance.race;
                    var height = hero.appearance.height[0];
                    var weight = hero.appearance.weight[0];
                    var eyeColor = hero.appearance["eye-color"];
                    var hairColor = hero.appearance["hair-color"];
                    var intelligence = hero.powerstats.intelligence;
                    var strength = hero.powerstats.strength;
                    var speed = hero.powerstats.speed;
                    var durability = hero.powerstats.durability;
                    var power = hero.powerstats.power;
                    var combat = hero.powerstats.combat;
                    // Create a button for each result
                    var newSpanButton = $("<span>").addClass("heroPageNum");
                    // Create divs and add classes
                    
                    // Add texts
                    // Only view the first one and hide the rest (through class)
                    // Append divs
                }

            }
            // var searchList = response.results;
            // for (var i = 0; i < searchList.length; i++) {
            //     var heroName = searchList[i].name;
            //     var imgSrc = searchList[i].image.url;

            //     var heroDiv = $("<div>").append($("<h1>").text(heroName)).append($("<img>").attr("src", imgSrc));
            //     $(".container").append(heroDiv);
            // }

        })
    })


    // Cynthia
    // WHEN I scroll down even more
    // THEN I am presented with images of wallpapers related to the superhero
    // Get data from image api
    // Render data on DOM
})