// Yoda's Haikus for Boos - Wisdom in Verse, You Must Find

class YodaHaikuGenerator {
  constructor() {
    this.haikus = [
      "Silence, golden is\nYour mind, still it must become\nPeace within, you seek",
      
      "Code flows like water\nBugs fade with the morning light\nDebug, you will not",
      
      "Patient, you must be\nLine by line, build your wisdom\nHaste, the enemy",
      
      "Fear, the path it clouds\nFail you will, if try you don't\nForce, strong in you is",
      
      "Questions, many ask\nAnswers within you, they hide\nListen deep, you must",
      
      "Tomorrow, worry not\nPresent moment, live you must\nNow, the power is",
      
      "Alone, you are not\nTogether, strong we become\nCommunity, seek",
      
      "Mistakes, teachers they are\nFall down, rise you must again\nWisdom through, you gain",
      
      "Rushing through your days\nStop and breathe, peace you will find\nSlow down, young one, you",
      
      "Help others, you should\nGive first, receive you will then\nKarma, circle turns",
      
      "Distracted, your mind\nFocus on one thing, you must\nMastery awaits",
      
      "Grateful heart you need\nEach moment, treasure you must\nLife, precious it is",
    ];
    
    this.haikuCount = 0;
    this.currentHaiku = '';
  }

  getRandomHaiku() {
    const haiku = this.haikus[Math.floor(Math.random() * this.haikus.length)];
    this.currentHaiku = haiku;
    return haiku;
  }

  incrementCount() {
    this.haikuCount++;
    return this.haikuCount;
  }

  getCount() {
    return this.haikuCount;
  }

  getCurrentHaiku() {
    return this.currentHaiku;
  }

  speakHaiku(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice settings
    utterance.rate = 0.9; // Slightly slower for wisdom
    utterance.pitch = 0.8; // Lower pitch for Yoda's voice
    utterance.volume = 1;

    // Speak
    window.speechSynthesis.speak(utterance);
  }
}

// Initialize the haiku generator
const yodaHaiku = new YodaHaikuGenerator();

// Get DOM elements
const button = document.getElementById('haiku-button');
const haikuCountDisplay = document.getElementById('haiku-count');
const yodaHaikuDisplay = document.getElementById('yoda-haiku');
const speakButton = document.getElementById('speak-button');

// Set initial haiku
yodaHaikuDisplay.textContent = yodaHaiku.getRandomHaiku();

// Add event listener to generate button
button.addEventListener('click', () => {
  // Get new haiku
  const haiku = yodaHaiku.getRandomHaiku();
  yodaHaikuDisplay.textContent = haiku;

  // Update count
  const newCount = yodaHaiku.incrementCount();
  haikuCountDisplay.textContent = newCount;

  // Enable speak button
  speakButton.disabled = false;

  // Add animation class
  button.classList.add('generating');
  setTimeout(() => {
    button.classList.remove('generating');
  }, 500);
});

// Add event listener to speak button
speakButton.addEventListener('click', () => {
  const haiku = yodaHaiku.getCurrentHaiku();
  // Remove line breaks for natural speech
  const haikuText = haiku.replace(/\n/g, ' ');
  yodaHaiku.speakHaiku(haikuText);

  // Visual feedback
  speakButton.classList.add('speaking');
  setTimeout(() => {
    speakButton.classList.remove('speaking');
  }, 500);
});

// Allow keyboard activation (spacebar to generate)
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && event.target === document.body) {
    event.preventDefault();
    button.click();
  }
});

// Log to console that we're ready
console.log('📜 Yoda\'s Haikus for Boos is ready! Wisdom in verse, find you must.');
