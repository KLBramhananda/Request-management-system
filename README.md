# Pull Request Management System

## Overview

This project is a full-stack **Pull Request Management System** developed using the **MERN** stack (MongoDB, Express, React, Node.js). The system allows users to create, review, approve, or reject pull requests with both parallel and sequential approval processes. The application features real-time notifications, user authentication and role-based authorization, and ensures data integrity with appropriate validation and security measures.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [System Design](#system-design)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Real-Time Notifications](#real-time-notifications)
- [Security Features](#security-features)
- [Testing](#testing)
- [Contributions](#contributions)
- [License](#license)

---

## Technologies Used

- **Backend:**  
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication (JSON Web Tokens)
  - Bcrypt.js (for password hashing)

- **Frontend:**  
  - React.js
  - React Router
  - Axios (for HTTP requests)
  - WebSocket (for real-time notifications)

- **Version Control & Hosting:**  
  - Git & GitHub
  - Heroku for deployment (optional)

- **Development Tools:**  
  - VS Code
  - Postman (for API testing)
  - MongoDB Atlas (for database hosting)

---

## Features

- **User Authentication & Authorization:**  
  - Users can register, log in, and access their dashboard.
  - Role-based access control (admin, reviewer, etc.) using JWT.

- **Pull Request Management:**  
  - Users can create, update, and delete pull requests.
  - PRs can be submitted with either parallel or sequential approvers.
  - PR status updates dynamically based on approval/rejection.

- **Commenting on PRs:**  
  - Users can add comments to a PR for discussion and review.

- **Approval System:**  
  - Approvers can approve or reject pull requests.
  - Parallel approval: All approvers approve independently.
  - Sequential approval: Approvers approve in sequence.

- **Real-Time Notifications:**  
  - WebSocket integration to notify users about status changes (e.g., PR approval/rejection).

- **Security Features:**  
  - Password hashing using Bcrypt.js.
  - JWT for session management and role-based authorization.

---

## System Design

### Database Schema Design

- **Users Collection:** Stores user information such as `userId`, `username`, `email`, `password`, and roles.
- **Roles Collection:** Defines roles such as `admin`, `reviewer`, `developer`, etc.
- **PullRequests Collection:** Stores PR details like `title`, `description`, `requesterId`, `approvers` (array), `status`, etc.
- **Reviews Collection:** Stores review comments for each PR.
- **Approvals Collection:** Manages approval decisions for each PR.

---

## Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/KLBramhananda/Request-management-system.git
   cd Request-management-system/backend

## Overview

This project is a full-stack **Pull Request Management System** developed using the **MERN** stack (MongoDB, Express, React, Node.js). The system allows users to create, review, approve, or reject pull requests with both parallel and sequential approval processes. The application features real-time notifications, user authentication and role-based authorization, and ensures data integrity with appropriate validation and security measures.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [System Design](#system-design)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Real-Time Notifications](#real-time-notifications)
- [Security Features](#security-features)
- [Testing](#testing)
- [Contributions](#contributions)
- [License](#license)

---

## Technologies Used

- **Backend:**  
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication (JSON Web Tokens)
  - Bcrypt.js (for password hashing)

- **Frontend:**  
  - React.js
  - React Router
  - Axios (for HTTP requests)
  - WebSocket (for real-time notifications)

- **Version Control & Hosting:**  
  - Git & GitHub
  - Heroku for deployment (optional)

- **Development Tools:**  
  - VS Code
  - Postman (for API testing)
  - MongoDB Atlas (for database hosting)

---

## Features

- **User Authentication & Authorization:**  
  - Users can register, log in, and access their dashboard.
  - Role-based access control (admin, reviewer, etc.) using JWT.

- **Pull Request Management:**  
  - Users can create, update, and delete pull requests.
  - PRs can be submitted with either parallel or sequential approvers.
  - PR status updates dynamically based on approval/rejection.

- **Commenting on PRs:**  
  - Users can add comments to a PR for discussion and review.

- **Approval System:**  
  - Approvers can approve or reject pull requests.
  - Parallel approval: All approvers approve independently.
  - Sequential approval: Approvers approve in sequence.

- **Real-Time Notifications:**  
  - WebSocket integration to notify users about status changes (e.g., PR approval/rejection).

- **Security Features:**  
  - Password hashing using Bcrypt.js.
  - JWT for session management and role-based authorization.

---

## System Design

### Database Schema Design

- **Users Collection:** Stores user information such as `userId`, `username`, `email`, `password`, and roles.
- **Roles Collection:** Defines roles such as `admin`, `reviewer`, `developer`, etc.
- **PullRequests Collection:** Stores PR details like `title`, `description`, `requesterId`, `approvers` (array), `status`, etc.
- **Reviews Collection:** Stores review comments for each PR.
- **Approvals Collection:** Manages approval decisions for each PR.

