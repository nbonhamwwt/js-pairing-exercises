// Yoda's Airhorn - Click with the Force, you must!

class AirhornSoundGenerator {
  constructor() {
    this.audioContext = null;
    this.honkCount = 0;
    this.yodaQuotes = [
      "Honk, you must. Silence, golden it is not.",
      "Strong with the Force, this airhorn is.",
      "Patience, you have not. Honk again, you will.",
      "Wise, the sound of celebration is.",
      "Disturb the peace, we shall. Regret it, I will not.",
      "Feel the vibrations, you must.",
      "One with the airhorn, become you will.",
      "Honk responsibly, you should.",
      "The Force flows through this button, yes.",
      "Nine-hundred years old, I am. Never tire of honking, I do not.",
      "Funny, this sound is. Laugh, you should.",
      "Annoying neighbors, sorry I am not.",
    ];
  }

  initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playAirhorn() {
    this.initAudioContext();
    const ctx = this.audioContext;
    const now = ctx.currentTime;
    const duration = 0.5;

    // Create multiple oscillators for a rich airhorn sound
    const frequencies = [
      { freq: 800, time: 0, duration: 0.3 },
      { freq: 1200, time: 0.05, duration: 0.35 },
      { freq: 600, time: 0.1, duration: 0.4 },
    ];

    frequencies.forEach(({ freq, time, duration: dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.frequency.setValueAtTime(freq, now + time);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + time + dur * 0.3);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, now + time + dur);

      gain.gain.setValueAtTime(0.3, now + time);
      gain.gain.exponentialRampToValueAtTime(0.1, now + time + dur * 0.7);
      gain.gain.exponentialRampToValueAtTime(0, now + time + dur);

      osc.start(now + time);
      osc.stop(now + time + dur);
    });

    // Add some noise for extra "honk" character
    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseBuffer.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }

    const noiseSource = ctx.createBufferSource();
    const noiseGain = ctx.createGain();
    const noiseLowPass = ctx.createBiquadFilter();

    noiseSource.buffer = noiseBuffer;
    noiseSource.connect(noiseLowPass);
    noiseLowPass.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    noiseLowPass.type = 'lowpass';
    noiseLowPass.frequency.setValueAtTime(2000, now);
    noiseLowPass.frequency.exponentialRampToValueAtTime(500, now + duration);

    noiseGain.gain.setValueAtTime(0.2, now);
    noiseGain.gain.exponentialRampToValueAtTime(0, now + duration);

    noiseSource.start(now);
    noiseSource.stop(now + duration);
  }

  getRandomQuote() {
    return this.yodaQuotes[Math.floor(Math.random() * this.yodaQuotes.length)];
  }

  incrementCount() {
    this.honkCount++;
    return this.honkCount;
  }

  getCount() {
    return this.honkCount;
  }
}

// Initialize the airhorn
const airhorn = new AirhornSoundGenerator();

// Get DOM elements
const button = document.getElementById('airhorn-button');
const honkCountDisplay = document.getElementById('honk-count');
const yodaQuoteDisplay = document.getElementById('yoda-quote');

// Set initial quote
yodaQuoteDisplay.textContent = airhorn.getRandomQuote();

// Add event listener to button
button.addEventListener('click', () => {
  // Play the sound
  airhorn.playAirhorn();

  // Update count
  const newCount = airhorn.incrementCount();
  honkCountDisplay.textContent = newCount;

  // Update quote
  yodaQuoteDisplay.textContent = airhorn.getRandomQuote();

  // Add animation class
  button.classList.add('honking');
  setTimeout(() => {
    button.classList.remove('honking');
  }, 500);
});

// Allow keyboard activation (spacebar)
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    button.click();
  }
});

// Log to console that we're ready
console.log('🎺 Yoda\'s Airhorn is ready! Click with the Force, you must.');
