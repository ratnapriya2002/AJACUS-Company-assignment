## 🚀 Project Overview

A responsive and feature-rich **Employee Directory Web Application** built using **React + Tailwind CSS**.  
This project allows users to manage employee records with **search, sort, filters, pagination, and CRUD operations (Add, Edit, Delete).**  

---

## ✨ Features

-  View employee list in a clean tabular format  
-  **Search** across multiple fields (First Name, Last Name, Email, Department)  
-  **Sorting** on columns (e.g., by ID, Name, Email)  
-  **Filter Modal** to filter employees by specific criteria  
-  **Pagination** with dropdown-based page size selection (10, 25, 50, 100 rows)  
-  **Add new employee**  
-  **Edit existing employee**  
-  **Delete employee** with confirmation  
-  **Reload button** to refresh users list  
-  **Responsive Design** (works on mobile, tablet, desktop)  

---

##  Tech Stack

- **Frontend:** React, Tailwind CSS  
- **State Management:** React Hooks (`useState`, `useMemo`)  
- **Data:** Custom `useUsers` hook (mock/fake API simulation + JSONPlaceholder reference)  
- **UI Components:** Modals, Toasts, Pagination, Tables  

---

##  Folder Structure

employee-directory/
├── public/ # Static assets
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── SearchSortBar.jsx
│ │ ├── FilterModal.jsx
│ │ ├── UserTable.jsx
│ │ ├── UserFormModal.jsx
│ │ ├── Pagination.jsx
│ │ └── Toast.jsx
│ ├── components/hooks/
│ │ └── useUsers.js # Custom hook for user data
│ ├── App.jsx # Main application logic
│ └── index.js # Entry point
├── package.json
└── README.md

## ⚙️ Installation & Setup

1. Clone the repository:


git clone https://github.com/your-username/employee-directory.git
cd employee-directory
Install dependencies:

npm install
Start the development server:



npm start
The app will run on: http://localhost:3000

🎮 Usage
Click Add Employee to create a new employee
Use the Search Bar to find employees quickly
Apply Filters (First, Last, Email, Department)
Use the Dropdown in Pagination to select rows per page
Sort by clicking column headers
Edit/Delete employees directly from the table  

Challenges Faced & Improvements


Implementing pagination with dynamic dropdown options required extra logic to ensure correct slicing of rows.
Since JSONPlaceholder does not actually persist data, simulating Add/Edit/Delete operations was tricky. I used local state updates combined with mock API calls.
Ensuring responsiveness across all screen sizes while keeping the UI clean.
Improvements if given more time:
Implement a real backend (e.g., Node.js + Express + MongoDB) for persistent storage.
Add unit tests (React Testing Library/Jest) for all components and hooks.
Enhance UI with animations and better filter options (multi-select, dropdowns).
Add export to CSV/PDF feature for employee data

