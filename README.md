# js-pairing-exercises

Javascript pairing exercises

This repo provides an easy to use starting point for working through some Javascript pairing exercises. The repo includes a set of tests that require implementation work to get passing. The excercises are focused on reading from a provided mock api and then sorting, transforming, and merging the data to meet the test expectations.

A working mock api, `apiClient.js`, is provided for use. The client thinly wraps axios to provide asynchronous promise-based access to the mock api content.

# Getting Started

- Start the mock api

  - `npm run api`

- Start the tests

  - `npm test`
  - Jest is the testing framework and runner. Jest is started in watch mode so it will rerun tests automatically when project files are saved.
  - The `apiClient.test.js` tests are complete and exist only to verify that the mock api is running and correctly configured. The mock api client must be running to support the `apiHelpers.js` functions

- Complete the helper implementations
  - `apiHelpers.js` should be updated with helper method implementations to get the tests found in `apiHelpers.test.js` to pass.
  - To reduce the amount of alarming red logging on the first run all but the first of the `apiHelpers.test.js` tests are skipped. Remove the `x` from an `xtest` test definition to stop skipping that test.

---

# 🎺 Yoda's Airhorn Web Application

A fun interactive web application where you can click a button to activate an airhorn sound, powered by the Web Audio API and guided by Yoda's wisdom!

## Features

- **Interactive Airhorn Button** — Click to activate the airhorn sound
- **Honk Counter** — Tracks how many times you've activated the airhorn
- **Yoda Wisdom** — Random Yoda quotes appear with each honk
- **Keyboard Support** — Press spacebar to activate the airhorn
- **Responsive Design** — Works on desktop and mobile devices
- **Web Audio API** — Sound is generated programmatically (no external audio files needed)
- **Smooth Animations** — Visual feedback on button clicks

## Running the Web Application

Start the web server:

```bash
npm run web
```

This will:
- Start an HTTP server on port 8080
- Automatically open your browser to `http://localhost:8080`
- Serve the files from the `public/` directory

You can also manually navigate to `http://localhost:8080` in your browser if the automatic open doesn't work.

## How to Use

1. Click the large pink "HONK!" button to activate the airhorn
2. Watch the honk counter increase
3. Read Yoda's wisdom that appears with each honk
4. Alternatively, press the spacebar to activate the airhorn

## Project Structure

```
public/
├── index.html       # Main HTML file with page structure
├── style.css        # Styling and animations
└── airhorn.js       # Web Audio API sound generation and interactivity
```

## Technical Details

### Sound Generation

The airhorn sound is generated using the Web Audio API:
- Multiple oscillators create a rich, layered sound
- Frequency modulation creates the "honk" effect
- Noise layer adds texture and realism
- Envelope shaping controls volume over time

### Design

- **Frontend Framework**: Vanilla HTML/CSS/JavaScript (no dependencies)
- **Sound API**: Web Audio API (browser native)
- **Styling**: CSS3 with gradients, animations, and responsive design
- **Theme**: Yoda-inspired with purple/pink gradient and wisdom quotes

## Browser Compatibility

Works in all modern browsers that support:
- Web Audio API
- ES6 JavaScript
- CSS3 Flexbox and Gradients

Tested on:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Yoda Quotes

The application includes 12 Yoda-themed quotes that appear randomly with each honk. Some examples:

- "Honk, you must. Silence, golden it is not."
- "Strong with the Force, this airhorn is."
- "Nine-hundred years old, I am. Never tire of honking, I do not."

## Future Enhancements

Possible additions:
- Different airhorn sounds to choose from
- Sound volume control
- Leaderboard to track all-time honks
- Multiplayer mode
- Sound visualization
- Custom Yoda quote editor

---

*Brought to you by Yoda 🌿*
