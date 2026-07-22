# 🚀 Auth Backend API - Postman Documentation

Backend Authentication Service built with **Node.js**, **Express.js (v5)**, **MongoDB**, **Mongoose**, and **JSON Web Tokens (JWT)**.

---
- 📄 **Published Postman Documentation:** https://www.postman.com/saikatkhamrai0702-6405762/workspace/saikat/documentation/56379725-c0b6e4d0-262e-4629-941d-cf8f9dba8210


## 🔗 Project Links & Resources

- 🌐 **Backend Base URL (Local):** `http://localhost:3000/api/v1`
- 🖥️ **Frontend Link (Local App):** `http://localhost:5173`
- 📦 **Backend Repository Link:** [https://github.com/SAIKAT24072002/Auth](https://github.com/SAIKAT24072002/Auth)
- 💻 **Frontend Repository / Live Deployment Link:** [Frontend Repository Link](https://github.com/SAIKAT24072002/Auth)


---

## 🛠️ Features & Tech Stack

- **Tech Stack:** Node.js, Express.js (v5), MongoDB, Mongoose, JWT, bcryptjs, cookie-parser, CORS.
- **Authentication:** Password hashing using `bcryptjs`, session handling via HTTP-Only JWT cookies (`token`).
- **Authorization:** Protected routes validated via custom `isAuthenticated` middleware.

---

## 🌐 API Overview & Base Configuration

- **Base URL:** `http://localhost:5000`
- **API Version 1 Prefix:** `http://localhost:5000/api/v1`
- **Default Headers:**
  ```http
  Content-Type: application/json
  ```
- **Authentication Header / Cookie:**
  - `Cookie: token=<jwt_token_here>`

---

## 📖 Complete Postman API Endpoint Documentation

### 0. Health Check (Root)
Checks whether the backend server is active and running.

* **URL:** `/`
* **Method:** `GET`
* **Access:** Public
* **Headers:** None
* **Request Body:** None

#### 🟢 Success Response (200 OK)
* **Body:**
  ```text
  Server is Running......
  ```

---

### 1. User Signup
Registers a new user in the system, hashes the password, creates a JWT session token, sets an HTTP-only cookie (`token`), and returns user details.

* **URL:** `/api/v1/user/signup`
* **Method:** `POST`
* **Access:** Public
* **Headers:**
  ```http
  Content-Type: application/json
  ```

#### 📩 Request Body Parameters
| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Full name of the user |
| `email` | `string` | Yes | Unique email address |
| `password` | `string` | Yes | User account password |

#### 📝 Example Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### 🟢 Success Response (201 Created)
* **Response Headers:** `Set-Cookie: token=<JWT_TOKEN>; HttpOnly; Path=/`
* **Response Body:**
```json
{
  "success": true,
  "message": "User Created Successfully",
  "user": {
    "_id": "669db123a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "$2a$08$eImiTXuWVxfM37uY4JANjO5E.8i5y...",
    "createdAt": "2026-07-22T10:00:00.000Z",
    "updatedAt": "2026-07-22T10:00:00.000Z",
    "__v": 0
  }
}
```

#### 🔴 Error Response (400 Bad Request)
* **Missing required fields or duplicate email:**
```json
{
  "success": false,
  "error": "User validation failed: email: Email is Required"
}
```

---

### 2. User Login
Authenticates an existing user using email and password, generates a JWT token, sets an HTTP-only cookie (`token`), and returns user data.

* **URL:** `/api/v1/user/login`
* **Method:** `POST`
* **Access:** Public
* **Headers:**
  ```http
  Content-Type: application/json
  ```

#### 📩 Request Body Parameters
| Parameter | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | Yes | Registered email address |
| `password` | `string` | Yes | Account password |

#### 📝 Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### 🟢 Success Response (201 Created)
* **Response Headers:** `Set-Cookie: token=<JWT_TOKEN>; HttpOnly; Path=/`
* **Response Body:**
```json
{
  "success": true,
  "message": "User Login successfull",
  "user": {
    "_id": "669db123a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "createdAt": "2026-07-22T10:00:00.000Z",
    "updatedAt": "2026-07-22T10:00:00.000Z",
    "__v": 0
  }
}
```

#### 🔴 Error Response (400 Bad Request)
* **Invalid Email or Password:**
```json
{
  "success": false,
  "error": "email or password not valid"
}
```

---

### 3. Get User Profile
Retrieves profile details of the authenticated user. Requires a valid `token` cookie set during Login or Signup.

* **URL:** `/api/v1/user/getprofile`
* **Method:** `GET`
* **Access:** Protected (Requires `isAuthenticated` middleware)
* **Headers / Cookies:**
  ```http
  Cookie: token=<jwt_token>
  ```

#### 🟢 Success Response (201 Created)
* **Response Body:**
```json
{
  "success": true,
  "message": "get Profile successfull",
  "user": {
    "_id": "669db123a4b5c6d7e8f90123",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "createdAt": "2026-07-22T10:00:00.000Z",
    "updatedAt": "2026-07-22T10:00:00.000Z",
    "__v": 0
  }
}
```

#### 🔴 Error Response (400 Bad Request / Unauthorized)
* **Missing or Expired JWT Token:**
```json
{
  "success": false,
  "error": "jwt token is expired"
}
```

---

## 🧪 Testing in Postman Guide

1. **Set Up Collection Variables:**
   - Create a Postman Collection and add a variable `base_url` set to `http://localhost:5000/api/v1`.
2. **Handling Cookies:**
   - Ensure Postman cookie management is enabled for `localhost`. Postman will automatically capture and store the `token` cookie when calling `/user/signup` or `/user/login`.
3. **Testing Protected Endpoints:**
   - When calling `GET /user/getprofile`, Postman will automatically send the captured `token` cookie in the request header.

---

## ⚙️ Environment Variables

Create a file named `.env` inside `./config/` directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=24h
```

---

## 🏃 Setup & Execution Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Server (Development Mode):**
   ```bash
   npm run dev
   ```
