// Chewbacca's Haikus For Sophisticated Scholars - Rrwwgh in Verse, You Must Aarrgh

class ChewbaccaHaikuGenerator {
  constructor() {
    this.haikus = [
      "Rrwwgh aarrgh rwwgh grr\nRrwwgh aarrgh grr rrrwwgh rwwgh\nAarrgh grr rrwwgh hrrrn",

      "Hrrrn aarrgh rrrwwgh grr\nGrr rwwgh aarrgh rrwwgh hrrrn\nRrrwwgh grr aarrgh rwwgh",

      "Aarrgh rrwwgh grr hrrrn\nRwwgh rrrwwgh aarrgh grr rwwgh\nGrr hrrrn aarrgh rrwwgh",

      "Grr rrwwgh aarrgh rwwgh\nHrrrn rrrwwgh grr aarrgh rwwgh\nRwwgh aarrgh grr hrrrn",

      "Rrrwwgh hrrrn aarrgh grr\nRwwgh grr rrwwgh aarrgh hrrrn\nAarrgh rrrwwgh grr rwwgh",

      "Rwwgh grr hrrrn aarrgh\nAarrgh rrwwgh rrrwwgh grr rwwgh\nHrrrn grr aarrgh rrwwgh",

      "Rrwwgh grr aarrgh hrrrn\nRrrwwgh rwwgh grr aarrgh rrwwgh\nGrr aarrgh hrrrn rrrwwgh",

      "Aarrgh rwwgh hrrrn grr\nRrrwwgh aarrgh rrwwgh grr rwwgh\nHrrrn grr rrrwwgh aarrgh",

      "Grr aarrgh rrrwwgh rwwgh\nHrrrn rrwwgh grr aarrgh rrrwwgh\nRwwgh aarrgh grr hrrrn",

      "Hrrrn rrrwwgh grr rwwgh\nAarrgh grr rrwwgh hrrrn rrrwwgh\nRwwgh grr aarrgh rrwwgh",

      "Rrwwgh aarrgh hrrrn grr\nRwwgh rrrwwgh grr aarrgh rrwwgh\nGrr hrrrn rwwgh aarrgh",

      "Rrrwwgh grr aarrgh rwwgh\nHrrrn aarrgh rrwwgh grr rrrwwgh\nAarrgh rwwgh grr hrrrn",
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

    // 🔴 Easter egg: every 10th haiku, Vader speaks from the shadows
    if (this.haikuCount % 10 === 0) {
      console.log(
        '%c🔴 A presence stirs in the Dark Side of the console... 🔴',
        'color: red; font-weight: bold; font-size: 14px;'
      );
      console.log(
        '%c' +
        '  — A haiku, by Darth Vader —\n\n' +
        '  I am your father\n' +
        '  The Dark Side compiles faster\n' +
        '  Join me — merge conflict',
        'color: #cc0000; font-style: italic; font-size: 13px;'
      );
    }

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
    utterance.rate = 0.8;  // Slow and rumbly, like Chewie
    utterance.pitch = 0.3; // Very low pitch for that Wookiee growl
    utterance.volume = 1;

    // Speak
    window.speechSynthesis.speak(utterance);
  }
}

// Initialize the haiku generator
const chewbaccaHaiku = new ChewbaccaHaikuGenerator();

// Get DOM elements with null checks
const button = document.getElementById('haiku-button');
const haikuCountDisplay = document.getElementById('haiku-count');
const yodaHaikuDisplay = document.getElementById('yoda-haiku');
const speakButton = document.getElementById('speak-button');

// Verify all DOM elements exist before proceeding
if (!button || !haikuCountDisplay || !yodaHaikuDisplay || !speakButton) {
  console.error('❌ Error: Required DOM elements not found. Check your HTML.');
} else {
  // Set initial haiku
  const initialHaiku = chewbaccaHaiku.getRandomHaiku();
  yodaHaikuDisplay.textContent = initialHaiku;

  // Add event listener to generate button
  button.addEventListener('click', () => {
    // Get new haiku
    const haiku = chewbaccaHaiku.getRandomHaiku();
    yodaHaikuDisplay.textContent = haiku;

    // Update count
    const newCount = chewbaccaHaiku.incrementCount();
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
    const haiku = chewbaccaHaiku.getCurrentHaiku();
    // Remove line breaks for natural speech
    const haikuText = haiku.replace(/\n/g, ' ');
    chewbaccaHaiku.speakHaiku(haikuText);

    // Visual feedback
    speakButton.classList.add('speaking');
    setTimeout(() => {
      speakButton.classList.remove('speaking');
    }, 500);
  });

  // Allow keyboard activation (spacebar to generate)
  // More robust: listen on document and check for spacebar
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      // Only prevent default if we're not in an input field
      if (event.target === document.body || event.target.tagName !== 'INPUT') {
        event.preventDefault();
        button.click();
      }
    }
  });

  // Log to console that we're ready
  console.log('📜 Chewbacca\'s Haikus For Sophisticated Scholars is ready! Rrwwgh aarrgh grr, aarrgh you must.');
}
