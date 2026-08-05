console.log("JavaScript Connected");

const searchBox = document.querySelector(".form-control");
const toolCards = document.querySelectorAll(".tool-card");
const noResult = document.getElementById("noResult");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = "all";

function filterTools() {

    const searchText = searchBox.value.toLowerCase().trim();

    let found = false;

    toolCards.forEach(function(card) {

        const cardText = card.textContent.toLowerCase();
        const cardCategory = card.getAttribute("data-category");

        const matchesSearch = cardText.includes(searchText);
        const matchesCategory = 
            selectedCategory === "all" || cardCategory === selectedCategory;


        if(matchesSearch && matchesCategory) {

            card.style.display = "";
            found = true;

        } else {

            card.style.display = "none";

        }

    });


    if(found) {
        noResult.style.display = "none";
    } else {
        noResult.style.display = "block";
    }

}


// Search Event
searchBox.addEventListener("input", function() {

    filterTools();

});


// Category Filter Event
filterButtons.forEach(function(button){

    button.addEventListener("click", function(){

        selectedCategory = button.getAttribute("data-category");

        filterTools();

    });

});