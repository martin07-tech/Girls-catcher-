let currentXP = 1250;
let missionsDone = 12;

function showPage(pageId) {
    // Hide all pages
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('portal-page').style.display = 'none';
    document.getElementById('success-page').style.display = 'none';
    document.getElementById('legal-page').style.display = 'none';

    // Show selected page
    document.getElementById(pageId + '-page').style.display = pageId === 'portal' ? 'flex' : 'block';
    
    // Scroll to top
    window.scrollTo(0,0);
}

function completeMission(btn, xp) {
    if(btn.disabled) return;
    
    btn.innerText = "✓ AWARDED";
    btn.style.background = "#28a745";
    btn.disabled = true;

    // Update XP
    currentXP += xp;
    missionsDone += 1;
    document.getElementById('userXP').innerText = currentXP;
    document.getElementById('userMissions').innerText = missionsDone + " Missions";

    alert(`Mission Complete! +${xp} XP Added to your profile.`);
}
