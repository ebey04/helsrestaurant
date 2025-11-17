function loadAbout() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "About Hel's Homefries";

    const aboutSection = document.createElement("section");
    aboutSection.innerHTML= `Hel's started out as just a side hustle to feed the fallen on their road to Valhalla or the Underworld.
                                When all the hungry souls and warriors started stopping in Hel thought to herself "Damn,
                                here's the allowance mom & dad didn't want to give me!"
                                So she whipped up different concoctions that even the Valkyries can't pass up!
                                
                                <strong>Come in every Wednesday to try the wacky new creation for the week!</strong> `





    content.appendChild(aboutHeader);
    content.appendChild(aboutSection);
}

export default loadAbout;
