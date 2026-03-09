#  Shopping Cart Indicator

A beginner React project.
Clicking the **Add Item** button increases the cart count and updates a separate
display component in real time — no page reload needed.

---

##  What It Does

- Displays a **cart indicator** showing the total number of items
- Has an **Add Item button** that increases the cart count on every click
- Count updates **live** across both components instantly

---

##  Core Concept Used

This project is built around **Lifting State Up** in React.

Since two separate components need access to the same cart count:

- The **state lives in the parent** (`App.jsx`)
- It is **passed down to children** via props
- This creates a **single source of truth**
- Data flows **one direction only** — from parent to child

---

##  Project Structure
```
shopping-cart-app/
├── src/
│   ├── components/
│   │   ├── AddItemButton.jsx
│   │   └── CartIndicator.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

---

##  Tech Stack

- **React** (with Hooks)
- **Vite** (build tool)
- **JavaScript** (ES6+)
- **CSS**

---

##  Getting Started

### Prerequisites

- Node.js v18 or higher
- npm installed

### Run Locally
```bash
npm run dev
```

App will be running at **http://localhost:5173**

---

##  Build for Production
```bash
npm run build
```

Output will be in the `/dist` folder, ready to deploy.

---

##  Deployment

### Option 2 — Netlify

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Build and deploy
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📤 Push to GitHub

1. Initialise git
```bash
git init
```

2. Stage all files
```bash
git add .
```

3. First commit
```bash
git commit -m "feat: initial shopping cart indicator app"
```

4. Link to your GitHub repo
```bash
git remote add origin https://github.com/omojoimadi/shopping-cart-app.git
```

5. Push
```bash
git branch -M main
git push -u origin main
```

---

## 📄 License

MIT