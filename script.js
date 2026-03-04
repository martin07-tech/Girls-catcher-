let scenarios = [
  {
    text: "She replies 'lol' to your message.",
    options: [
      { reply: "Keep it cool.", feedback: "Neutral response, maintains frame." },
      { reply: "Why are you laughing?", feedback: "Weak. Shows insecurity." },
      { reply: "Haha, good one.", feedback: "Safe, but boring." }
    ]
  },
  {
    text: "She says 'I have a boyfriend'.",
    options: [
      { reply: "Respect, see you around.", feedback: "Good frame, no chasing." },
      { reply: "Can I still take you out?", feedback: "Bad. Chasing." },
      { reply: "Oh, okay.", feedback: "Neutral, safe." }
    ]
  }
];

let currentScenario = 0;

const dailyMissionBtn = document.getElementById("dailyMissionBtn");
const scenarioEngine = document.getElementById("scenarioEngine");
const scenarioText = document.getElementById("scenarioText");
const optionsDiv = document.getElementById("options");
const nextScenarioBtn = document.getElementById("nextScenarioBtn");

dailyMissionBtn.addEventListener("click", () => {
  document.getElementById("dashboard").style.display = "none";
  scenarioEngine.style.display = "block";
  loadScenario();
});

function loadScenario() {
  let scenario = scenarios[currentScenario];
  scenarioText.textContent = scenario.text;
  optionsDiv.innerHTML = "";
  scenario.options.forEach((opt, index) => {
    let btn = document.createElement("button");
    btn.textContent = opt.reply;
    btn.onclick = () => showFeedback(index);
    optionsDiv.appendChild(btn);
  });
}

function showFeedback(index) {
  let feedbackText = document.createElement("p");
  feedbackText.textContent = scenarios[currentScenario].options[index].feedback;
  optionsDiv.appendChild(feedbackText);
  nextScenarioBtn.style.display = "block";
}

nextScenarioBtn.addEventListener("click", () => {
  nextScenarioBtn.style.display = "none";
  currentScenario++;
  if(currentScenario >= scenarios.length) {
    alert("Daily mission complete!");
    scenarioEngine.style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    currentScenario = 0;
  } else {
    loadScenario();
  }
});