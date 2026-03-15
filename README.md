# DevBlog – Modern Blog Website

DevBlog is a modern, responsive blog website built with **HTML, Tailwind CSS, and Vanilla JavaScript**.
The project focuses on clean UI design, fast performance, and simple content management using front-end data.

## 🚀 Features

* 📱 Fully Responsive Design (Mobile First)
* 🎨 Modern UI built with Tailwind CSS
* 📰 Blog Article System
* 📄 Article Detail Modal View
* 📊 Pagination System (8 posts per page)
* 📚 Sidebar with Recent Posts
* 📧 Newsletter Subscription Section
* ⚡ Smooth Animations & Hover Effects
* 🧩 Modular JavaScript Structure

## 🖥️ Pages

### 1. Home Page (index.html)

* Shows latest **6 blog posts**
* Sidebar with **5 recent posts**
* Newsletter subscription section
* Clean card-based layout

### 2. Articles Page (article.html)

* Displays all blog posts
* **8 posts per page**
* Pagination navigation (1,2,3...)
* Sidebar with recent posts
* Modal system for full article reading

### 3. Course Page (course.html)

* Course listing layout
* Course price display (TK / Dollar)
* Course enrollment button
* Redirect to course detail page after enroll

## 🧱 Tech Stack

| Technology         | Usage                        |
| ------------------ | ---------------------------- |
| HTML5              | Structure                    |
| Tailwind CSS       | Styling                      |
| Vanilla JavaScript | Dynamic content & pagination |
| Font Awesome       | Icons                        |

## 📂 Project Structure

```
devblog
│
├── index.html
├── article.html
├── course.html
│
├── assets
│   ├── images
│   ├── css
│   └── js
│
└── README.md
```

## 📊 Blog Post System

Blog posts are currently stored in a **JavaScript array**.

Example:

```javascript
const posts = [
 {
   id:1,
   title:"Mastering Tailwind CSS Grid",
   category:"Frontend",
   author:"Jakariya Jack",
   date:"Mar 12, 2026"
 }
]
```

Posts are dynamically rendered into the page using JavaScript.

## 🔢 Pagination Logic

* Posts per page: **8**
* Example pagination:

```
Page 1 → Posts 1–8  
Page 2 → Posts 9–16  
Page 3 → Posts 17–24
```

## 🎯 Future Improvements

* Blog CMS Integration
* Markdown blog support
* Dark mode toggle
* Blog search system
* Category filtering
* Backend API integration
* Comment system

## 📸 Screenshots

You can add screenshots here to show:

* Homepage
* Article page
* Blog modal
* Pagination system

## 📜 License

This project is open-source and available under the **MIT License**.

## 👨‍💻 Author

**Jack**

Frontend Developer & Web Enthusiast

---

⭐ If you like this project, feel free to star the repository!

