// Chewbacca's Airhorn - RRWWGH with the Force, you must!

class AirhornSoundGenerator {
  constructor() {
    this.audioContext = null;
    this.honkCount = 0;
    this.chewbaccaQuotes = [
      "RRWWGH. Aarrgh rwwgh grr. RRWWGH.",
      "Hrrrn aarrgh. Rwwgh grr rrrwwgh. AARRGH.",
      "Grr rrwwgh aarrgh. RRRWWGH. Hrrrn.",
      "AARRGH RRWWGH GRR. Rwwgh hrrrn aarrgh.",
      "Rrrwwgh... aarrgh grr. RRWWGH RRWWGH.",
      "Hrrrn. Grr aarrgh rrrwwgh. AARRGH.",
      "RWWGH GRR AARRGH. Hrrrn rrwwgh grr.",
      "Aarrgh rrrwwgh hrrrn. GRR. RRWWGH.",
      "Grr hrrrn aarrgh rwwgh. RRRWWGH GRR.",
      "AARRGH. Rrwwgh grr hrrrn. Rrrwwgh aarrgh.",
      "Rwwgh aarrgh grr. HRRRN. RRWWGH GRR.",
      "RRRWWGH AARRGH. Grr hrrrn rwwgh. Rrwwgh.",
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
    return this.chewbaccaQuotes[Math.floor(Math.random() * this.chewbaccaQuotes.length)];
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
console.log('🟤 Chewbacca\'s Airhorn is ready! RRWWGH with the Force, you must.');
