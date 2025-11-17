function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const breakfastHeader = document.createElement("h1");
    breakfastHeader.textContent = "Breakfast Homefries";

    const breakfastSection = document.createElement("section");
    breakfastSection.classList.add("breakfast");
    breakfastSection.innerHTML = `
                                    <h2>Odin's Omelet Fries</h2>
                                    <p>Scrambled eggs, fresh-cut potatoes, cheddar cheese & green peppers</p>
                                    <strong>$22.40</strong>
                                    `;

    const lunchHeader = document.createElement("h1");
    lunchHeader.textContent = "Lunch Fries";

    const lunchSection = document.createElement("section");
    lunchSection.classList.add("lunch");
    lunchSection.innerHTML = `
                                    <h2>Loki Lentil Fries</h2>
                                    <p>Sweet potato homefries fried up with mini marshmallow and cinnamon, 
                                    topped with whipped cream and onions</p>
                                    <strong>$20.40</strong>
                                    <h2>Thor Fries</h2>
                                    <p>Protein-packed with tofu, italian hot sausage and turkey bacon. 
                                    Topped with hot sauce that'll scorch your taste buds, goat cheese and green onions</p>
                                    <strong>$21.75</strong>
                                    `;


    content.appendChild(breakfastHeader);
    content.appendChild(breakfastSection);
    content.appendChild(lunchHeader);
    content.appendChild(lunchSection);
}

export default loadMenu;
