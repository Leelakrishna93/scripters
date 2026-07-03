        const cars = [
            {
                name: "BMW",
                description: "Luxury German car",
                image: "https://picsum.photos/300/200?random=1"
            },
            {
                name: "Audi",
                description: "Premium performance car",
                image: "https://picsum.photos/300/200?random=2"
            },
            {
                name: "Mercedes",
                description: "Elegant luxury vehicle",
                image: "https://picsum.photos/300/200?random=3"
            },
            {
                name: "Tesla",
                description: "Electric future car",
                image: "https://picsum.photos/300/200?random=4"
            },
            {
                name: "Toyota",
                description: "Reliable family car",
                image: "https://picsum.photos/300/200?random=5"
            },
            {
                name: "Honda",
                description: "Efficient daily driver",
                image: "https://picsum.photos/300/200?random=6"
            },
            {
                name: "Ford",
                description: "American classic brand",
                image: "https://picsum.photos/300/200?random=7"
            },
            {
                name: "Hyundai",
                description: "Modern affordable car",
                image: "https://picsum.photos/300/200?random=8"
            },
            {
                name: "Kia",
                description: "Stylish compact vehicle",
                image: "https://picsum.photos/300/200?random=9"
            },
            {
                name: "Volkswagen",
                description: "Popular European car",
                image: "https://picsum.photos/300/200?random=10"
            }
        ];

        // DOM Selector
        const container = document.querySelector("#container");

        // Function to create cards
        function displayCars() {

            cars.forEach(car => {

                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${car.image}" alt="${car.name}">
                    <div class="card-content">
                        <h2>${car.name}</h2>
                        <p>${car.description}</p>
                        <button>View Details</button>
                    </div>
                `;

                container.appendChild(card);
            });

        }

        // Function Call
        displayCars();
