# 📚 School Management API

A simple REST API built with **Node.js**, **Express.js**, and **MySQL** to manage schools.  

This system allows users to:
- Add new schools
- Retrieve a list of schools sorted by proximity to a given location

## 🔧 Tech Stack

- Node.js
- Express.js
- MySQL
- Railway (for hosting)
- Dotenv (for environment variables)

## 🚀 Live API

🌐 Base URL:  
`https://school-management-apis-production-59bc.up.railway.app/`

## 📦 API Endpoints

### ➕ `POST /api/addSchool`

Add a new school to the database.

- **URL:** `/api/addSchool`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:**
```json
{
  "name": "Bombay Scottish School",
  "address": "Veer Savarkar Marg, Mahim West, Mumbai, Maharashtra 400016",
  "latitude": 19.0380,
  "longitude": 72.8408
}
```
- **Success Response:**
  - `Status Code: 201 Created`
  - `Content-Type: application/json`
```json
{
  "message": "School added successfully",
  "sId": 1
}
```

### 📍 GET /api/listSchools

List all schools sorted by distance from a given location.

- **URL:** `/api/listSchools?latitude=<user latitude>&longitude=<user longitude>`
- **Method:** `GET`
- **Query Params:**
  - `latitude` (required, float)
  - `longitude` (required, float)

- **Example Request:** `/api/listSchools?latitude=19.2224832&longitude=72.9524932`

- **Success Response:**
  - `Status Code: 200 OK`
  - `Content-Type: application/json`
```json
{
  "message": "Schools data fetched successfully",
  "sortedSchools": [
    {
      "id": 1,
      "name": "Bombay Scottish School",
      "address": "Veer Savarkar Marg, Mahim West, Mumbai, Maharashtra 400016",
      "latitude": 19.0380,
      "longitude": 72.8408,
      "distance": 23.76
    },
  ]
}
```
`distance` is in kilometers.

## 🧪 Postman Collection

Download and test the APIs using Postman:

👉 [Click here to download](https://jainam-shah17-6678963.postman.co/workspace/jainam-shah17's-Workspace~b2eb32a3-169e-4d0d-849a-bfcb71c7352e/collection/47463113-afd7dc42-0db1-4901-97cc-2649f98726c8?action=share&creator=47463113)

## 🛠️ Run Locally

### 1. Clone the project

```bash
  git clone https://github.com/Jainam-Shah17/school-management-apis.git
```

### 2. Go to the project directory

```bash
  cd school-management-apis
```

### 3. Install dependencies

```bash
  npm install
```

### 4. Set up environment variables
Create a .env file in the root of the project and add your database credentials:
```bash
PORT=5000
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
DB_PORT=your-db-port (default 3306)
```

### 5. Start the server

```bash
  npm start
```

## ✍️ Author

- GitHub: [@Jainam-Shah17](https://github.com/Jainam-Shah17/)

