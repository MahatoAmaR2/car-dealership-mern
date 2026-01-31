# 🚗 AutoHub – Frontend

AutoHub is a **modern car dealership frontend application** built using **React** and **Tailwind CSS**.  
It delivers a smooth, responsive experience for browsing cars, filtering listings, authentication, and admin car management.

---

## 🌟 Features

### 👥 Authentication
- User **Signup & Login**
- JWT authentication using **HTTP-only cookies**
- Secure **Login / Logout**
- **Role-based UI** (Admin / User)

### 🚘 Car Listings
- Shows cars from:
  - **Backend Database (MongoDB)**
  - **Dummy data** (fallback for free DB limits)
- Responsive grid layout
- Car cards with:
  - Images
  - Price
  - Mileage
  - Year

### 🔍 Search & Filters
- Search by **make / model**
- Filter by:
  - Brand
  - Year
  - Price range
- Amazon / Flipkart–style sidebar filters
- Mobile-friendly filter drawer

### 🧑‍💼 Admin Features
- **Admin-only Car Register**
- Register cars with:
  - Make, model, year
  - VIN, mileage, price
  - Multiple image uploads
- Newly added cars appear instantly in listings

### 🔔 Notifications
- Inbuilt **Toast system**
- Success & error notifications for:
  - Signup
  - Login
  - Logout
  - Car registration

### 📱 Responsive Design
- Mobile, tablet, and desktop support
- Sticky navbar
- Hamburger menu for mobile

---

## 🛠 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **Lucide Icons**
- **Custom Toast Component**

---


---

## 🔐 Authentication Flow

- Login API sets JWT in an **HTTP-only cookie**
- Frontend never accesses token directly
- Axios configured with `withCredentials: true`
- User info stored in `localStorage` for UI rendering
- Navbar updates dynamically after login

---

## 🚗 Car Data Handling

### Data Sources
- **Backend API** → `/api/cars`
- **Dummy data** → `data.js`

### Strategy
- Fetch cars from backend
- Merge with dummy data
- Apply filters & search on merged list

**Benefits:**
- Works with free DB limitations
- Reliable demo experience
- No UI breaks if backend is empty

---

## 🧑‍💼 Role-Based UI

| Role  | Permissions |
|------|-------------|
| User | Browse car listings |
| Admin | Car register + logout |

Admin-only actions are hidden for normal users.

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
npm install


