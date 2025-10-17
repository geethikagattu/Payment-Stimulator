# Payment Simulator

A **full-stack payment platform** simulating secure transactions for flowers and paints.  
This project demonstrates user authentication, transaction history tracking, and a basic fraud detection system.

---

## Features

- **User Authentication:** Secure registration and login using JWT.  
- **Transaction Management:** Users can buy products and view transaction history.  
- **Fraud Detection:** Basic scoring system to flag suspicious transactions.  
- **Real-time Testing:** REST API endpoints integrated with frontend for immediate interaction.  
- **Responsive Frontend:** Built with ReactJS for smooth user experience.

---

## Tech Stack

- **Frontend:** ReactJS  
- **Backend:** Node.js, Express  
- **Database:** SQL (MySQL)  
- **APIs:** RESTful services for transactions and user management  
- **Other:** JWT for authentication, Axios for API calls

---

## Project Structure

backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
└── index.js

frontend/
├── components/
├── pages/
├── services/
├── context/
├── App.js
└── index.js


---

## Getting Started

### Backend
1. Navigate to the backend folder:
   cd backend


## Install dependencies:

npm install
Create a .env file with your database credentials:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=payment_gateway_db


## Start the backend server:
npm run dev

## Frontend
Navigate to the frontend folder:
cd frontend


## Install dependencies:
npm install


##Start the frontend:
npm start

## Usage
Register a new user or login.
Browse available products (flowers and paints).
Make a purchase and check your transaction history.
Suspicious transactions are flagged automatically based on fraud scoring.

## Future Improvements
Advanced fraud detection using machine learning.
Payment gateway integration (Stripe/PayPal).
Admin panel for product management and analytics.
Mobile-friendly responsive design.
