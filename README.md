# Professional Authentication System API

This is a professional-grade back-end authentication system built with Node.js and Express.js. It's a robust and secure foundation for any web application requiring user management, featuring token-based authentication, role-based access control, and a secure password reset system.

-----

## Features

  * **User Authentication**: Secure user registration and login with `bcrypt` for password hashing.
  * **JWT-Based Authentication**: Implements JSON Web Tokens for stateless, secure, and scalable API access.
  * **Role-Based Access Control (RBAC)**: Protects routes and resources by restricting access based on user roles (`user`, `admin`).
  * **Password Reset**: A secure password recovery mechanism using a unique, time-sensitive token.
  * **Global Error Handling**: Centralized error-handling middleware for consistent and secure API responses.
  * **Environment Variables**: Manages sensitive data (API keys, secrets) using a `.env` file.
  * **API Endpoints**: Clear, well-defined API endpoints for all authentication functions.

-----

##  Technologies Used

  * **Node.js**: The runtime environment for the backend.
  * **Express.js**: A minimalist web framework for building the API.
  * **MongoDB**: The NoSQL database for storing user data, with `Mongoose` as the ODM.
  * **bcrypt**: A library for hashing passwords securely.
  * **jsonwebtoken (JWT)**: For creating and verifying secure access tokens.
  * **express-async-handler**: Middleware for handling asynchronous Express routes without `try/catch` blocks.
  * **dotenv**: A utility to load environment variables from a `.env` file.
  * **nodemon**: A development tool that automatically restarts the server on file changes.

-----

## Getting Started

Follow these steps to set up and run the project locally.

### 1\. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2\. Install Dependencies

```bash
npm install
```

### 3\. Set Up Environment Variables

Create a **`.env`** file in the root directory and add the following variables.

```
PORT=5000
NODE_ENV=development
MONGO_URI=<Your_MongoDB_Connection_String>
JWT_SECRET=super_secret_jwt_key_that_is_long_and_complex
JWT_EXPIRES_IN=1h
```

**Note**: For `MONGO_URI`, you will need to create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) to get a connection string.

### 4\. Run the Server

Start the server in development mode.

```bash
npm run dev
```

The server will start on `http://localhost:5000`.

-----

##  API Endpoints

Base API URL: `https://nodejs-auth-system-419r.onrender.com`

You can test these endpoints using a tool like **Postman** or **Insomnia**.

### Public Routes

| Method | Endpoint                       | Description                                   | Body                                 |
| :----- | :----------------------------- | :-------------------------------------------- | :----------------------------------- |
| `POST` | `/api/auth/register`           | Registers a new user.                         | `{ "email": "", "password": "" }`    |
| `POST` | `/api/auth/login`              | Authenticates a user and returns a JWT.       | `{ "email": "", "password": "" }`    |
| `POST` | `/api/auth/forgotpassword`     | Sends a password reset token to the user's email. | `{ "email": "" }`                    |
| `PUT`  | `/api/auth/resetpassword/:token`| Resets the user's password using the token.   | `{ "password": "" }`                 |

### Private Routes (Requires JWT in Authorization Header)

| Method | Endpoint                | Description                                | Authorization |
| :----- | :---------------------- | :----------------------------------------- | :------------ |
| `GET`  | `/api/auth/profile`     | Gets the authenticated user's profile.     | `Bearer <token>` |
| `GET`  | `/api/auth/admin`       | Accesses an admin-only resource.           | `Bearer <token>` |

**Authorization Header Format**: `Authorization: Bearer <your_jwt_token>`

-----

##  Postman Testing Screenshots
- Register\
![register](https://github.com/haripatel07/nodejs-auth-system/blob/main/pictures/register_test.png)
- Login\
![login](https://github.com/haripatel07/nodejs-auth-system/blob/main/pictures/login_test.png)
- Forgot Password\
![forgot](https://github.com/haripatel07/nodejs-auth-system/blob/main/pictures/forgot-password.png)
- Reset Password\
![reset](https://github.com/haripatel07/nodejs-auth-system/blob/main/pictures/reset_password.png)
- Profile\
![profile](https://github.com/haripatel07/nodejs-auth-system/blob/main/pictures/profile_test.png)
- Admin Access
![admin](https://github.com/haripatel07/nodejs-auth-system/blob/main/pictures/admin_test.png)

Note: The admin test verifies that the API correctly rejects unauthorized users who attempt to access the endpoint

-----

## Contributing

Contributions are welcome\! If you find a bug or want to add a new feature, please create a pull request.