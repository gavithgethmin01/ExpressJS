# ExpressJS

A practical learning repository for building backend applications with Express.js. This project includes simple Express examples, API routes, middleware usage, and a React + Vite frontend integration.

## Overview

This repository is designed to help you understand how Express.js works in real-world scenarios, from basic server setup to API development and frontend-backend communication.

It contains:

- A basic Express server setup
- REST API examples with routes and responses
- Middleware and request/response handling examples
- A React frontend integrated with an Express backend

## Repository Structure

```text
ExpressJS/
├── README.md
├── Setup/
│   ├── index.js
│   ├── package.json
│   └── README.md
├── server/
│   ├── index.js
│   ├── package.json
│   └── README.md
└── With-React/
    ├── index.html
    ├── package.json
    ├── server.js
    ├── vite.config.js
    ├── src/
    └── README.md
```

### 1. Setup
The `Setup` folder contains a beginner-friendly Express application with basic routes and API examples.

### 2. Server
The `server` folder contains a minimal Express server example demonstrating a simple root route.

### 3. With-React
The `With-React` folder demonstrates how to integrate Express with a React frontend using Vite.

## Features Covered

- Express application creation
- HTTP routes (`GET`, `POST`)
- Sending JSON responses
- Request and response handling
- Middleware with `express.json()`
- API endpoint creation
- Frontend + backend integration

## Prerequisites

Before running the examples, make sure you have:

- Node.js installed
- npm or Yarn installed

## Getting Started

### Run the basic setup

```bash
cd Setup
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

### Run the minimal server example

```bash
cd server
npm install
node index.js
```

### Run the React + Express example

Open two terminals:

```bash
cd With-React
npm install
npm run server
```

In another terminal:

```bash
cd With-React
npm run dev
```

This runs the backend and frontend together so the React app can communicate with the Express API.

## Example API Routes

The examples include endpoints such as:

- `/`
- `/api/users`
- `/api/products`

These routes demonstrate how Express handles requests and returns JSON data.

## Tech Stack

- Node.js
- Express.js
- React
- Vite
- JavaScript

## Learning Goals

This repository is useful for learning:

- how Express apps are structured
- how to create routes
- how to handle JSON requests
- how APIs respond to frontend requests
- how to connect a frontend app to a backend server

## License

This repository is intended for educational purposes and can be freely used for learning and experimentation.

## Contributing

Feel free to fork this repository, improve the examples, and add more Express.js practice projects.
