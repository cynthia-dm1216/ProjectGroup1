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
    $("#heroForm").on("submit", function (e) { // Change to target form and submit event when HTML is ready
        e.preventDefault();

        // Superhero API ---------WORKS!!!        
        var queryName = $("#heroSearchInput").val().trim();
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

            // Loop through results
            if (results.length > 1) {
                // Create a div to hold the buttons
                var heroPaginationDiv = $("<div>").addClass("heroPagination uk-width-1-1 uk-child-width-expand uk-margin-remove uk-flex uk-flex-center uk-text-center uk-text-bold");

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
                    var heroResultContainer = $("<div>").addClass("heroResult uk-width-1-1").attr("data-index", i + 1);
                    var heroHeadDiv = $("<div>").addClass("heroHead uk-width-1-1 uk-flex uk-flex-column");
                    var heroNameSpan = $("<span>").addClass("heroName uk-text-large");
                    var publisherSpan = $("<span>").addClass("publisher uk-text-muted");
                    var imgEl = $("<img>").addClass("heroImg").attr({ "data-src": imageUrl, "alt": name, "uk-img": "" });
                    var heroAboutDiv = $("<div>").addClass("heroAbout").attr("uk-grid", "");
                    var biographyDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-2@s");
                    var biographyHeading = $("<div>").addClass("infoHeading uk-text-bold uk-text-muted");
                    var fullNameDiv = $("<div>").addClass("infoContent");
                    var birthPlaceDiv = $("<div>").addClass("infoContent");
                    var firstAppearanceDiv = $("<div>").addClass("infoContent");
                    var alignmentDiv = $("<div>").addClass("infoContent");
                    var occupationDiv = $("<div>").addClass("infoContent");
                    var appearanceDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-4@s uk-width-1-2");
                    var appearanceHeading = $("<div>").addClass("infoHeading uk-text-bold uk-text-muted");
                    var genderDiv = $("<div>").addClass("infoContent");
                    var raceDiv = $("<div>").addClass("infoContent");
                    var heightDiv = $("<div>").addClass("infoContent");
                    var weightDiv = $("<div>").addClass("infoContent");
                    var eyeColorDiv = $("<div>").addClass("infoContent");
                    var hairColorDiv = $("<div>").addClass("infoContent");
                    var powerStatsDiv = $("<div>").addClass("aboutCategory uk-flex uk-flex-column uk-width-1-4@s uk-width-1-2");
                    var powerStatsHeading = $("<div>").addClass("infoHeading uk-text-bold uk-text-muted");
                    var intelligenceDiv = $("<div>").addClass("infoContent");
                    var strengthDiv = $("<div>").addClass("infoContent");
                    var speedDiv = $("<div>").addClass("infoContent");
                    var durabilityDiv = $("<div>").addClass("infoContent");
                    var powerDiv = $("<div>").addClass("infoContent");
                    var combatDiv = $("<div>").addClass("infoContent");
                    // Add texts
                    newSpanButton.text(heroResultContainer.attr("data-index"));
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
                    heroPaginationDiv.append(newSpanButton);
                    powerStatsDiv.append(powerStatsHeading).append(intelligenceDiv).append(strengthDiv).append(speedDiv).append(durabilityDiv).append(powerDiv).append(combatDiv);
                    appearanceDiv.append(appearanceHeading).append(genderDiv).append(raceDiv).append(heightDiv).append(weightDiv).append(eyeColorDiv).append(hairColorDiv);
                    biographyDiv.append(biographyHeading).append(fullNameDiv).append(birthPlaceDiv).append(firstAppearanceDiv).append(alignmentDiv).append(occupationDiv);
                    heroAboutDiv.append(biographyDiv).append(appearanceDiv).append(powerStatsDiv);
                    heroHeadDiv.append(heroNameSpan).append(publisherSpan);
                    heroResultContainer.append(heroHeadDiv).append(imgEl).append(heroAboutDiv);
                    $("#heroInfo").append(heroResultContainer);
                }
                // Prepend the pagination div to the heroInfo div
                $("#heroInfo").prepend(heroPaginationDiv);

                // Add active to 1st button and view first search result
                heroPaginationDiv.children(":first").addClass("active");
                $("div[data-index*=1]").css("display", "block");
            }

        })

    })

    // Listen for an event on the heroPageNum spans
    $(document).on("click", ".heroPageNum", function () {
        // If clicked, add class active and remove it from other spans
        $(".heroPageNum").removeClass("active");
        console.log($(this))
        $(this).addClass("active");
        // Show result based on active heroPageNum
        var activePageNum = $(".active").text();
        // Change heroResult to matching data-index
        $(".heroResult").css("display", "none");
        $("div[data-index*=" + activePageNum + "]").css("display", "block");

    })


    // Cynthia
    // WHEN I scroll down even more
    // THEN I am presented with images of wallpapers related to the superhero
    // Get data from image api
    // Render data on DOM
})