$(document).ready(function () {

    // Set timeouts for homescreen animation
    // First timeout at 3 seconds
    setTimeout(function () {
        // Change the graphic
        $(".codingHero").attr("src", "./assets/images/coding-hero-stance-5.png");
        // Change the speech bubble text
        $(".speechBubble").text("This application will return superhero information and backgrounds to you!")
    }, 3000);
    // Second timeout at 6 seconds
    setTimeout(function () {
        // Change the graphic
        $(".codingHero").attr("src", "./assets/images/coding-hero-stance-3.png");
        // Change the speech bubble text
        $(".speechBubble").text("Use the search form above to find informations about your favorite superhero(es)!")
    }, 6000);
    // Third timeout at 10 seconds
    setTimeout(function () {
        // Hide the speech bubble
        $(".speechBubble").css("display", "none");
        // Change the graphic
        $(".codingHero").attr("src", "./assets/images/coding-hero-fly.png");
        // Animate the graphic to move up
        setInterval(function () {
            $(".codingHero").css("bottom", "+=5px");
        }, 10);
    }, 10000);
    // Fourth timeout at 17 seconds
    setTimeout(function () {
        // Have the graphic fade out
        $(".codingHero").animate({ opacity: "0" }, "slow")
    }, 17000);


    // Target the audio element
    var audioElement = $("#audio");
    // Create a boolean for when button is pressed
    var isPressed = false;
    // Listen for a click event on the audio button
    $(".audioBtn").on("click", function () {
        // At first click
        if (isPressed == false) {
            // Add the controls attribute
            audioElement.attr("controls", "");
            // Change isPressed to true
            isPressed = true;
            // Switch the icon of the audioBtn
            $(".audioBtn").attr("uk-icon", "icon: minus-circle; ratio: 2");
            return isPressed;
            // At second click
        } else {
            // Remove the controls attribute
            audioElement.attr("controls", false);
            // Change isPressed back to false
            isPressed = false;
            // Switch the icon back to the play-circle
            $(".audioBtn").attr("uk-icon", "icon: play-circle; ratio: 2");
            return isPressed;
        }
    });

    // Listen to a submit event on the heroForm
    $("#heroForm").on("submit", function (e) {
        e.preventDefault();
        // Render superhero data
        renderHeroData();
    })

    // Listen to a click event on the heroForm if the icon is clicked
    $("#heroForm").on("click", "#searchIcon", function (e) {
        e.preventDefault();
        // Ignore if input field is empty
        if ($("#heroSearchInput").val() == "") {
            return;
        }
        // Render superhero data
        renderHeroData();
    })

    // Create a function to render superhero data
    function renderHeroData() {
        // Clear heroInfo div
        $("#heroInfo").empty();

        // Get input value
        var queryName = $("#heroSearchInput").val().trim();
        var accessToken = "2839209799538545";
        var queryURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/" + accessToken + "/search/" + queryName;
        // Logic to solve CORS issue
        // jQuery.ajaxPrefilter(function (options) {
        //     if (options.crossDomain && jQuery.support.cors) {
        //         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        //     }
        // });
        // Request from superhero api
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // Get the results
            var results = response.results;

            // Create a div to hold the buttons
            var heroPaginationDiv = $("<div>").addClass("uk-width-1-1 uk-padding-remove uk-visible-toggle uk-margin-remove-top").attr({ tabindex: "-1", "uk-slider": "" });
            var heroPageNumsDiv = $("<div>").addClass("uk-slider-items uk-grid heroPageNums uk-text-large uk-flex uk-flex-center");
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
                var heroPageNumSpan = $("<span>").addClass("heroPageNum").attr({ "data-indexBtn": i + 1, "data-nameBtn": name });
                var userIconSpan = $("<span>").addClass("userIcon").attr("uk-icon", "user");
                // Create divs and add classes
                var heroResultContainer = $("<div>").addClass("heroResult uk-width-1-1").attr({ "data-index": i + 1, "data-name": name });
                var heroHeadDiv = $("<div>").addClass("heroHead uk-width-1-1 uk-flex uk-flex-column uk-padding-remove-top");
                var heroNameSpan = $("<span>").addClass("heroName uk-text-large")
                var publisherSpan = $("<span>").addClass("publisher uk-text-muted");
                var imgEl = $("<img>").addClass("heroImg uk-width-1-2@s uk-width-1-5@m").attr({ "data-src": imageUrl, "alt": name, "uk-img": "" });
                var heroAboutDiv = $("<div>").addClass("heroAbout").attr("uk-grid", "");
                var biographyDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-2@s uk-width-2-5@m");
                var biographyHeading = $("<div>").addClass("infoHeading uk-text-bold");
                var fullNameDiv = $("<div>").addClass("infoContent");
                var birthPlaceDiv = $("<div>").addClass("infoContent");
                var firstAppearanceDiv = $("<div>").addClass("infoContent");
                var alignmentDiv = $("<div>").addClass("infoContent");
                var occupationDiv = $("<div>").addClass("infoContent");
                var appearanceDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-2 uk-width-1-5@m");
                var appearanceHeading = $("<div>").addClass("infoHeading uk-text-bold");
                var genderDiv = $("<div>").addClass("infoContent");
                var raceDiv = $("<div>").addClass("infoContent");
                var heightDiv = $("<div>").addClass("infoContent");
                var weightDiv = $("<div>").addClass("infoContent");
                var eyeColorDiv = $("<div>").addClass("infoContent");
                var hairColorDiv = $("<div>").addClass("infoContent");
                var powerStatsDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-2 uk-width-1-5@m");
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
                heroAboutDiv.append(imgEl).append(biographyDiv).append(appearanceDiv).append(powerStatsDiv);
                heroHeadDiv.append(heroNameSpan).append(publisherSpan);
                heroResultContainer.append(heroHeadDiv).append(heroAboutDiv);
                $("#heroInfo").append(heroResultContainer);
            }

            // Prepend the pagination div to the heroInfo div
            $("#heroInfo").prepend(heroPaginationDiv.append(heroPageNumsDiv));

            // Add active to 1st button and view first search result
            heroPageNumsDiv.children(":first").children(":first").addClass("active");
            $("*[data-index='1']").css("display", "block");

            // If there is only 1 result
            if (results.length === 1) {
                heroPaginationDiv.css("display", "none");
            }

            // Render wallpaper images
            showWallpapers();

        })

        // Clear the input value
        $("#heroSearchInput").val("");
    }

    // Create function to render wallpaper images
    function showWallpapers() {
        // Take the text of the active button
        var dataName = $(".active").text();
        var AccessKey = "JINdia7koUjq_pI2PJaRPDBiIJfg9sGoHF4a3t_2olw";
        var queryUrl = "https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/photos/?client_id=" + AccessKey + "&query=" + dataName;
        // Logic to solve CORS issue
        // jQuery.ajaxPrefilter(function (options) {
        //     if (options.crossDomain && jQuery.support.cors) {
        //         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        //     }
        // });
        // Ajax  GET request
        $.ajax({
            url: queryUrl,
            method: "GET"
            // After data comes back from API
        }).then(function (response) {
            var totalNum = response.total;
            var result = response.results;
            // Create divs
            var imageContainer = $("<div>").addClass("imgContainer uk-width-1-1 uk-padding-remove uk-margin-remove-top");
            var slideShowDiv = $("<div>").addClass("uk-position-relative uk-visible-toggle uk-light").attr({ tabindex: "-1", "uk-slideshow": "ratio: 1:1" });
            var headingTitle = $('<div>').addClass("infoHeading uk-text-bold uk-text-muted uk-padding-small").text("Wallpapers Slideshow");
            var slideitemsUl = $("<ul>").addClass("uk-slideshow-items");
            var previousSlide = $("<a>").addClass("uk-position-center-left uk-position-small uk-hidden-hover").attr({ href: "#", "uk-slidenav-previous": "", "uk-slideshow-item": "previous" });
            var nextSlide = $("<a>").addClass("uk-position-center-right uk-position-small uk-hidden-hover").attr({ href: "#", "uk-slidenav-next": "", "uk-slideshow-item": "next" });
            // If no image results
            if (totalNum === 0) {
                // Then present an appropriate message
                imageContainer.append($("<p>").addClass("uk-padding uk-padding-remove-top uk-margin-remove-top").text("Sorry! No images found for " + dataName));
            } else if (totalNum < 4) {
                // Loop through image results array
                for (var i = 0; i < result.length; i++) {
                    // Render images
                    renderImages();
                }
                appendDivs();
            } else {
                // Loop through image results array, limit to 4
                for (var i = 0; i < 4; i++) {
                    // Render images
                    renderImages();
                }
                appendDivs();
            }
            // Prepend/Append divs
            imageContainer.prepend(headingTitle);
            $("#heroInfo").append(imageContainer);
            // Create a function to render the images
            function renderImages() {
                // Get image url and alt descriptions for each result
                var imageURL = result[i].urls.small;
                var altDescription = result[i]["alt_description"];
                // Crate image element
                var slideImg = $("<img>").attr({ src: imageURL, alt: altDescription, width: "100%", "uk-cover": "" });
                var liElement = $("<li>")
                // Append img to the container               
                liElement.append(slideImg);
                slideitemsUl.append(liElement);
            }
            // Create a function to append/prepend divs
            function appendDivs() {
                // Append divs
                slideShowDiv.append(slideitemsUl);
                slideShowDiv.append(previousSlide).append(nextSlide);
                imageContainer.append(slideShowDiv)
            }
        });
    }

    // Listen for a click event on the heroPageNum spans
    $(document).on("click", ".heroPageNum", function () {
        // If clicked, remove active class from other spans and add it to clicked span
        $(".heroPageNum").removeClass("active");
        $(this).addClass("active");
        // Delete image container first
        $(".imgContainer").remove();
        // Get the now active span's text
        var activePageNum = $(".active").attr("data-indexBtn");
        // Change heroResult to matching data-index
        $(".heroResult").css("display", "none");
        $("*[data-index='" + activePageNum + "']").css("display", "block");

        // Show wallpaper images result
        showWallpapers();
    })
})