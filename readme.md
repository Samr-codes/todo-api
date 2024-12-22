
 # Task Management API

## Description
 A task management API built using TypeScript, Express.js, and Prisma ORM with MySQL.

It follows SOLID principles and includes integration tests for comprehensive functionality coverage

 ## Features
 - **Endpoints**
   - `GET /api/tasks`: Fetch all tasks.
   - `POST /api/tasks`: Create a new task.
   - `PUT /api/tasks/:id`: Update an existing task.
    - `DELETE /api/tasks/:id`: Delete a task.
    - Centralized error handling.
     - Integration tests with Jest and Supertest.
 
 ## Technologies Used
 - **Node.js** and **Express.js** for backend development.
 - **Prisma ORM** for database management.
 - **MySQL** as the database.
 - **TypeScript** for type-safe code.
 - **Jest** and **Supertest** for testing.
 
 ## Setup Instructions

 ### Prerequisites
 - Node.js (>=16.x)
 - MySQL server
 
 ### Installation
 1. Clone the repository:
    ```bash
        git clone <repository-url>
        cd <project-directory>
    ```
 
 2. Install dependencies:
    ```bash
    npm install
    ```

 3. Set up the `.env` file:
    ```plaintext
    DATABASE_URL=mysql://username:password@localhost:3306/tasks_db
    ```
 
 4. Initialize Prisma:
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```
 
 ### Run the Application
 - Development server:
   ```bash
   npm run dev
   ```
 - Production build:
   ```bash
   npm run build
   npm start
   ```
 
 ### Run Tests
 To execute the integration tests:
 ```bash
 npm test
 ```
 
 ## Project Structure
 ```plaintext
 src/
 ├── controllers/        # Handle request and response logic
 ├── services/           # Contain business logic
 ├── routes/             # API route definitions
 ├── prisma/             # Prisma client setup and schema
 ├── middlewares/        # Custom middleware for error handling
 ├── tests/              # Integration tests
 ├── app.ts              # Main app setup
 └── index.ts            # Entry point of the application
 ```

 src/prisma/schema.prisma
 Prisma schema file for defining database structure

