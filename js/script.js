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

const toolData = {

    chatgpt: {
        name: "ChatGPT",
        category: "AI Assistant",
        image: "images/chatgpt.png",
        description: "ChatGPT is an AI assistant that helps with writing, coding, problem solving, learning and productivity.",
        features: [
            "Content Writing",
            "Code Generation",
            "Problem Solving",
            "Learning Assistance",
            "Text Summarization"
        ],
        pricing: "Free & Paid Plans",
        link: "https://chat.openai.com"
    },


    gemini: {
        name: "Gemini",
        category: "AI Chatbot",
        image: "images/gemini.png",
        description: "Google Gemini helps users with writing, research, coding and productivity tasks.",
        features: [
            "AI Chat",
            "Research Assistance",
            "Coding Help",
            "Content Creation"
        ],
        pricing: "Free & Paid Plans",
        link: "https://gemini.google.com"
    },


    claude: {
        name: "Claude",
        category: "AI Assistant",
        image: "images/claude.png",
        description: "Claude helps with writing, analysis, coding and understanding long documents.",
        features: [
            "Writing",
            "Analysis",
            "Coding Support",
            "Document Understanding"
        ],
        pricing: "Free & Paid Plans",
        link: "https://claude.ai"
    },

    copilot: {
    name: "GitHub Copilot",
    category: "Coding",
    image: "images/copilot.png",
    description: "GitHub Copilot is an AI coding assistant that helps developers write code faster and improve productivity.",
    features: [
        "Code Suggestions",
        "Code Completion",
        "Bug Fixing Assistance",
        "Programming Help"
    ],
    pricing: "Paid Plans",
    link: "https://github.com/features/copilot"
},
midjourney: {
    name: "Midjourney",
    category: "Image Generation",
    image: "images/midjourney.png",
    description: "Midjourney is an AI image generation tool that creates high-quality images from text prompts.",
    features: [
        "AI Image Generation",
        "Creative Designs",
        "Text to Image",
        "Art Creation"
    ],
    pricing: "Paid Plans",
    link: "https://www.midjourney.com"
},
canva: {
    name: "Canva AI",
    category: "Design",
    image: "images/canva.png",
    description: "Canva AI helps users create presentations, graphics, social media designs and creative content easily.",
    features: [
        "AI Design Generation",
        "Presentation Creation",
        "Graphic Design",
        "Social Media Content"
    ],
    pricing: "Free & Paid Plans",
    link: "https://www.canva.com/ai-image-generator/"
},

};

const urlParams = new URLSearchParams(window.location.search);

const selectedTool = urlParams.get("tool");


if(selectedTool && toolData[selectedTool]) {

    const tool = toolData[selectedTool];


    document.getElementById("toolImage").src = tool.image;
    document.getElementById("toolImage").alt = tool.name;

    document.getElementById("toolName").textContent = tool.name;

    document.getElementById("toolCategory").textContent = tool.category;

    document.getElementById("toolDescription").textContent = tool.description;


    const featureList = document.getElementById("toolFeatures");

    featureList.innerHTML = "";

    tool.features.forEach(function(feature){

        const li = document.createElement("li");

        li.textContent = feature;

        featureList.appendChild(li);

    });


    document.getElementById("toolPricing").textContent = tool.pricing;


    document.getElementById("toolLink").href = tool.link;

}