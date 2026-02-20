# Frontend Mentor – Contact Form (React)

A modern, accessible contact form built with React, following best practices in UI/UX, accessibility (a11y), testing, and component architecture. This project is a solution to the **Frontend Mentor – Contact Form** challenge.

---

## 📖 Overview

### Description

An accessible and responsive contact form that provides real-time validation, keyboard navigation support, screen reader compatibility, and user feedback through success notifications.

### Target Users

* Front-end developers
* React learners
* Accessibility-focused developers
* UI/UX learners
* Junior developers practicing real-world projects

---

## ✨ Features

* Accessible form inputs (ARIA support)
* Keyboard-only navigation
* Screen reader announcements
* Real-time form validation
* Email format validation
* Required field validation
* Success toast notification
* Responsive layout (mobile & desktop)
* Hover & focus states
* Semantic HTML structure
* Reusable React components
* Clean UI architecture

---

## 🧱 Architecture

* **Architecture style:** Component-based architecture
* **Design approach:** Atomic UI principles
* **Structure:** Modular, reusable components
* **Separation of concerns:** UI / logic / validation

---

## 🧠 State Management

* React Hooks (`useState`)
* Controlled components
* Local component state

---

## 🌐 Routing

* None (Single-page application)

---

## 🔌 API Usage

* None (Client-side only)

---

## 🔐 Authentication

* None

---

## 🗄 Database

* None (Frontend-only project)

---

## 🧪 Testing

* **Framework:** Vitest
* Unit tests for validation logic
* Function-level testing

---

## 🧰 Tech Stack

* **Framework:** React
* **Build Tool:** Vite
* **Styling:** CSS (custom properties, Flexbox, Grid)
* **Testing:** Vitest
* **Accessibility:** WCAG-aligned practices
* **Language:** JavaScript (ES6+)

---

## 📁 Project Structure

```txt
.
├── assets/
│   ├── fonts/
│   ├── images/
│   └── static/
├── design/
├── public/
├── src/
│   ├── assets/
│   ├── Component/
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.css
│   │   │   └── ContactForm.jsx
│   │   └── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   └── SuccessMessageToast/
│   │   │   ├── SuccessMessageToast.css
│   │   │   └── SuccessMessageToast.jsx
│   ├── styles/
│   │   ├── reset.css
│   │   └── variables.css
│   ├── test/
│   │   ├── validators.test.js
│   │   └── validateForm.test.js
│   ├── Utils/
│   │   ├── validateForm.js
│   │   └── validators.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── style-guide.md
├── vite.config.js
└── README.md
```

---

## ⚙️ Environment Variables

None required.

---

## 📜 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run test       # Run tests (Vitest)
```

---

## 🚀 Setup & Installation

### Prerequisites

* Node.js ≥ 18
* npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/jeremie1207/Frontend-Mentor---Contact-form---React.git
cd Frontend-Mentor---Contact-form---React
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 🏗 Build

```bash
npm run build
```

---

## 🌍 Deployment

**Platform:** Vercel

```bash
npm run build
```

Deploy the `dist/` folder.

---

## 🔗 Live Demo

* **Repository:**
  [https://github.com/jeremie1207/Frontend-Mentor---Contact-form---React](https://github.com/jeremie1207/Frontend-Mentor---Contact-form---React)

* **Live Site:**
  [https://frontend-mentor-contact-form-react.vercel.app/](https://frontend-mentor-contact-form-react.vercel.app/)

---

## 🖼 Screenshots

```txt
assets/images/contact-form-screenshot.png
design/desktop-preview.jpg
```

---

## 🧩 Testing Strategy

* Unit tests for validation functions
* Logic isolation
* Input validation coverage
* Error handling verification

###

---

## 📄 License

MIT License

---

## 👤 Author

**Jeremie Barhabazi**
Frontend Mentor: [https://www.frontendmentor.io/profile/jeremie1207](https://www.frontendmentor.io/profile/jeremie1207)

---

## 🎯 Learning Outcomes

* React component architecture
* Form handling with hooks
* Accessibility-first development
* UI validation patterns
* Test-driven logic validation
* Clean project structuring
* Production-ready React workflow

---

## 🧠 AI Collaboration

AI tools were used for:

* Debugging
* Code explanation
* Architecture suggestions
* Refactoring
* Documentation structuring

Tool used:

* ChatGPT

---

## ⭐ Acknowledgments

* Frontend Mentor community
* Accessibility best-practice contributors
* Open-source React ecosystem
