console.log("JavaScript Connected");

const searchBox = document.querySelector(".form-control");
const toolCards = document.querySelectorAll(".tool-card");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase().trim();

    let found = false;

    toolCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {

            card.style.display = "";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    if (found) {

        noResult.style.display = "none";

    } else {

        noResult.style.display = "block";

    }

});


const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const category = button.getAttribute("data-category");

        let found = false;

        toolCards.forEach(function(card){

            const cardCategory = card.getAttribute("data-category");

            if(category === "all" || cardCategory === category){

                card.style.display = "";
                found = true;

            } else {

                card.style.display = "none";

            }

        });


        if(found){
            noResult.style.display = "none";
        } else {
            noResult.style.display = "block";
        }

    });

});