console.log("JavaScript Connected");

const searchBox = document.querySelector(".form-control");
const toolCards = document.querySelectorAll(".tool-card");

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase().trim();

    toolCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});  