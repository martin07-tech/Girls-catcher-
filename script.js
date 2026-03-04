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
  ]},
  {text:"She compliments your haircut.", options:[
    {reply:"Thanks! Yours looks great too.", feedback:"Good, confident.", score:1},
    {reply:"I know, right?", feedback:"Arrogant.", score:-1},
    {reply:"Thanks.", feedback:"Safe.", score:0}
  ]},
  {text:"She asks 'Why are you single?'", options:[
    {reply:"Waiting for the right person.", feedback:"Good frame.", score:2},
    {reply:"I don't know.", feedback:"Weak.", score:-1},
    {reply:"Why do you ask?", feedback:"Neutral, curious.", score:0}
  ]},
  {text:"She posts a story you like.", options:[
    {reply:"React with a funny comment.", feedback:"Playful, confident.", score:1},
    {reply:"Like silently.", feedback:"Neutral, safe.", score:0},
    {reply:"Comment awkwardly.", feedback:"Weak.", score:-1}
  ]},
  {text:"She cancels plans last minute.", options:[
    {reply:"No worries, we’ll reschedule.", feedback:"Confident.", score:1},
    {reply:"Why? You promised!", feedback:"Weak, desperate.", score:-2},
    {reply:"Okay.", feedback:"Neutral.", score:0}
  ]},
  {text:"She sends a long text.", options:[
    {reply:"Read calmly, respond thoughtfully.", feedback:"Confident.", score:2},
    {reply:"Ignore.", feedback:"Weak, avoids.", score:-1},
    {reply:"Reply fast, over-eager.", feedback:"Weak.", score:-2}
  ]},
  {text:"She jokes about you.", options:[
    {reply:"Laugh with her.", feedback:"Good, playful.", score:1},
    {reply:"Take offense.", feedback:"Weak.", score:-2},
    {reply:"Ignore.", feedback:"Neutral.", score:0}
  ]},
  {text:"She compliments your personality.", options:[
    {reply:"Thanks! I like yours too.", feedback:"Good, balanced.", score:1},
    {reply:"I know, right?", feedback:"Arrogant.", score:-1},
    {reply:"Thanks.", feedback:"Safe.", score:0}
  ]},
  {text:"She asks personal questions.", options:[
    {reply:"Answer honestly, keep frame.", feedback:"Confident.", score:2},
    {reply:"Avoid answering.", feedback:"Weak.", score:-1},
    {reply:"Answer vaguely.", feedback:"Neutral.", score:0}
  ]},
  {text:"She shares an opinion you disagree with.", options:[
    {reply:"Respectfully discuss.", feedback:"Confident, mature.", score:2},
    {reply:"Argue aggressively.", feedback:"Weak.", score:-2},
    {reply:"Ignore her opinion.", feedback:"Neutral.", score:0}
  ]},
  {text:"She teases you about a mistake.", options:[
    {reply:"Laugh it off.", feedback:"Confident, playful.", score:1},
    {reply:"Get defensive.", feedback:"Weak.", score:-2},
    {reply:"Ignore.", feedback:"Neutral.", score:0}
  ]},
  {text:"She compliments your joke.", options:[
    {reply:"Thanks, glad you liked it.", feedback:"Good, balanced.", score:1},
    {reply:"I know, I'm funny.", feedback:"Arrogant.", score:-1},
    {reply:"Thanks.", feedback:"Neutral.", score:0}
  ]},
  {text:"She mentions an ex.", options:[
    {reply:"Stay calm, keep frame.", feedback:"Confident.", score:1},
    {reply:"Get jealous.", feedback:"Weak.", score:-2},
    {reply:"Change topic.", feedback:"Neutral.", score:0}
  ]},
  {text:"She says she's busy.", options:[
    {reply:"No worries, talk later.", feedback:"Confident.", score:1},
    {reply:"Why are you always busy?", feedback:"Weak.", score:-2},
    {reply:"Okay.", feedback:"Neutral.", score:0}
  ]},
  {text:"She shares a funny story.", options:[
    {reply:"Laugh and comment.", feedback:"Good, playful.", score:1},
    {reply:"Ignore the humor.", feedback:"Weak.", score:-1},
    {reply:"Change topic.", feedback:"Neutral.", score:0}
  ]},
  {text:"She invites you to an event.", options:[
    {reply:"Accept confidently.", feedback:"Good, confident.", score:2},
    {reply:"Decline nervously.", feedback:"Weak.", score:-2},
    {reply:"Maybe later.", feedback:"Neutral.", score:0}
  ]},
  {text:"She posts a story about friends.", options:[
    {reply:"React with a smile.", feedback:"Confident, playful.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Comment awkwardly.", feedback:"Weak.", score:-1}
  ]},
  {text:"She asks for advice.", options:[
    {reply:"Give honest advice confidently.", feedback:"Good.", score:2},
    {reply:"Avoid answering.", feedback:"Weak.", score:-2},
    {reply:"Give vague advice.", feedback:"Neutral.", score:0}
  ]},
  {text:"She shares music.", options:[
    {reply:"React positively.", feedback:"Confident.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Criticize.", feedback:"Weak.", score:-2}
  ]},
  {text:"She asks about your hobbies.", options:[
    {reply:"Talk confidently about interests.", feedback:"Good.", score:2},
    {reply:"Say you don’t have any.", feedback:"Weak.", score:-2},
    {reply:"Answer vaguely.", feedback:"Neutral.", score:0}
  ]},
  {text:"She posts a photo you like.", options:[
    {reply:"Comment positively.", feedback:"Confident.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Overlike repeatedly.", feedback:"Weak.", score:-2}
  ]},
  {text:"She shares a travel post.", options:[
    {reply:"React with curiosity.", feedback:"Confident.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Criticize.", feedback:"Weak.", score:-2}
  ]},
  {text:"She jokes about your fashion.", options:[
    {reply:"Laugh it off.", feedback:"Good, playful.", score:1},
    {reply:"Defensive.", feedback:"Weak.", score:-2},
    {reply:"Ignore.", feedback:"Neutral.", score:0}
  ]},
  {text:"She compliments your intelligence.", options:[
    {reply:"Thanks, I value yours too.", feedback:"Good, confident.", score:2},
    {reply:"I know.", feedback:"Arrogant.", score:-1},
    {reply:"Thanks.", feedback:"Neutral.", score:0}
  ]},
  {text:"She shares a challenge she faced.", options:[
    {reply:"Listen and support.", feedback:"Confident, mature.", score:2},
    {reply:"Ignore.", feedback:"Weak.", score:-2},
    {reply:"Give vague advice.", feedback:"Neutral.", score:0}
  ]},
  {text:"She sends a random emoji.", options:[
    {reply:"React playfully.", feedback:"Good, playful.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Respond awkwardly.", feedback:"Weak.", score:-2}
  ]},
  {text:"She tags you in a post.", options:[
    {reply:"React confidently.", feedback:"Good.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Respond awkwardly.", feedback:"Weak.", score:-2}
  ]},
  {text:"She teases your taste in music.", options:[
    {reply:"Laugh and comment.", feedback:"Confident, playful.", score:1},
    {reply:"Defensive.", feedback:"Weak.", score:-2},
    {reply:"Ignore.", feedback:"Neutral.", score:0}
  ]},
  {text:"She shares a memory.", options:[
    {reply:"React thoughtfully.", feedback:"Good, confident.", score:2},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Respond awkwardly.", feedback:"Weak.", score:-2}
  ]},
  {text:"She asks for your opinion on something.", options:[
    {reply:"Answer confidently.", feedback:"Good.", score:2},
    {reply:"Avoid answering.", feedback:"Weak.", score:-2},
    {reply:"Answer vaguely.", feedback:"Neutral.", score:0}
  ]},
  {text:"She shares a pet photo.", options:[
    {reply:"React with enthusiasm.", feedback:"Confident, playful.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Comment awkwardly.", feedback:"Weak.", score:-2}
  ]},
  {text:"She asks how your day was.", options:[
    {reply:"Answer positively and confidently.", feedback:"Good.", score:2},
    {reply:"Ignore or complain.", feedback:"Weak.", score:-2},
    {reply:"Answer vaguely.", feedback:"Neutral.", score:0}
  ]},
  {text:"She sends a motivational quote.", options:[
    {reply:"React positively.", feedback:"Confident.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Criticize it.", feedback:"Weak.", score:-2}
  ]},
  {text:"She shares a funny video.", options:[
    {reply:"Laugh and comment.", feedback:"Good, playful.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Criticize.", feedback:"Weak.", score:-2}
  ]},
  {text:"She asks about your weekend plans.", options:[
    {reply:"Share confidently.", feedback:"Good.", score:2},
    {reply:"Avoid answering.", feedback:"Weak.", score:-2},
    {reply:"Vague answer.", feedback:"Neutral.", score:0}
  ]},
  {text:"She mentions a group activity.", options:[
    {reply:"Show interest confidently.", feedback:"Good.", score:2},
    {reply:"Ignore.", feedback:"Weak.", score:-2},
    {reply:"Vague response.", feedback:"Neutral.", score:0}
  ]},
  {text:"She reacts positively to your story.", options:[
    {reply:"Acknowledge confidently.", feedback:"Good.", score:1},
    {reply:"Ignore.", feedback:"Weak.", score:-1},
    {reply:"Overreact.", feedback:"Weak.", score:-2}
  ]}
];
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
  "Initiate a small talk with a stranger",
  "Compliment someone's outfit",
  "Introduce yourself to someone new",
  "Ask for directions or help",
  "Say thank you sincerely",
  "Listen actively in a conversation",
  "Join a group conversation",
  "Ask someone's opinion on something",
  "Invite someone to do an activity",
  "Share a joke with someone",
  "Respond positively to compliments",
  "React to someone's story",
  "Send a meme to a friend",
  "Send a motivational message",
  "Ask someone about their hobbies",
  "Talk about a recent movie or series",
  "React positively to someone's post",
  "Ask someone about their weekend",
  "Offer advice to someone",
  "Congratulate someone on achievement",
  "Ask someone about their goals",
  "Start a conversation about music",
  "Share a personal story",
  "Laugh at a joke genuinely",
  "Send a random compliment",
  "Share something interesting you learned",
  "Ask someone about their favorite food",
  "Invite a friend for a walk",
  "Ask someone about their pets",
  "React to someone sharing photos",
  "Send a good morning/good night message",
  "Encourage someone in their project",
  "Ask someone about their family",
  "Give constructive feedback politely",
  "Start a conversation about sports",
  "React to someone's achievement",
  "Ask about someone's day positively",
  "Share an interesting article or link",
  "Comment on someone's post positively",
  "Invite someone to join a small challenge"
];
const fearMeter = document.getElementById("fearMeter");
const streakMeter = document.getElementById("streakMeter");

function updateMeters(){
  // Fear bar: if fearScore max is 10
  let fearPercent = Math.min(fearScore*10, 100);
  fearMeter.style.width = fearPercent + "%";
  
  // Streak bar: show progress to next 5 streaks
  let streakPercent = (streak%5)*20; // 5 streaks = full bar
  streakMeter.style.width = streakPercent + "%";
}

// Call this in updateDashboard
function updateDashboard(){
  levelSpan.textContent = level;
  streakSpan.textContent = streak;
  fearScoreSpan.textContent = fearScore;
  levelNameSpan.textContent = getLevelName(level);
  localStorage.setItem("streak", streak);
  localStorage.setItem("fearScore", fearScore);
  localStorage.setItem("level", level);
  dailyMissionText.textContent = dailyMissions[Math.floor(Math.random()*dailyMissions.length)];
  
  updateMeters(); // update meter bars
}