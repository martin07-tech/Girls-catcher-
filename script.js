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
  ]},
  {text:"She says 'You're funny!'", options:[
    {reply:"Thanks! You too.", feedback:"Good, balanced.", score:1},
    {reply:"Just kidding, I'm serious.", feedback:"Confusing.", score:-1},
    {reply:"Haha, glad you think so.", feedback:"Neutral.", score:0}
  ]},
  {text:"She asks 'Do you like me?'", options:[
    {reply:"I like getting to know you.", feedback:"Confident, safe.", score:2},
    {reply:"Yeah, a lot!", feedback:"Too eager.", score:-1},
    {reply:"Why do you ask?", feedback:"Neutral, curious.", score:0}
  ]},
  {text:"She teases you playfully.", options:[
    {reply:"Haha, you got me!", feedback:"Good, playful.", score:1},
    {reply:"Stop joking.", feedback:"Serious, weak.", score:-1},
    {reply:"You're mean!", feedback:"Insecure.", score:-2}
  ]},
  {text:"She compliments your style.", options:[
    {reply:"Thanks, I like your style too.", feedback:"Good, mutual.", score:1},
    {reply:"I know, right?", feedback:"Arrogant.", score:-1},
    {reply:"Thanks.", feedback:"Neutral.", score:0}
  ]},
  {text:"She ignores your joke.", options:[
    {reply:"No worries, maybe next time.", feedback:"Confident.", score:1},
    {reply:"Why didn't you laugh?", feedback:"Insecure.", score:-1},
    {reply:"Okay then.", feedback:"Neutral.", score:0}
  ]},
  {text:"She sends a meme.", options:[
    {reply:"Haha, good one!", feedback:"Neutral, fun.", score:1},
    {reply:"I don't get it.", feedback:"Boring.", score:-1},
    {reply:"Nice.", feedback:"Safe.", score:0}
  ]},
  {text:"She challenges you to a bet.", options:[
    {reply:"You're on!", feedback:"Confident, playful.", score:2},
    {reply:"I can't lose.", feedback:"Weak.", score:-1},
    {reply:"Maybe later.", feedback:"Neutral.", score:0}
  ]}
];

// Add more scenarios up to 50+ as you expand

// ===== DAILY MISSIONS =====
let dailyMissions = [
  "Say hi to a stranger today",
  "Hold eye contact for 3 seconds with someone",
  "Give a genuine compliment",
  "Start a short conversation",
  "Smile at someone today",
  "Send a friendly text to someone you haven't talked to in a while",
  "Ask someone a question about their day",
  "Offer help to someone",
  "Share a funny story with someone",
  "Initiate a small talk with a stranger"
];

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

// ===== LEVEL NAMES =====
function getLevelName(level){
  if(level<=5) return "Observer";
  if(level<=10) return "Initiator";
  if(level<=15) return "Composed";
  if(level<=20) return "Social Assassin";
  return "Legend";
}

// ===== UPDATE DASHBOARD =====
function updateDashboard(){
  levelSpan.textContent = level;
  streakSpan.textContent = streak;
  fearScoreSpan.textContent = fearScore;
  levelNameSpan.textContent = getLevelName(level);
  localStorage.setItem("streak", streak);
  localStorage.setItem("fearScore", fearScore);
  localStorage.setItem("level", level);
  dailyMissionText.textContent = dailyMissions[Math.floor(Math.random()*dailyMissions.length)];
}

// ===== START MISSION =====
dailyMissionBtn.addEventListener("click", ()=>{
  document.getElementById("dashboard").style.display="none";
  scenarioEngine.style.display="block";
  loadScenario();
});

// ===== LOAD SCENARIO =====
function loadScenario(){
  let scenario = scenarios[currentScenario];
  scenarioText.textContent = scenario.text;
  optionsDiv.innerHTML = "";
  scenario.options.forEach((opt,index)=>{
    let btn = document.createElement("button");
    btn.textContent = opt.reply;
    btn.onclick = ()=>{
      showFeedback(index);
      streak++;
      fearScore = Math.max(1, fearScore - opt.score); 
      level = Math.floor(streak/5)+1;
      updateDashboard();
    };
    optionsDiv.appendChild(btn);
  });
}

// ===== SHOW FEEDBACK =====
function showFeedback(index){
  let feedbackText = document.createElement("p");
  feedbackText.textContent = scenarios[currentScenario].options[index].feedback;
  optionsDiv.appendChild(feedbackText);
  nextScenarioBtn.style.display="block";
}

// ===== NEXT SCENARIO =====
nextScenarioBtn.addEventListener("click", ()=>{
  nextScenarioBtn.style.display="none";
  currentScenario++;
  if(currentScenario >= scenarios.length){
    alert("Daily mission complete!");
    scenarioEngine.style.display="none";
    document.getElementById("dashboard").style.display="block";
    currentScenario=0;
  } else {
    loadScenario();
  }
});

updateDashboard();