# 🧑‍💻 Aayush Arya — Portfolio Website

Welcome to the official repository for my personal developer portfolio!  
This website showcases my **projects**, **skills**, **experience**, and includes integrations with **Golang backend**, **MongoDB**, and **MySQL** for a dynamic and full-stack experience.

---

## 🌐 Live Website

👉 [Visit Portfolio Site](https://portfolio-main-aayusharya.vercel.app/)  
👉 [GitHub Profile](https://github.com/AayushArya28)  
👉 [LinkedIn](https://www.linkedin.com/in/aayusharyaiam/)  
👉 [LeetCode](https://leetcode.com/u/aayusharya_i_am/)

---

## 🚀 Features

- ⚡ **Modern UI** with ReactJS + Tailwind CSS  
- 🔐 **Backend** using Go (Golang) with REST API  
- 💾 **MongoDB** for form submissions & blog (optional)  
- 🗃️ **MySQL** for structured content like skills, projects, and achievements  
- 📥 Downloadable Resume  
- 📬 Contact form with database storage  
- 🔎 Responsive and SEO-friendly
- 
---

## 🧩 Sections

- **Home** – Hero introduction with call to action  
- **About Me** – Education, career goals, and resume  
- **Projects** – Showcasing work like:
  - [Lifeer App](https://lifeer-app.vercel.app/) – Full-stack productivity dashboard  
  - Technika’24 Frontend  
  - [IMPACT'25](https://impact2025.bitmesra.ac.in/) Conference Website  
- **Skills** – Frontend, Backend, DBs, Tools  
- **Experience** – Chegg India and internships  
- **LeetCode & GitHub Stats** – CP Profile and GitHub activity  
- **Contact** – Form with MongoDB backend & social links

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js
- Tailwind CSS
- Axios / Fetch API

### 🔹 Backend
- Go (Golang) – REST APIs using `Gin` or `Fiber`
- Firebase Authentication (for Lifeer App)
- Node.js

### 🔹 Database
- MongoDB Atlas – Unstructured data (form, blogs)
- MySQL (PlanetScale / Railway) – Structured data (skills, projects)

---

## 🧰 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/AayushArya28/portfolio-website.git
cd portfolio-website

# Install frontend dependencies
cd client
npm install
npm run dev

# Setup backend
cd ../server
go mod tidy
go run main.go
