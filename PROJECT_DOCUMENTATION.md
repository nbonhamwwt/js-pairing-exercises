# Project Documentation

## Project Overview

**js-pairing-exercises** is a JavaScript learning and practice repository designed for pairing exercises and collaborative coding sessions. The project provides a foundation for practicing JavaScript fundamentals with a focus on API integration, service layers, and test-driven development.

The project includes a mock API server (powered by json-server) that serves sample data, a service layer for API interactions, and a comprehensive test suite using Jest. It's structured to teach best practices in API client design, error handling, and unit testing patterns.

### Key Characteristics

- **Educational Focus** — JavaScript patterns and best practices
- **Mock API Server** — Realistic API integration practice with json-server
- **Test-First Development** — Comprehensive Jest test suite
- **Clean Separation of Concerns** — API client, services, and tests are clearly separated
- **Modern Tooling** — Configured with Babel, ESLint, and Prettier

---

## Architecture

The project follows a **layered architecture** pattern that emphasizes separation of concerns and testability:

```
Tests
  ↓
Service Layer (captains-service.js)
  ↓
API Client Layer (apiClient.js)
  ↓
HTTP (axios)
  ↓
Mock API (json-server)
```

### Layer Responsibilities

- **Service Layer** (`captains-service.js`) — Business logic, data transformation, orchestration
- **API Client Layer** (`apiClient.js`) — HTTP communication, error handling, configuration
- **Tests** (`*.test.js`) — Verify behavior at each layer independently through mocking

### Module Pattern

Each module exports functions or objects for clean, composable code:

```javascript
// apiClient.js
export default {
  get: async (url) => { ... },
  post: async (url, data) => { ... }
};

// captains-service.js
export const getCaptains = async () => { ... };
export const getCaptainById = async (id) => { ... };
```

---

## API Endpoints

The project uses **json-server** to provide a mock REST API based on `api/db.json`. All standard REST operations are automatically available.

### Base URL
```
http://localhost:5000/api
```

### Captains Resource

```
GET    /captains              # List all captains
GET    /captains/:id          # Get specific captain
POST   /captains              # Create new captain
PUT    /captains/:id          # Update captain
DELETE /captains/:id          # Delete captain
```

### Ships Resource

```
GET    /ships                 # List all ships
GET    /ships/:id             # Get specific ship
POST   /ships                 # Create new ship
PUT    /ships/:id             # Update ship
DELETE /ships/:id             # Delete ship
```

### API Client Usage

The `apiClient.js` module wraps axios and provides centralized configuration:

```javascript
import apiClient from './apiClient';

// GET request
const captains = await apiClient.get('/captains');

// POST request
const newCaptain = await apiClient.post('/captains', { name: 'John' });

// Error handling
try {
  const data = await apiClient.get('/captains/1');
} catch (error) {
  console.error('API Error:', error.message);
}
```

---

## Database Schema

The project uses **json-server** with a JSON file database (`api/db.json`). This is a mock database suitable for development and testing, not production use.

### Data Structure

The `db.json` file contains collections that are automatically exposed as REST endpoints:

#### Captains Collection

```json
{
  "captains": [
    {
      "id": "SQ2WI",
      "first": "Jack",
      "last": "Sparrow",
      "age": 48,
      "ship": "BC13V"
    }
  ]
}
```

#### Ships Collection

```json
{
  "ships": [
    {
      "id": "BC13V",
      "name": "Black Pearl",
      "size": 300
    }
  ]
}
```

### Schema Details

**Captains:**
| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Unique identifier |
| `first` | String | Captain's first name |
| `last` | String | Captain's last name |
| `age` | Number | Captain's age |
| `ship` | String | Ship ID (foreign key reference) |

**Ships:**
| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Unique identifier |
| `name` | String | Name of the ship |
| `size` | Number | Ship size/tonnage |

### Limitations

- **No persistence** — Changes are lost when server restarts (unless configured otherwise)
- **No validation** — json-server doesn't enforce schema validation
- **No transactions** — Single-file database has no transaction support
- **Development only** — Not suitable for production

---

## Testing

### Test Framework

**Jest** is the primary testing framework. Configuration is in `package.json`:

```json
"jest": {
  "testEnvironment": "node",
  "reporters": ["default"],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
}
```

### Running Tests

```bash
# Run all tests in watch mode
npm test

# Run specific test file
npm test -- apiClient.test.js

# Run tests matching pattern
npm test -- --testNamePattern="captains"

# Run tests once (CI mode)
npm test -- --no-coverage --watchAll=false

# Generate coverage report
npm test -- --coverage
```

### Test Structure (AAA Pattern)

Tests follow the Arrange-Act-Assert pattern:

```javascript
describe('Service Name', () => {
  describe('methodName', () => {
    it('should do something', async () => {
      // Arrange
      const mockData = { id: 1, name: 'Captain' };
      apiClient.get.mockResolvedValue(mockData);
      
      // Act
      const result = await service.method();
      
      // Assert
      expect(result).toEqual(mockData);
    });
  });
});
```

### Mocking External Dependencies

```javascript
jest.mock('axios');
const axios = require('axios');

axios.get.mockResolvedValue({ data: { id: 1 } });
```

### Common Jest Matchers

```javascript
expect(value).toBe(expected);              // Strict equality
expect(value).toEqual(expected);           // Deep equality
expect(value).toContain(item);             // Array/string contains
expect(fn).toHaveBeenCalled();             // Function called
expect(fn).toHaveBeenCalledWith(args);     // Called with specific args
expect(promise).rejects.toThrow();         // Promise rejection
```

### Watch Mode Features

Press keys while tests are running:
- `p` — Filter by filename
- `t` — Filter by test name
- `a` — Run all tests
- `q` — Quit
- `Enter` — Re-run tests

### Best Practices

1. **Test behavior, not implementation** — Focus on what the code does, not how
2. **Keep tests isolated** — Each test should be independent
3. **Mock external dependencies** — Don't make real API calls in tests
4. **Use descriptive test names** — `it('should return captain when id exists')`
5. **Test error cases** — Include tests for failures and edge cases
6. **Keep tests fast** — Avoid unnecessary delays or real I/O

---

## Key Patterns & Conventions

### Separation of Concerns

The layered architecture ensures each component has a single responsibility:

- **Tests** verify behavior
- **Service layer** handles business logic
- **API client** manages HTTP communication
- **Axios** handles the actual requests

This makes code easier to test, maintain, and extend.

### Error Handling

Expected patterns throughout the codebase:
- Try-catch blocks in async functions
- Meaningful error messages
- Graceful degradation when APIs fail

### Async/Await

The project uses modern async/await syntax for handling asynchronous operations:

```javascript
const data = await apiClient.get('/endpoint');
```

### Configuration Management

- **json-server.json** — API server configuration
- **routes.json** — Custom route mappings
- **.babelrc** — Transpilation rules
- **.eslintrc.json** — Linting rules
- **.prettierrc** — Code formatting rules

---

## Code Style

The project enforces consistent code style through:

- **ESLint** — Enforces Airbnb style guide
- **Prettier** — Auto-formats code on save
- **Babel** — Transpiles modern JavaScript to compatible versions

### Running Linters

```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format
```

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nbonhamwwt/js-pairing-exercises.git
cd js-pairing-exercises

# Install dependencies
npm install
```

### Running the Development Environment

```bash
# Terminal 1: Start the mock API server
npm run api

# Terminal 2: Run tests in watch mode
npm test
```

The API server will be available at `http://localhost:5000/api`

---

## Deployment Considerations

### Current State

The project is currently configured for **local development and learning** with no explicit deployment configuration.

### For Production Deployment

1. **Replace Mock API** — Deploy a real backend (Node.js/Express, Python/Django, etc.)
2. **Update Configuration** — Set `API_BASE_URL` environment variable for production API
3. **Implement Authentication** — Add proper authentication/authorization
4. **Add Database** — Use PostgreSQL, MongoDB, or similar for persistence
5. **Set Up CI/CD** — Use GitHub Actions or similar for automated testing and deployment
6. **Add Monitoring** — Implement error tracking (Sentry), logging, and performance monitoring

### Recommended Deployment Platforms

**Node.js Application:**
- Heroku
- AWS Lambda / EC2
- Google Cloud Run
- DigitalOcean
- Vercel (for serverless)

**Static Frontend (if applicable):**
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Code linted and formatted
- [ ] Environment variables documented
- [ ] Dependencies audited (`npm audit`)
- [ ] Error handling implemented
- [ ] Logging configured
- [ ] Security headers set
- [ ] CORS configured appropriately

---

## Project Structure

```
js-pairing-exercises/
├── src/
│   ├── apiClient.js              # HTTP client wrapper
│   ├── apiClient.test.js         # Tests for API client
│   ├── captains-service.js       # Business logic for captains
│   └── captains-service.test.js  # Tests for captains service
├── api/
│   ├── db.json                   # Mock database
│   └── routes.json               # Custom route mappings
├── .babelrc                       # Babel configuration
├── .eslintrc.json                # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── json-server.json              # json-server configuration
├── package.json                  # Dependencies and scripts
└── README.md                      # Quick start guide
```

---

## Learning Resources

This project is designed to teach:

1. **API Integration** — How to communicate with external APIs
2. **Service Layer Pattern** — Organizing business logic separately from HTTP concerns
3. **Test-Driven Development** — Writing tests before implementation
4. **Mocking** — How to mock external dependencies in tests
5. **Async/Await** — Modern JavaScript asynchronous patterns
6. **Module Pattern** — Organizing code into reusable modules

---

## Contributing

When contributing to this project:

1. Follow the established code style (ESLint/Prettier)
2. Write tests for new features
3. Ensure all tests pass before submitting PRs
4. Use descriptive commit messages
5. Keep the separation of concerns principle in mind

---

## Additional Resources

- [Jest Documentation](https://jestjs.io/)
- [Axios Documentation](https://axios-http.com/)
- [json-server Documentation](https://github.com/typicode/json-server)
- [Babel Documentation](https://babeljs.io/)
- [ESLint Documentation](https://eslint.org/)

---

## Notes

- The project uses a Yoda-inspired philosophy: "This training is brought to you by Yoda"
- The codebase contains poetic haikus reflecting on the development journey
- The focus is on learning and practice, not production deployment
- All architectural decisions prioritize clarity and educational value
