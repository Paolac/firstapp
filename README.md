# MentoringPM Project

A full-stack application with Angular frontend and Node.js backend.

## Project Structure

```
.
├── backend/                 # Node.js backend
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── .env                 # Environment variables (not committed to git)
│   ├── .env.example         # Example environment variables
│   ├── package.json         # Backend dependencies
│   └── server.js            # Main server file
├── frontend/                # Angular frontend
│   ├── src/                 # Source files
│   │   ├── app/             # Angular components
│   │   │   ├── components/  # UI components
│   │   │   └── services/    # Angular services
│   │   ├── environments/    # Environment configurations
│   │   └── assets/          # Static assets
│   ├── angular.json         # Angular CLI configuration
│   └── package.json         # Frontend dependencies
└── package.json             # Root package.json for running both apps
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas)
- Angular CLI (`npm install -g @angular/cli`)

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mentoringpm-project
   ```

2. Install dependencies:
   ```
   npm run install:all
   ```

3. Configure environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Update the MongoDB connection string and other variables as needed

4. Start the development servers:
   ```
   npm start
   ```

This will start both the backend server (on port 5000) and the Angular development server (on port 4200).

## Available Scripts

- `npm start` - Start both frontend and backend in development mode
- `npm run start:backend` - Start only the backend server
- `npm run start:frontend` - Start only the Angular development server
- `npm run install:all` - Install dependencies for root, backend, and frontend
- `npm run build` - Build the Angular application for production

## API Endpoints

- `GET /api` - Welcome message
- `GET /health` - Health check endpoint

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Cors for cross-origin requests
- Dotenv for environment variables

### Frontend
- Angular 16
- RxJS
- Angular Router
- Angular Forms

## Development

- Backend runs on: http://localhost:5000
- Frontend runs on: http://localhost:4200

## Production Build

To create a production build of the Angular application:

```
npm run build
```

The build artifacts will be stored in the `frontend/dist/` directory.

