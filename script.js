const facts = [
    "Red tide is an example of an algae bloom, which are commonly caused by Phylum Pyrrophyta.",
    "Ringworm is an example of a fungi from the Phylum Deuteromycota.",
    "The antibiotic, Penicillin, is made from Penicillium from the Phylum Ascomycota.",
    "Phylum oomycota is the only phylum that produces motile spores.",
    "The Phylum Ascomycota undergoes mitosis as well as meiosis in order to reproduce sexually."
];

function playSound() {
    let audio = new Audio('sound.mp3'); 
    audio.play();
}

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById("factDisplay").textContent = randomFact;

    playSound();
}

