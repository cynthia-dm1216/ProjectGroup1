$(document).ready(function () {

    // User story
    // As a superhero fanatic, I want to search for my favorite superhero so I can learn more about them.

    // Acceptance Criteria
    // GIVEN the application
    // WHEN I arrive on the home screen
    // THEN I am presented with an animation telling me about the application
    setTimeout(function () {
        $(".codingHero").attr("src", "./assets/images/coding-hero-stance-5.png");
        $(".speechBubble").text("This application will return superhero information and backgrounds to you!")
    }, 3000);

    setTimeout(function () {
        $(".codingHero").attr("src", "./assets/images/coding-hero-stance-3.png");
        $(".speechBubble").text("Use the search form above to find informations about your favorite superhero(es)!")
    }, 6000);

    setTimeout(function () {
        $(".speechBubble").css("display", "none");
        $(".codingHero").attr("src", "./assets/images/coding-hero-fly.png");
        setInterval(function () {
            $(".codingHero").css("bottom", "+=5px");
        }, 10);
    }, 10000);

    setTimeout(function () {
        $(".codingHero").animate({ opacity: "0" }, "slow")
    }, 17000);

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

    $("#heroForm").on("submit", function (e) { // Change to target form and submit event when HTML is ready
        e.preventDefault();

        // Clear heroInfo div
        $("#heroInfo").empty();

        // Get input value
        var queryName = $("#heroSearchInput").val().trim();
        var accessToken = "2839209799538545";
        var queryURL = "https://superheroapi.com/api/" + accessToken + "/search/" + queryName;
        // Logic to solve CORS issue
        jQuery.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
            }
        });
        // Request from superhero api
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // Get the results
            var results = response.results;

            // If there is more than 1 result
            if (results.length > 1) {
                // Create a div to hold the buttons
                var heroPaginationDiv = $("<div>").addClass("uk-width-1-1 uk-padding-remove uk-visible-toggle uk-margin-remove-top").attr({ tabindex: "-1", "uk-slider": "" });
                var heroPageNumsDiv = $("<div>").addClass("uk-slider-items uk-grid heroPageNums uk-text-large");
                // Loop through the results
                for (var i = 0; i < results.length; i++) {
                    // Get each result
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
                    var sliderItemLi = $("<li>").addClass("uk-padding uk-padding-remove-left uk-padding-remove-right");
                    var heroPageNumSpan = $("<span>").addClass("heroPageNum");
                    var userIconSpan = $("<span>").addClass("userIcon").attr("uk-icon", "user");
                    // Create divs and add classes
                    var heroResultContainer = $("<div>").addClass("heroResult uk-width-1-1").attr({"data-index": i + 1, "data-name": name});
                    var heroHeadDiv = $("<div>").addClass("heroHead uk-width-1-1 uk-flex uk-flex-column uk-padding-remove-top");
                    var heroNameSpan = $("<span>").addClass("heroName uk-text-large");
                    var publisherSpan = $("<span>").addClass("publisher uk-text-muted");
                    var imgEl = $("<img>").addClass("heroImg").attr({ "data-src": imageUrl, "alt": name, "uk-img": "" });
                    var heroAboutDiv = $("<div>").addClass("heroAbout").attr("uk-grid", "");
                    var biographyDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-2@s");
                    var biographyHeading = $("<div>").addClass("infoHeading uk-text-bold");
                    var fullNameDiv = $("<div>").addClass("infoContent");
                    var birthPlaceDiv = $("<div>").addClass("infoContent");
                    var firstAppearanceDiv = $("<div>").addClass("infoContent");
                    var alignmentDiv = $("<div>").addClass("infoContent");
                    var occupationDiv = $("<div>").addClass("infoContent");
                    var appearanceDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-4@s uk-width-1-2");
                    var appearanceHeading = $("<div>").addClass("infoHeading uk-text-bold");
                    var genderDiv = $("<div>").addClass("infoContent");
                    var raceDiv = $("<div>").addClass("infoContent");
                    var heightDiv = $("<div>").addClass("infoContent");
                    var weightDiv = $("<div>").addClass("infoContent");
                    var eyeColorDiv = $("<div>").addClass("infoContent");
                    var hairColorDiv = $("<div>").addClass("infoContent");
                    var powerStatsDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-4@s uk-width-1-2");
                    var powerStatsHeading = $("<div>").addClass("infoHeading uk-text-bold");
                    var intelligenceDiv = $("<div>").addClass("infoContent");
                    var strengthDiv = $("<div>").addClass("infoContent");
                    var speedDiv = $("<div>").addClass("infoContent");
                    var durabilityDiv = $("<div>").addClass("infoContent");
                    var powerDiv = $("<div>").addClass("infoContent");
                    var combatDiv = $("<div>").addClass("infoContent");
                    // Add texts
                    heroPageNumSpan.text(heroResultContainer.attr("data-name"));
                    heroNameSpan.text(name);
                    publisherSpan.text(publisher);
                    biographyHeading.text("Biography");
                    fullNameDiv.html("<strong>Full name: </strong>" + fullName);
                    birthPlaceDiv.html("<strong>Birth place: </strong>" + birthPlace);
                    firstAppearanceDiv.html("<strong>First appearance: </strong>" + firstAppearance);
                    alignmentDiv.html("<strong>Alignment: </strong>" + alignment);
                    occupationDiv.html("<strong>Occupation: </strong>" + occupation);
                    appearanceHeading.text("Appearance");
                    genderDiv.html("<strong>Gender: </strong>" + gender);
                    raceDiv.html("<strong>Race: </strong>" + race);
                    heightDiv.html("<strong>Height: </strong>" + height);
                    weightDiv.html("<strong>Weight: </strong>" + weight);
                    eyeColorDiv.html("<strong>Eye color: </strong>" + eyeColor);
                    hairColorDiv.html("<strong>Hair color: </strong>" + hairColor);
                    powerStatsHeading.text("Power stats");
                    intelligenceDiv.html("<strong>Intelligence: </strong>" + intelligence);
                    strengthDiv.html("<strong>Strength: </strong>" + strength);
                    speedDiv.html("<strong>Speed: </strong>" + speed);
                    durabilityDiv.html("<strong>Durability: </strong>" + durability);
                    powerDiv.html("<strong>Power: </strong>" + power);
                    combatDiv.html("<strong>Combat: </strong>" + combat);

                    // Append divs
                    heroPageNumsDiv.append(sliderItemLi.append(heroPageNumSpan.prepend(userIconSpan)));
                    powerStatsDiv.append(powerStatsHeading).append(intelligenceDiv).append(strengthDiv).append(speedDiv).append(durabilityDiv).append(powerDiv).append(combatDiv);
                    appearanceDiv.append(appearanceHeading).append(genderDiv).append(raceDiv).append(heightDiv).append(weightDiv).append(eyeColorDiv).append(hairColorDiv);
                    biographyDiv.append(biographyHeading).append(fullNameDiv).append(birthPlaceDiv).append(firstAppearanceDiv).append(alignmentDiv).append(occupationDiv);
                    heroAboutDiv.append(biographyDiv).append(appearanceDiv).append(powerStatsDiv);
                    heroHeadDiv.append(heroNameSpan).append(publisherSpan);
                    heroResultContainer.append(heroHeadDiv).append(imgEl).append(heroAboutDiv);
                    $("#heroInfo").append(heroResultContainer);
                }

                // Prepend the pagination div to the heroInfo div
                $("#heroInfo").prepend(heroPaginationDiv.append(heroPageNumsDiv));

                // Add active to 1st button and view first search result
                heroPageNumsDiv.children(":first").children(":first").addClass("active");
                $("*[data-index='1']").css("display", "block");
            }

            // Cynthia
            // WHEN I scroll down even more
            // THEN I am presented with images of wallpapers related to the superhero
            // Get data from image api
            // Render data on DOM

            // var queryname = $("#heroSearchInput").val().trim(); // Already declared previously
            var dataName = $("*[data-index='1']").attr("data-name");
            console.log(dataName);
            var AccessKey = "JINdia7koUjq_pI2PJaRPDBiIJfg9sGoHF4a3t_2olw";
            var queryUrl = "https://api.unsplash.com/search/photos/?client_id=" + AccessKey + "&query=" + dataName;

            jQuery.ajaxPrefilter(function (options) {
                if (options.crossDomain && jQuery.support.cors) {
                    options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
                }
            });

            // Ajax  GET request
            $.ajax({
                url: queryUrl,
                method: "GET"
                // After data comes back from API
            }).then(function (response) {

                var result = response.results;
                // console.log(result);
                // Create divs here
                var imageContainer = $("<div>").addClass("uk-width-1-1 uk-padding-remove uk-margin-remove-top");
                var headingTitle = $('<div>').addClass("infoHeading uk-text-bold uk-text-muted uk-padding-small").text("Wallpapers");

                // Loop through image results array, limit to 4
                for (var i = 0; i < 4; i++) {
                    // Get image url and alt descriptions for each result
                    var imageURL = result[i].urls.regular;
                    var altDescription = result[i]["alt_description"];
                    // Crate image divs
                    
                    var img = $('<img>').attr({ src: imageURL, alt: altDescription, width: "100%" });
                    //getting data from a div attribute

                    //append img uk
                    imageContainer.append(img);
                }
                imageContainer.prepend(headingTitle);
                $("#heroInfo").append(imageContainer);
            });

        })

        // Clear the input value
        $("#heroSearchInput").val("");
    })

    // Listen for an event on the heroPageNum spans
    $(document).on("click", ".heroPageNum", function () {
        // If clicked, remove active class from other spans and add it to clicked span
        $(".heroPageNum").removeClass("active");
        $(this).addClass("active");
        // Get the now active span's text
        var activePageNum = $(".active").text();
        console.log(activePageNum);
        // Change heroResult to matching data-index
        $(".heroResult").css("display", "none");
        $("*[data-index=" + activePageNum + "]").css("display", "block");
    })


})