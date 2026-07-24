# Pusparaj Baache Magar | Personal Portfolio

A modern, responsive, and interactive personal portfolio website built to showcase my skills, projects, certifications, achievements, and professional journey as a Computer Science student and Full Stack Developer.

---

## 🚀 Live Demo

🌐 **Portfolio:** [https://portfolio-pusparaj.netlify.app/](https://portfolio-pusparaj.netlify.app/)

---

## 📌 About

This portfolio showcases my technical skills, academic background, projects, certifications, achievements, and contact information.

The website features a modern user interface, smooth animations, responsive design, project showcases, LeetCode integration, and a functional contact form connected to a Node.js and Express.js backend for email communication.

---

## ✨ Features

- 🎨 Modern and Responsive UI
- ⚡ Smooth Animations using Framer Motion
- 📄 Downloadable Resume
- 💼 Featured Projects
- 🛠 Technical Skills Section
- 🎓 Education Timeline
- 📜 Certifications with View Links
- 🏆 Achievements Section
- 🧠 LeetCode Profile Integration
- 📬 Functional Contact Form
- 📧 Backend Email Notification System
- 🔁 Automatic Email Reply to Visitors
- 🔗 GitHub and LinkedIn Integration
- 📱 Mobile-Friendly Design

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- Nodemailer
- REST API

### Tools & Deployment

- Git
- GitHub
- VS Code
- Netlify

---

## 📂 Project Structure

```text
my-portfolio/
│
├── my-portfolio/
│   │
│   ├── public/
│   │   ├── certificates/
│   │   │   ├── aws.pdf
│   │   │   ├── info.pdf
│   │   │   ├── net.pdf
│   │   │   └── nass.pdf
│   │   │
│   │   ├── resume.pdf
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │   └── robots.txt
│   │   └── sitemap.xml
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Project.jsx
│   │   │   └── ...
│   │   │
│   │   ├── data/
│   │   │   └── portfolioData.jsx
│   │   │
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
│
├── portfolio-backend/
│   │
│   ├── config/
│   │   └── email.js
│   │
│   ├── controllers/
│   │   └── contact.controller.js
│   │
│   ├── routes/
│   │   └── contact.routes.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
└── README.md
```
🚀 Installation and Setup
1. Clone the Repository
git clone https://github.com/Puspraj-Magar/my-portfolio.git
cd my-portfolio
🎨 Frontend Setup

Navigate to the frontend directory:

cd my-portfolio

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend will run on:

http://localhost:5173
⚙️ Backend Setup

Open a new terminal and navigate to the backend directory:

cd portfolio-backend

Install dependencies:

npm install

Create a .env file inside the portfolio-backend folder:

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECEIVER_EMAIL=your-email@gmail.com
PORT=5000

⚠️ Never commit your actual .env file or Gmail App Password to GitHub.

Start the backend server:

node server.js

The backend will run on:

http://localhost:5000
📧 Contact Form Workflow

The contact form works through the following process:

Visitor fills out the contact form
              ↓
React Frontend
              ↓
POST /api/contact
              ↓
Express.js Backend
              ↓
Nodemailer
              ↓
Email notification sent to portfolio owner
              ↓
Automatic reply sent to visitor
🔗 API Endpoint
Send Contact Message
POST /api/contact
Local URL
http://localhost:5000/api/contact
Request Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I want to discuss a project."
}
Successful Response
{
  "success": true,
  "message": "Message sent successfully!"
}
🔐 Environment Variables

The backend uses environment variables to protect sensitive email credentials.

Example:

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=your-email@gmail.com
PORT=5000

The actual .env file is excluded from GitHub using .gitignore.

📸 Preview

💼 Featured Projects

Some of the projects included in this portfolio:

🛒 React Shopping Cart Application
🌦 Weather Application
🎓 Student Management System
💼 Job Portal Web Application
🧠 Text Similarity Detector
📋 Todo Application
📜 Certifications
AWS Academy – Generative AI Foundations
Infosys Springboard – Database and SQL
CompTIA Network+
NASSCOM – HTML & CSS
🏆 Achievements
LeetCode Problem Solving
Coding Practice and DSA
Technical Certifications
Full-Stack Development Projects
🔮 Future Improvements
Admin Dashboard
Dark/Light Theme Toggle
Blog Section
Project Filtering
Visitor Analytics
Database Integration for Contact Messages
📬 Contact

Pusparaj Baache Magar

📧 Email: pusprajmagar@gmail.com

💼 LinkedIn: https://linkedin.com/in/Puspraj-Magar

💻 GitHub: https://github.com/Puspraj-Magar

🌐 Portfolio: https://portfolio-pusparaj.netlify.app/

📄 License

This project is licensed under the MIT License.
