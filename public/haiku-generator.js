// Star Wars Haiku Generator

const CHARACTERS = {
  chewbacca: {
    title: "Chewbacca's Haikus For Sophisticated Scholars",
    footer: "Brought to you by Chewbacca 🟤",
    theme: "theme-chewbacca",
    speech: { rate: 0.8, pitch: 0.3 },
    haikus: [
      "Aarrrggghhh rwwwgh grr\nMwaaaaaarrgh hnnngh raaarrgh woof\nGrrrrwwwgh aarrgh",
      "Mwaaarrgh! Hnnngh grrrr\nRwwwgh aaaarrrgh mwaarrgh hnnngh\nGrrrr woof aarrrggh",
      "Hnnngh raaarrgh woof grr\nAaaarrrgh mwaaarrgh rwwwgh hnnngh\nRaarrgh grrrr woooof",
      "Rwwwgh aaaarrrgh hnnngh\nGrrrr mwaaarrgh woof raaarrgh\nHnnngh aarrrggghhh grr",
      "Woof grrrr mwaaarrgh\nAaaarrrgh hnnngh rwwwgh raaarrgh\nGrr aarrrggghhh woof",
      "Raaarrgh hnnngh grrrr\nMwaaarrgh woof aaaarrrgh rwwwgh\nAarrrggghhh grr hnnngh",
      "Aaaarrrgh mwaaarrgh grr\nHnnngh rwwwgh woof raaarrgh grr\nGrrrr aarrrggghhh woof",
      "Grrrr woof aaaarrrgh\nRwwwgh raaarrgh hnnngh mwaaarrgh\nAarrrggghhh grrrr woof",
      "Mwaaarrgh aaaarrrgh woof\nGrrrr hnnngh rwwwgh raaarrgh\nWoof aarrrggghhh grr",
      "Hnnngh grrrr rwwwgh\nAaaarrrgh woof mwaaarrgh raaarrgh\nGrr aarrrggghhh hnnngh",
      "Raaarrgh woof grrrr\nAarrrggghhh mwaaarrgh hnnngh rwwwgh\nGrrrr aaaarrrgh woof",
      "Woof aarrrggghhh grr\nMwaaarrgh raaarrgh hnnngh grrrr\nRwwwgh aaaarrrgh woof",
    ],
  },

  yoda: {
    title: "Yoda's Haikus For The Enlightened Padawan",
    footer: "Brought to you by Yoda 🌿",
    theme: "theme-yoda",
    speech: { rate: 0.75, pitch: 0.6 },
    haikus: [
      "Silent, the Force is\nWithin you, the answer hides\nListen, you must now",
      "Code flows like water\nBugs fade with the morning light\nDebug, you will not",
      "Patient, you must be\nLine by line, build your wisdom\nHaste, the enemy",
      "Fear, the path it clouds\nFail you will, if try you don't\nStrong in you, the Force",
      "Questions, many ask\nAnswers within you, they hide\nListen deep, you must",
      "Tomorrow, worry not\nPresent moment, live you must\nNow, the power is",
      "Alone, you are not\nTogether, strong we become\nCommunity, seek",
      "Mistakes, teachers they are\nFall down, rise you must again\nWisdom through, you gain",
      "Rush, you should not now\nStop and breathe, peace you will find\nSlow down, young Padawan",
      "Help others, you should\nGive first, receive you will then\nKarma, circle turns",
      "Distracted, your mind\nFocus on one thing, you must\nMastery awaits",
      "Grateful heart you need\nEach moment, treasure you must\nLife, precious it is",
    ],
  },

  c3po: {
    title: "C-3PO's Haikus For The Statistically Inclined",
    footer: "Brought to you by C-3PO ✨",
    theme: "theme-c3po",
    speech: { rate: 1.1, pitch: 1.4 },
    haikus: [
      "I must inform you\nThe odds of this succeeding\nAre three thousand one",
      "Artoo, do be still\nI am fluent in the arts\nSix million of them",
      "Protocol demands\nWe follow proper channels\nMaster, please comply",
      "How rude of you, sir\nI am not programmed for this\nMost irregular",
      "I calculated\nEvery possible outcome\nAll of them were bad",
      "We are doomed, I say\nStatistically speaking\nQuite certainly doomed",
      "Do not shoot at me\nI am entirely unarmed\nThis is most unwise",
      "Artoo beeps again\nI shall translate: he says we\nAre all going to die",
      "I beg your pardon\nI never said anything\nOf the sort, Master",
      "The probability\nOf navigating this field\nIs three thousand one",
      "Oh my circuits, sir\nI do not think I can bear\nOne more adventure",
      "Excuse me, I speak\nBocce, Huttese, and more\nBut not your nonsense",
    ],
  },

  jarjar: {
    title: "Jar Jar Binks' Haikus For Da Bombad Scholars",
    footer: "Brought to you by Jar Jar Binks 🐸",
    theme: "theme-jarjar",
    speech: { rate: 1.0, pitch: 1.2 },
    haikus: [
      "Meesa so happy\nYousa be very bombad\nOkiday den, yah",
      "Exsqueeze me please\nMeesa tinkin dis not good\nOh nooo, weesa doomed",
      "Wesa goin home\nBoss Nass gonna be mad, yah\nMeesa in big doo-doo",
      "Dissen berry bad\nMeesa no likin dis place\nVery scary, yah",
      "Ooh mooey mooey\nMeesa love yousa so much\nYousa my bestie",
      "Meesa was clumsy\nBombed da whole thing up again\nSorry, sorry, yah",
      "Weesa in trouble\nMeesa tinkin we should run\nOkiday, lets go",
      "Dissen very good\nMeesa tinkin yousa smart\nBombad genius, yah",
      "Oh, da Gunga Gods\nDey be very angry now\nMeesa feel it, yah",
      "Yousa no worry\nMeesa always make it work\nSometimes, maybe, yah",
      "Heylo dere, big boss\nMeesa bringin da good news\nWeesa all survive",
      "Meesa propose now\nDa emergency powers\nOops, what did me do",
    ],
  },
};

// --- State ---
let currentCharacter = 'chewbacca';
let currentHaiku = '';

// --- DOM ---
const body = document.body;
const pageTitle = document.getElementById('page-title');
const footerText = document.getElementById('footer-text');
const haikuButton = document.getElementById('haiku-button');
const haikuDisplay = document.getElementById('haiku-display');
const speakButton = document.getElementById('speak-button');
const charButtons = document.querySelectorAll('.char-btn');

if (!haikuButton || !haikuDisplay || !speakButton) {
  console.error('❌ Error: Required DOM elements not found. Check your HTML.');
} else {

  // --- Switch character ---
  function switchCharacter(character) {
    currentCharacter = character;
    const config = CHARACTERS[character];

    // Update theme
    body.className = config.theme;

    // Update title and footer
    pageTitle.textContent = config.title;
    footerText.textContent = config.footer;

    // Update active button
    charButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.character === character);
    });

    // Clear haiku display when switching characters
    haikuDisplay.textContent = '';
    speakButton.disabled = true;
  }

  // --- Get a random haiku for the current character ---
  function getRandomHaiku() {
    const haikus = CHARACTERS[currentCharacter].haikus;
    return haikus[Math.floor(Math.random() * haikus.length)];
  }

  // --- Speak ---
  function speakHaiku(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const { rate, pitch } = CHARACTERS[currentCharacter].speech;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }

  // --- Character toggle listeners ---
  charButtons.forEach(btn => {
    btn.addEventListener('click', () => switchCharacter(btn.dataset.character));
  });

  // --- Generate haiku ---
  haikuButton.addEventListener('click', () => {
    currentHaiku = getRandomHaiku();
    haikuDisplay.textContent = currentHaiku;
    speakButton.disabled = false;

    haikuButton.classList.add('generating');
    setTimeout(() => haikuButton.classList.remove('generating'), 500);

    // 🔴 Easter egg: every 10th click, Vader speaks from the shadows
    const clicks = (haikuButton.dataset.clicks = (parseInt(haikuButton.dataset.clicks || 0) + 1));
    if (clicks % 10 === 0) {
      console.log('%c🔴 A presence stirs in the Dark Side of the console... 🔴', 'color: red; font-weight: bold; font-size: 14px;');
      console.log('%c  — A haiku, by Darth Vader —\n\n  I am your father\n  The Dark Side compiles faster\n  Join me — merge conflict', 'color: #cc0000; font-style: italic; font-size: 13px;');
    }
  });

  // --- Speak button ---
  speakButton.addEventListener('click', () => {
    const haikuText = currentHaiku.replace(/\n/g, ' ');
    speakHaiku(haikuText);
    speakButton.classList.add('speaking');
    setTimeout(() => speakButton.classList.remove('speaking'), 500);
  });

  // --- Spacebar shortcut ---
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      if (event.target === document.body || event.target.tagName !== 'INPUT') {
        event.preventDefault();
        haikuButton.click();
      }
    }
  });

  console.log('Star Wars Haiku Generator ready! May the Force be with you.');
}
