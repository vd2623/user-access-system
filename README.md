# user-access-system

This is a full-stack web application for managing user access to software tools based on user roles. It includes functionality for user registration, authentication using JWT, software access requests, and approval workflows. The application is built using Node.js (Express) for the backend, React for the frontend, PostgreSQL as the database, and TypeORM as the ORM.

## Features

- User registration and login with secure password handling
- Role-based access control: Employee, Manager, Admin
- Admin can add and manage software
- Employees can request access to software
- Managers can view, approve, or reject requests
- JWT-based authentication
- Secure password encryption using bcrypt

## Tech Stack

- Backend: Node.js, Express.js
- Frontend: React
- Database: PostgreSQL
- ORM: TypeORM
- Authentication: JWT
- Tooling: bcrypt, dotenv, nodemon

## User Roles

- **Employee**: Can sign up, log in, and request access to software
- **Manager**: Can view and manage access requests
- **Admin**: Can create software entries and has full access

## Setup Instructions

### Prerequisites

- Node.js and npm
- PostgreSQL
- Git

### Backend Setup

1. Clone the repository:
git clone https://github.com/your-username/user-access-system.git
cd user-access-system/backend


2. Install dependencies:
npm install


3. Create a `.env` file with the following variables:
DB_USER=your_db_username
DB_PASS=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret


4. Start the server:
npm run dev


### Frontend Setup

1. Open a new terminal and go to the frontend directory:
cd ../frontend


2. Install dependencies:
npm install


3. Start the React development server:
npm start


The application should now be running locally on `http://localhost:3000`.

## Project Structure

### Backend

- `/src/entities`: TypeORM entities (User, Software, Request)
- `/src/controllers`: Business logic for each route
- `/src/routes`: Express route definitions
- `/src/middleware`: JWT and role-checking middleware
- `/src/utils`: Utility functions (e.g., token generation)

### Frontend

- `/src/pages`: React pages for login, signup, create software, request access, and pending requests
- `/src/components`: Reusable components (form, navigation)
- `/src/services`: API handling functions
- `/src/App.tsx`: App routing and layout

## API Endpoints

### Authentication

- `POST /api/auth/signup`: Register as a new user (default role: Employee)
- `POST /api/auth/login`: Login and receive a JWT

### Software Management (Admin)

- `POST /api/software`: Create new software

### Access Requests (Employee)

- `POST /api/requests`: Submit an access request

### Request Management (Manager)

- `PATCH /api/requests/:id`: Approve or reject a request
- `GET /api/requests`: List all access requests

## Database Schema

### User

- `id`: Primary Key
- `username`: Unique string
- `password`: Hashed password
- `role`: 'Employee' | 'Manager' | 'Admin'

### Software

- `id`: Primary Key
- `name`: Software name
- `description`: Text
- `accessLevels`: Array of 'Read' | 'Write' | 'Admin'

### Request

- `id`: Primary Key
- `user`: Many-to-One relation with User
- `software`: Many-to-One relation with Software
- `accessType`: 'Read' | 'Write' | 'Admin'
- `reason`: Text
- `status`: 'Pending' | 'Approved' | 'Rejected'

## Notes

- Passwords are hashed using bcrypt before storing in the database.
- JWT is used for authenticating protected routes.
- Each user role has access to specific pages and functionality based on the backend logic.
