# Hotel Booking Application - Setup Guide

A full-stack hotel booking application built with MEAN stack (MongoDB, Express.js, Angular 21, Node.js 22).

## Prerequisites

- Node.js 22 or higher
- MongoDB 8.2 or higher
- Yarn package manager

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd hotel-booking-mean-stack
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Install and Start MongoDB

**Windows:**
- Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
- Install and ensure MongoDB service is running
- Verify: `mongod --version`

**Mac/Linux:**
```bash
brew install mongodb-community
brew services start mongodb-community
```

### 4. Configure Environment Variables

Edit `packages/backend/.env`:

```env
DB_URI=mongodb://localhost:27017/hotel-booking
JWT_SECRET=your_jwt_secret_here
PORT=3001
```

### 5. Start the Application

```bash
yarn start
```

This will start:
- Backend API on http://localhost:3001
- Frontend on http://localhost:4200

### 6. Create Admin User

1. Register a new user through the UI at http://localhost:4200
2. Run the admin script to make yourself admin:

```bash
# Edit make-admin.js and change the email to your registered email
node make-admin.js
```

3. Logout and login again to access the Admin Dashboard

## Features

- User registration and authentication
- Hotel search and booking
- Admin panel for managing hotels and users
- JWT-based authentication
- Rate limiting and security middleware

## Tech Stack

- **Frontend:** Angular 21, TailwindCSS, Material Design
- **Backend:** Node.js 22, Express.js, TypeScript
- **Database:** MongoDB 8
- **Authentication:** JWT

## Project Structure

```
hotel-booking-mean-stack/
├── packages/
│   ├── backend/          # Express.js API
│   │   ├── models/       # MongoDB models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Auth, admin, error handling
│   │   └── app.ts        # Main server file
│   └── frontend/         # Angular application
│       └── app/
│           ├── components/
│           ├── services/
│           └── guards/
└── package.json          # Root package.json
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB service is running
- Check the DB_URI in `.env` file

### Port Already in Use
- Change PORT in `packages/backend/.env`
- Update `apiUrl` in `packages/frontend/environments/environment.ts`

### CORS Errors
- Ensure backend is running on port 3001
- Check CORS configuration in `packages/backend/app.ts`

## License

MIT
