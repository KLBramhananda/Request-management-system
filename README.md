# MERN Pull Request System

A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) for managing pull requests, comments, and approvals.

## Project Structure

### Backend (`/backend`): Node.js + Express + MongoDB
- `server.js`: Main entry point of the backend server.
- `routes/`: API route handlers.
  - `pullRequests.js`: Route for managing pull requests.
  - `comments.js`: Route for managing comments on pull requests.
  - `approvals.js`: Route for managing approvals on pull requests.
- `models/`: Mongoose models for data structure.
  - `User.js`: User schema and model.
  - `Role.js`: Role schema and model.
  - `PullRequest.js`: Pull request schema and model.
  - `Review.js`: Review schema and model.
  - `Approval.js`: Approval schema and model.
- `middleware/`: Middleware functions.
  - `auth.js`: Authentication middleware to protect routes.
- `config/`: Configuration files.
  - `db.js`: MongoDB connection setup.

### Frontend (`/frontend`): React
- `src/`: React source code.
  - `App.js`: Main app component.
  - `components/`: React components.
    - `PullRequestList.jsx`: Displays list of pull requests.
    - `PullRequestForm.jsx`: Form for creating pull requests.
    - `CommentsSection.jsx`: Section for displaying and adding comments.
    - `ApprovalSection.jsx`: Section for displaying and adding approvals.
  - `services/`: API services to interact with the backend.
    - `api.js`: Handles API requests using Axios.

## Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/) (locally or use MongoDB Atlas)
- [Git](https://git-scm.com/)

## Getting Started

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/KLBramhananda/Request-management-system
    cd backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `/backend` directory with the following content:
    ```bash
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/mern_pr_system
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend React app:
    ```bash
    npm start
    ```

### Testing the Application

- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.
- You can test the backend API endpoints using Postman (e.g., [http://localhost:5000/api/pull-requests](http://localhost:5000/api/pull-requests)).

### Database Setup

Make sure MongoDB is running locally or configure MongoDB Atlas for cloud-based storage. The connection string is provided in the `.env` file.

## Features

- **Pull Requests**: View, create, update, and delete pull requests.
- **Comments**: Add comments to pull requests for review.
- **Approvals**: Approve or reject pull requests based on reviews.
- **User Roles**: Support for different roles like Admin and User for access control.

## Scripts

### Backend
- `npm start`: Starts the backend server.

### Frontend
- `npm start`: Starts the React development server.

## Environment Variables

Create a `.env` file in the `/backend` directory with the following variables:

- `PORT`: The port on which the backend server runs (default: 5000).
- `MONGO_URI`: MongoDB connection string for the backend to connect to the database.

## Dependencies

### Backend
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `cors`: Middleware for handling Cross-Origin Resource Sharing.
- `body-parser`: Middleware for parsing incoming request bodies.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `bcryptjs`: Library for password hashing.

### Frontend
- `react`: JavaScript library for building user interfaces.
- `react-dom`: React package for DOM-related functions.
- `react-scripts`: React scripts for creating a React app.
- `axios`: Promise-based HTTP client for the browser and Node.js.

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

---

For further help or issues, don't hesitate to get in touch with bramhanandakl2002@gmail.com.
