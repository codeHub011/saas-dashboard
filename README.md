# SaaS Contracts Dashboard

A React + Tailwind CSS single-page application (SPA) that simulates a SaaS contracts management dashboard.  
This project was built as part of the **UI/UX Developer Assignment**.

---

## 🚀 Features
- **Login Page**: Mock authentication with `username` (any) and `password = test123`.
- **Contracts Dashboard**:
  - Sidebar navigation (Contracts, Insights, Reports, Settings).
  - Topbar with user profile/logout.
  - Contracts table with search & filters.
  - Handles all states: Loading, Empty, Error.
- **Contract Detail Page**:
  - Metadata (title, parties, dates, status, risk).
  - Clauses section with summary & confidence score.
  - AI Insights with severity labels.
  - Evidence panel (side drawer).
- **Upload Modal**:
  - Drag & drop OR file browse.
  - Shows upload progress (Uploading → Success/Error).
  - Simulated upload (no backend).

---

## 🛠️ Tech Stack
- [React](https://react.dev/) (functional components + hooks)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- Context API (state management)
- Deployment: **Vercel / Netlify**

---

## 📂 Project Structure
src/
┣ components/ → Sidebar, Topbar
┣ context/ → AuthContext (login state)
┣ pages/ → Login, Dashboard, ContractDetail
┣ App.jsx
┣ main.jsx
┗ index.css
public/
┗ contracts.json → mock API

🔑 Login Credentials

Username: any value

Password: test123



✅ Assumptions

Mock authentication only (no real backend).

Contract data is stored in public/contracts.json.

File upload is simulated with setTimeout (no backend).

Only the core flows (login, dashboard, detail, upload) are implemented.

📊 Evaluation Mapping

UI/UX Quality → Responsive, clean Tailwind UI

React + Tailwind Skills → Functional components, hooks, utility classes

API Consumption → Fetch contracts from mock JSON

Code Quality → Context API, modular structure

Deployment → Hosted on Vercel/Netlify

Attention to Detail → Error/loading/empty states
