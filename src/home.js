function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "Hel's Horrific Homefries";

    const tagline = document.createElement("p");
    tagline.classList.add("tag");
    tagline.textContent = "Homefries from all the devilish places!";

    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.innerHTML =
        `<strong>Hours of Operation</strong> 
        Monday-Friday: 
        12am to 6am; 
        Saturday: 10pm to 8am; 
        Sunday: 12am to 5am`;

        const location = document.createElement('div');
        location.classList.add("location");
        location.textContent = "Located at the corner of the River Styx and Valhalla (on the right!)";

    content.appendChild(homeHeader);
    content.appendChild(tagline);
    content.appendChild(hours);
    content.appendChild(location);
}


export default loadHome;
