// Chewbacca's Haikus For Sophisticated Scholars - Aarrrggghhh in Verse, You Must RWWWGH

class ChewbaccaHaikuGenerator {
  constructor() {
    this.haikus = [
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
  console.log('📜 Chewbacca\'s Haikus For Sophisticated Scholars is ready! Mwaaarrgh aarrrggghhh grrrr.');
}
