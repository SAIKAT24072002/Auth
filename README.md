# Auth Backend API

Backend Authentication Service built with Node.js, Express, MongoDB, and JSON Web Tokens (JWT).

---

## 🔗 Postman Documentation & Collection

### 1. Published Postman Documentation Link
👉 **Postman Doc Link:**https://www.postman.com/saikatkhamrai0702-6405762/workspace/4a9a95ff-50b3-40f6-b1cc-c6a82de4dc2d/collection/56379725-c0b6e4d0-262e-4629-941d-cf8f9dba8210?action=share&source=copy-link&creator=56379725


## 🚀 Features

- User Registration (Signup) with hashed passwords using `bcryptjs`
- User Authentication (Login) returning HTTP-only JWT token cookies
- Protected Profile Endpoint (`/getprofile`) verified via Middleware
- MongoDB database connection with Mongoose ORM

---

## 🛠️ Tech Stack

- **Node.js** & **Express.js** (v5)
- **MongoDB** & **Mongoose**
- **JWT (jsonwebtoken)** for session authentication
- **bcryptjs** for password encryption
- **cookie-parser** for cookie handling

---

## 📋 API Endpoints Summary

### Base URL
`http://localhost:5000/api/v1`

---

### 1. User Signup
* **URL:** `/user/signup`
* **Method:** `POST`
* **Access:** Public
* **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

---

### 2. User Login
* **URL:** `/user/login`
* **Method:** `POST`
* **Access:** Public
* **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

---

### 3. Get User Profile
* **URL:** `/user/getprofile`
* **Method:** `GET`
* **Access:** Protected (Requires active `token` cookie from Login)

---

## ⚙️ Environment Variables

Ensure you configure `./config/.env` with:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=24h
```

---

## 🏃 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
