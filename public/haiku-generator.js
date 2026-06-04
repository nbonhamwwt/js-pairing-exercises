// Star Wars Haiku Generator

const CHARACTERS = {
  chewbacca: {
    title: "Chewbacca's Haikus For Sophisticated Scholars",
    footer: "Brought to you by Chewbacca 🟤",
    theme: "chewbacca",
    speech: { rate: 0.8, pitch: 0.1, lang: 'de-DE' },
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
    theme: "yoda",
    speech: { rate: 0.75, pitch: 0.6, lang: 'en-US' },
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
    theme: "c3po",
    speech: { rate: 1.1, pitch: 1.4, lang: 'en-GB' },
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
    theme: "jarjar",
    speech: { rate: 1.2, pitch: 1.3, lang: 'en-IE' },
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

// ── State ──────────────────────────────────────────
let currentCharacter = 'chewbacca';
let currentHaiku = '';
let clickCount = 0;

// ── Resolved voices cache (populated once voices load) ─
const resolvedVoices = {};

// ── Known male voice names (priority order) ────────
const MALE_VOICE_NAMES = [
  'Google UK English Male', 'Google Deutsch',
  'Daniel', 'Malcolm', 'Alex', 'Fred', 'Tom',
  'Markus', 'Stefan', 'Yannick',
  'Microsoft David', 'Microsoft Mark', 'Microsoft George', 'Microsoft Stefan',
  'Male'
];

// ── Known female voice names (blocklist) ───────────
const FEMALE_VOICE_NAMES = [
  'Female', 'Zira', 'Hazel', 'Susan', 'Samantha', 'Victoria',
  'Karen', 'Moira', 'Fiona', 'Tessa', 'Anna', 'Hedda', 'Google US English'
];

// ── Find the best male voice for a given lang ──────
// Fallback strategy (4 passes):
//   1. Exact lang match + known male name (priority order)
//   2. Base language match (e.g. 'en' from 'en-IE') + known male name (priority order)
//   3. Exact lang match + not in female blocklist
//   4. Base language match + not in female blocklist
//   5. Returns null — browser uses its default
function findMaleVoice(lang) {
  var voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  var langPrefix = lang.split('-')[0].toLowerCase();

  function isNotFemaleName(voice) {
    return !FEMALE_VOICE_NAMES.some(function(name) {
      return voice.name.indexOf(name) !== -1;
    });
  }

  // 1. Exact lang + known male name (respect priority order)
  for (var i = 0; i < MALE_VOICE_NAMES.length; i++) {
    var maleName = MALE_VOICE_NAMES[i];
    var found = voices.find(function(v) {
      return v.lang === lang && v.name.indexOf(maleName) !== -1;
    });
    if (found) return found;
  }

  // 2. Base language + known male name (respect priority order)
  for (var j = 0; j < MALE_VOICE_NAMES.length; j++) {
    var maleName2 = MALE_VOICE_NAMES[j];
    var found2 = voices.find(function(v) {
      return v.lang.toLowerCase().indexOf(langPrefix) === 0 && v.name.indexOf(maleName2) !== -1;
    });
    if (found2) return found2;
  }

  // 3. Exact lang + not female
  var exactNotFemale = voices.find(function(v) {
    return v.lang === lang && isNotFemaleName(v);
  });
  if (exactNotFemale) return exactNotFemale;

  // 4. Base language + not female
  var prefixNotFemale = voices.find(function(v) {
    return v.lang.toLowerCase().indexOf(langPrefix) === 0 && isNotFemaleName(v);
  });
  if (prefixNotFemale) return prefixNotFemale;

  return null;
}

// ── Resolve and cache voices for all characters ──────
function resolveAllVoices() {
  var voices = window.speechSynthesis.getVoices();

  // Log all available voices
  console.log('🎙️ Available voices (' + voices.length + '):');
  voices.forEach(function(v) {
    console.log('  ' + v.name + ' | ' + v.lang + ' | ' + (v.localService ? 'local' : 'network'));
  });

  Object.keys(CHARACTERS).forEach(function(key) {
    var voice = findMaleVoice(CHARACTERS[key].speech.lang);
    resolvedVoices[key] = voice;
    console.log(
      '🎙️ ' + key + ': ' + (voice ? '"' + voice.name + '" (' + voice.lang + ')' : 'no voice found, using browser default')
    );
  });
}

// ── DOM ────────────────────────────────────────────
const pageTitle    = document.getElementById('page-title');
const footerText   = document.getElementById('footer-text');
const haikuButton  = document.getElementById('haiku-button');
const haikuDisplay = document.getElementById('haiku-display');
const speakButton  = document.getElementById('speak-button');
const charButtons  = document.querySelectorAll('.char-btn');

if (!pageTitle || !footerText || !haikuButton || !haikuDisplay || !speakButton || charButtons.length === 0) {
  console.error('❌ Required DOM elements not found.');
} else {

  // ── Switch character ─────────────────────────────
  function switchCharacter(character) {
    currentCharacter = character;
    const config = CHARACTERS[character];

    // Swap data-theme on <body> — CSS vars update instantly
    document.body.setAttribute('data-theme', config.theme);

    // Update text
    pageTitle.textContent = config.title;
    footerText.textContent = config.footer;

    // Update active toggle button
    charButtons.forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-character') === character);
    });

    // Clear haiku when switching
    haikuDisplay.textContent = '';
    speakButton.disabled = true;
  }

  // ── Generate haiku ───────────────────────────────
  function generateHaiku() {
    var haikus = CHARACTERS[currentCharacter].haikus;
    currentHaiku = haikus[Math.floor(Math.random() * haikus.length)];
    haikuDisplay.textContent = currentHaiku;
    speakButton.disabled = false;

    haikuButton.classList.add('generating');
    setTimeout(function() { haikuButton.classList.remove('generating'); }, 500);

    // 🔴 Easter egg: every 10th click, Vader speaks
    clickCount++;
    if (clickCount % 10 === 0) {
      console.log('%c🔴 A presence stirs in the Dark Side of the console... 🔴', 'color:red;font-weight:bold;font-size:14px;');
      console.log('%c  — A haiku, by Darth Vader —\n\n  I am your father\n  The Dark Side compiles faster\n  Join me — merge conflict', 'color:#cc0000;font-style:italic;font-size:13px;');
    }
  }

  // ── Speak ────────────────────────────────────────
  function speakHaiku() {
    if (!currentHaiku) return;
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(currentHaiku.replace(/\n/g, ' '));
    var speechConfig = CHARACTERS[currentCharacter].speech;
    utterance.lang   = speechConfig.lang;
    utterance.rate   = speechConfig.rate;
    utterance.pitch  = speechConfig.pitch;
    utterance.volume = 1;

    // Assign resolved male voice if available
    var resolvedVoice = resolvedVoices[currentCharacter];
    if (resolvedVoice) {
      utterance.voice = resolvedVoice;
      console.log('🎙️ Voice selected: ' + resolvedVoice.name + ' (' + resolvedVoice.lang + ')');
    }

    window.speechSynthesis.speak(utterance);
    speakButton.classList.add('speaking');
    setTimeout(function() { speakButton.classList.remove('speaking'); }, 500);
  }

  // ── Event listeners ──────────────────────────────
  charButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      switchCharacter(btn.getAttribute('data-character'));
    });
  });

  haikuButton.addEventListener('click', generateHaiku);
  speakButton.addEventListener('click', speakHaiku);

  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && event.target.tagName !== 'BUTTON' && event.target.tagName !== 'INPUT') {
      event.preventDefault();
      generateHaiku();
    }
  });

  // ── Load voices ───────────────────────────────────
  // getVoices() is async in most browsers — the voiceschanged event fires
  // once the list is populated. We also call it immediately in case the
  // browser has already loaded them synchronously (e.g. Firefox).
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = resolveAllVoices;
  }
  resolveAllVoices();

  console.log('Star Wars Haiku Generator ready!');
}
