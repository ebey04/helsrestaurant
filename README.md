# Odin Restaurant Page

A single-page restaurant website built for the *JavaScript* section of The Odin Project.  
This project focuses on **Webpack**, **ES6 modules**, and **dynamic DOM manipulation** to simulate tabbed website navigation without using multiple HTML pages.

---

## 🚀 Live Demo
https://ebey04.github.io/helsrestaurant/

##  Features

### 🔹 Single Page Application Structure
- Only one HTML file (`template.html`)
- Page “tabs” (Home, Menu, About) are generated entirely with JavaScript
- Content is dynamically replaced inside a single `<div id="content">`

### 🔹 JavaScript Modules
- Each tab belongs to its own module:
  - `home.js`
  - `menu.js`
  - `about.js`
- Each module exports a function that creates and appends its page content
- `index.js` handles:
  - Imports
  - Event listeners
  - Swapping out content on button clicks

### 🔹 Webpack Bundling
- Fully configured Webpack project, including:
  - Entry point (`src/index.js`)
  - HtmlWebpackPlugin
  - CSS loaders (`style-loader` + `css-loader`)
  - Webpack Dev Server with live reload
  - Source maps for easier debugging

### 🔹 Webpack Dev Server
- Live reloading on save
- Watches JS, CSS, and the HTML template for changes

---

## 📁 Project Structure
src/
│── index.js # Main logic + event listeners
│── home.js # Home tab module
│── menu.js # Menu tab module
│── about.js # About tab module
│── styles.css # Global styling
│── template.html # Base HTML used by HtmlWebpackPlugin
webpack.config.js # Webpack setup
package.json # Project dependencies


---

## 🛠️ Technologies Used
- **JavaScript (ES6+)**
- **Webpack**
  - HtmlWebpackPlugin
  - Webpack Dev Server
  - Style & CSS loaders
- **Node.js + npm**

---

## 📚 What I Learned
- How to structure a project using ES6 modules
- How to set up and configure Webpack from scratch
- Using Webpack to bundle JavaScript, CSS, and HTML
- Dynamically creating and replacing DOM elements
- Creating a simple SPA-like interface using event listeners

---

## 🗂️ Setup

To install dependencies:
npm install

To run the dev server:
npx webpack serve

To build the final production files:
npx webpack

