Express.js Concepts
├── 1. Core Basics & Setup
│ ├── Node.js HTTP Module vs Express.js
│ ├── Application Object (`const app = express()`)
│ ├── Request-Response Cycle
│ └── Environment Setup (`npm init`, `dotenv`, `nodemon`)
│
├── 2. Routing System
│ ├── HTTP Methods (GET, POST, PUT, PATCH, DELETE)
│ ├── Route Paths (String patterns, Parameters: `/users/:id`)
│ ├── Query Parameters (`req.query`)
│ ├── Route Handlers & Multiple Callback Functions
│ └── `express.Router` (Modular Route Organization)
│
├── 3. Middleware Architecture (හදවත)
│ ├── Middleware Execution Flow (`req`, `res`, `next`)
│ ├── Types of Middleware:
│ │ ├── Application-level (`app.use()`)
│ │ ├── Router-level (`router.use()`)
│ │ ├── Built-in Middleware (`express.json()`, `express.urlencoded()`, `express.static()`)
│ │ ├── Third-party Middleware (`cors`, `morgan`, `helmet`)
│ │ └── Error-handling Middleware (`(err, req, res, next) => {}`)
│ └── Chain of Responsibility Pattern
│
├── 4. Request & Response Handling
│ ├── Request Object (`req`):
│ │ ├── `req.body` (Data sent from client)
│ │ ├── `req.params` (URL parameters)
│ │ ├── `req.query` (Query string parameters)
│ │ └── `req.headers` (HTTP headers & Auth tokens)
│ └── Response Object (`res`):
│ ├── `res.send()` & `res.json()`
│ ├── `res.status()` (HTTP Status Codes: 200, 201, 400, 401, 404, 500)
│ ├── `res.sendFile()` (Serving files)
│ └── `res.redirect()`
│
├── 5. Database Integration & ORM/ODM
│ ├── SQL Databases (PostgreSQL / MySQL) -> Prisma, Sequelize, Knex
│ ├── NoSQL Databases (MongoDB) -> Mongoose
│ ├── Connection Pooling & Dynamic Queries
│ └── Database Migration & Schema Design
│
├── 6. Authentication & Security
│ ├── Authentication Mechanisms:
│ │ ├── JWT (JSON Web Tokens)
│ │ ├── Session & Cookie-based Auth (`express-session`)
│ │ └── Passport.js (OAuth, Social Logins)
│ ├── Password Hashing (`bcrypt`, `argon2`)
│ └── Security Best Practices:
│ ├── CORS (Cross-Origin Resource Sharing)
│ ├── Input Validation & Sanitization (`express-validator`, `zod`)
│ ├── Rate Limiting (`express-rate-limit`)
│ └── Security Headers (`helmet`)
│
├── 7. Architecture & Code Structuring
│ ├── MVC Pattern (Model - View - Controller)
│ ├── Layered Architecture:
│ │ ├── Controllers (Request handling)
│ │ ├── Services (Business logic)
│ │ └── Repositories/Models (Database access)
│ └── Asynchronous Error Handling (Async Wrappers / Try-Catch)
│
└── 8. Deployment & Production Considerations
├── Static File Serving (`express.static`)
├── Logging & Monitoring (`winston`, `pino`, `morgan`)
├── Process Management (`pm2`)
└── Reverse Proxy Setup (Nginx, Docker Containers)
