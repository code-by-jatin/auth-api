# 🔐 Auth API  
### A Production-Ready Authentication Service  
**Node.js • Express • MongoDB • JWT • Joi Validation • Clean Architecture**

<br/>

![NodeJS](https://img.shields.io/badge/Node.js-0a0a0a?style=for-the-badge&logo=node.js&logoColor=3c873a)
![Express](https://img.shields.io/badge/Express-0a0a0a?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-0a0a0a?style=for-the-badge&logo=mongodb&logoColor=47A248)
![JWT](https://img.shields.io/badge/JWT-0a0a0a?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

![Status](https://img.shields.io/badge/STATUS-ACTIVE-0a0a0a?style=for-the-badge&logo=github&logoColor=white)
![PRs](https://img.shields.io/badge/PRS-WELCOME-0a0a0a?style=for-the-badge&logo=github&logoColor=white)
![Issues](https://img.shields.io/badge/ISSUES-OPEN-0a0a0a?style=for-the-badge&logo=github&logoColor=white)
![Love](https://img.shields.io/badge/MADE_WITH-LOVE-0a0a0a?style=for-the-badge&logo=heart&logoColor=red)

</div>

---

# 🚀 Tech Stack

- Node.js (ESM)
- Express.js
- MongoDB + Mongoose
- Joi Validation
- JWT Authentication
- Bcrypt password hashing
- MVC + Service architecture
- Centralized error handler

---

# 📂 Project Structure (Dark Mode)




``` auth-api/
└── src/
    ├── app.js
    ├── server.js
    ├── config/
    │   ├── db.js
    │   └── env.config.js
    ├── constants/
    │   └── role.constants.js
    ├── controllers/
    │   └── auth.controller.js
    ├── services/
    │   └── auth.service.js
    ├── models/
    │   └── user.model.js
    ├── routes/
    │   └── auth.routes.js
    ├── validators/
    │   └── auth.validator.js
    ├── middlewares/
    │   ├── validation.middleware.js
    │   ├── auth.middleware.js
    │   └── error.middleware.js
    └── utils/
        ├── password.util.js
        ├── token.util.js
        ├── response.util.js
        └── error.util.js
```


---

## ⚙️ Environment Variables

Create a **.env** file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES=7d
SALT_ROUNDS=10
```

--- 
Loaded using: ```src/config/env.config.js```

---

## 📦 Installation
```bash
npm install 
```

## 💻 Run Project

### 🧪 Development  

```bash
npm run dev
```


### 🚀 Production  

```bash
npm run start
```

## 📝 API Endpoints
## 1. Register User
### POST /api/auth/register
```bash
{
  "name": "Jatin",
  "email": "jatin@example.com",
  "password": "secret123"
}
```

## 2. Login User
### POST /api/auth/login
```bash
 {
  "email": "jatin@example.com",
  "password": "secret123"
}
```
## Success Response:
```
{
    "success": true,
    "data": {
        "user": {
            "id": "691969c6f148c6e438361613",
            "name": "Jatin Sikarwar",
            "email": "jatin@example.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTk2OWM2ZjE0OGM2ZTQzODM2MTYxMyIsImVtYWlsIjoiamF0aW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NjMyNzcyMDAsImV4cCI6MTc2Mzg4MjAwMH0.VdL2YBOHSiWjhqR7aAxjnX920IvEUN9F_N_ieydqTXY"
    }
}
```
## 🔐 Security Features
* Password hashing (bcrypt)
* JWT-based authentication
* Strong Joi validation
* Sanitized request inputs
* Centralized error handling

## 🏗 Architecture Advantages
* Clean MVC + Service Layer
* Modular & scalable
* Production-ready folder structure
* Enterprise Node.js design
* Easy to extend & maintain

## 👨‍💻 Author
### Developed by Jatin Singh
### Professional Authentication Microservice

## 📜 License  
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

This project is licensed under the **MIT License**.



