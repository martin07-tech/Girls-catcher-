// ===== SCENARIOS =====
let scenarios = [
  {text:"She replies 'lol' to your message.", options:[
    {reply:"Keep it cool.", feedback:"Neutral, maintains frame.", score:1},
    {reply:"Why are you laughing?", feedback:"Weak, insecure.", score:-1},
    {reply:"Haha, good one.", feedback:"Safe, boring.", score:0}
  ]},
  {text:"She says 'I have a boyfriend'.", options:[
    {reply:"Respect, see you around.", feedback:"Good frame.", score:2},
    {reply:"Can I still take you out?", feedback:"Chasing, weak.", score:-2},
    {reply:"Oh, okay.", feedback:"Neutral, safe.", score:0}
  ]},
  {text:"She leaves you on seen for 2 hours.", options:[
    {reply:"Cool, busy day huh?", feedback:"Maintains frame.", score:1},
    {reply:"Why didn't you reply?", feedback:"Weak, desperate.", score:-1},
    {reply:"You're ignoring me?", feedback:"Insecure.", score:-2}
  ]}
]; // you can add more scenarios later

// ===== DAILY MISSIONS =====
let dailyMissions = [
  "Say hi to a stranger today",
  "Hold eye contact for 3 seconds with someone",
  "Give a genuine compliment"
]; // add more later

// ===== GLOBAL VARIABLES =====
let currentScenario = 0;
let streak = parseInt(localStorage.getItem("streak")) || 0;
let fearScore = parseInt(localStorage.getItem("fearScore")) || 5;
let level = parseInt(localStorage.getItem("level")) || 1;

const dailyMissionBtn = document.getElementById("dailyMissionBtn");
const scenarioEngine = document.getElementById("scenarioEngine");
const scenarioText = document.getElementById("scenarioText");
const optionsDiv = document.getElementById("options");
const nextScenarioBtn = document.getElementById("nextScenarioBtn");
const levelSpan = document.getElementById("level");
const streakSpan = document.getElementById("streak");
const fearScoreSpan = document.getElementById("fearScore");
const dailyMissionText = document.getElementById("dailyMissionText");
const levelNameSpan = document.getElementById("levelName");
const fearMeter = document.getElementById("fearMeter");
const streakMeter = document.getElementById("streakMeter");

// ===== LEVEL NAMES =====
function getLevelName(level){
  if(level<=5) return "Observer";
  if(level<=10) return "Initiator";
  if(level<=15) return "Composed";
  if(level<=20) return "Social Assassin";
  return "Legend";
}

// ===== DASHBOARD UPDATE =====
function updateMeters(){
  let fearPercent = Math.min(fearScore*10, 100);
  let streakPercent = (streak%5)*20;
  fearMeter.style.width = fearPercent + "%";
  streakMeter.style.width = streakPercent + "%";

  // Dynamic fear color
  let red = Math.min(255, 255 - (fearScore*15));
  let green = Math.min(255, fearScore*25);
  fearMeter.style.background = `linear-gradient(to right, rgb(${red},${green},0), #4caf50)`;
}

function updateDashboard(){
  levelSpan.textContent = level;
  streakSpan.textContent = streak;
  fearScoreSpan.textContent = fearScore;
  levelNameSpan.textContent = getLevelName(level);
  localStorage.setItem("streak", streak);
  localStorage.setItem("fearScore", fearScore);
  localStorage.setItem("level", level);
  dailyMissionText.textContent = dailyMissions[Math.floor(Math.random()*dailyMissions.length)];
  updateMeters();
}

// ===== START MISSION =====
dailyMissionBtn.addEventListener("click", ()=>{
  document.getElementById("dashboard").style.display="none";
  scenarioEngine.style.display="block";
  currentScenario = 0; // reset scenario
  loadScenario();
});

// ===== LOAD SCENARIO =====
function loadScenario(){
  let scenario = scenarios[currentScenario];
  scenarioText.textContent = scenario.text;
  optionsDiv.innerHTML = "";
  nextScenarioBtn.style.display = "none";

  scenario.options.forEach((opt,index)=>{
    let btn = document.createElement("button");
    btn.textContent = opt.reply;
    btn.onclick = ()=>{
      // Apply scores
      streak++;
      fearScore = Math.max(1, fearScore - opt.score); 
      level = Math.floor(streak/5)+1;
      updateDashboard();

      // Show feedback
      optionsDiv.innerHTML = `<p>${opt.feedback}</p>`;
      nextScenarioBtn.style.display = "block";

      // Confetti on level-up
      if(opt.score>0 && streak%5===0) triggerConfetti();
    };
    optionsDiv.appendChild(btn);
  });
}

// ===== NEXT SCENARIO =====
nextScenarioBtn.addEventListener("click", ()=>{
  currentScenario++;
  if(currentScenario >= scenarios.length){
    alert("Daily mission complete!");
    scenarioEngine.style.display="none";
    document.getElementById("dashboard").style.display="block";
  } else {
    loadScenario();
  }
});

updateDashboard();

// ===== CONFETTI =====
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let confetti = [];
for(let i=0;i<100;i++){
  confetti.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*6+2,d:Math.random()*50});
}
function drawConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetti.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,0,0.8)";
    ctx.fill();
    p.y += Math.cos(p.d) + 2 + p.r/2;
    p.x += Math.sin(p.d);
    if(p.y > canvas.height) { p.y = 0; p.x = Math.random()*canvas.width; }
  });
  requestAnimationFrame(drawConfetti);
}
let confettiActive = false;
function triggerConfetti(){
  if(confettiActive) return;
  confettiActive=true;
  setTimeout(()=>{ confettiActive=false; }, 2000);
}
drawConfetti();