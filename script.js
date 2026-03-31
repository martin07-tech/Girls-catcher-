function analyzeBio() {
    const bio = document.getElementById('bioInput').value.toLowerCase();
    const feedback = document.getElementById('feedback');

    if (bio.length < 10) {
        feedback.innerText = "Too short. Give them a reason to be curious!";
        return;
    }

    if (bio.includes("pizza") || bio.includes("hiking")) {
        feedback.innerText = "Status: Cliché. Try to be more specific about what you enjoy!";
    } else if (bio.includes("don't") || bio.includes("not looking")) {
        feedback.innerText = "Status: Negative. Focus on what you DO want, not what you don't.";
    } else {
        feedback.innerText = "Status: Promising. Make sure your photos match this energy!";
    }
}
