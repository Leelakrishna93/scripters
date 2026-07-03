const card =[
    {
        Image:"https://images.pexels.com/photos/5563315/pexels-photo-5563315.jpeg",
        Plant :"Plant Ganesh Favorite",
        description : "Yenugu Dantham.",
    },
    {
        Image:"https://images.pexels.com/photos/5563315/pexels-photo-5563315.jpeg",
        Plant :"Plant Ganesh Favorite",
        description : "Yenugu Dantham.",
    },
    {
        Image:"https://images.pexels.com/photos/5563315/pexels-photo-5563315.jpeg",
        Plant :"Plant Ganesh Favorite",
        description : "Yenugu Dantham.",
    },
    {
        Image:"https://images.pexels.com/photos/5563315/pexels-photo-5563315.jpeg",
        Plant :"Plant Ganesh Favorite",
        description : "Yenugu Dantham.",
    },
    {
        Image:"https://images.pexels.com/photos/5563315/pexels-photo-5563315.jpeg",
        Plant :"Plant Ganesh Favorite",
        description : "Yenugu Dantham.",
    },
    {
        Image:"https://images.pexels.com/photos/5563315/pexels-photo-5563315.jpeg",
        Plant :"Plant is used in poojas",
        description : "Dantham.",
    },
];

const container = document.querySelector("#container");
function displayCards (){
    card.forEach(cards => {
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${cards.Image}" alt="${cards.Plant}">
                    <div class="card-content">
                        <h2>${cards.Plant}</h2>
                        <p>${cards.description}</p>
                        <button>View Details</button>
                    </div>
        `;
        container.appendChild(card);
        
    });
};
displayCards();