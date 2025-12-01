# Knowledge Reflection

## Introduction
This semester’s development work allowed me to build a complete developer profile website, refine my project organization skills, and practice modern front-end workflows. This reflection summarizes the technical concepts I used, the infrastructure and architecture of my app, and the processes that guided my work.

---

# Key Technical Concepts

## Information Systems Architecture (IS Architecture)
> “Information systems architecture is a structured framework used to conceptualize, design, and guide the development of information systems, focusing on how data, processes, and technology interact.”  
> *Source: IBM Documentation*

I used this concept naturally when deciding how data (JSON), presentation (HTML/CSS), and functionality (JavaScript) fit together in my app.

---

## IT Infrastructure
> “IT infrastructure refers to the combined set of hardware, software, networks, facilities, and services required for the operation and management of an enterprise IT environment.”  
> *Source: Red Hat*

In my case, IT infrastructure refers to all the tools and services I used to build and deploy my website—including developer tools, browsers, GitHub systems, and external libraries.

---

## RESTful API
> “A REST API is an architectural style for distributed hypermedia systems, allowing clients and servers to communicate statelessly over HTTP using standard methods (GET, POST, etc.).”  
> *Source: Mozilla Developer Network (MDN)*

Although my website doesn’t call a full REST API, I *do* use the concepts of GET requests when fetching my JSON data.

---

## Fetch API
> “The Fetch API provides an interface for fetching resources across the network in a more powerful and flexible way than older technologies like XMLHttpRequest.”  
> *Source: MDN Web Docs*

I used the Fetch API to load project and achievement data from my `projects.json` file and to dynamically populate Bootstrap cards in my app.

---

# Application Infrastructure (Tech Stack)

My infrastructure includes every tool, service, and platform used to build and manage this project:

### **Core Languages**
- HTML5  
- CSS3  
- JavaScript (ES6+)

### **Frameworks / Libraries**
- Bootstrap 5  
- Bootstrap Icons  
- zero-md (for live-rendered markdown)  
- jQuery (for compatibility with legacy scripts)  

### **Developer Tools**
- Chrome DevTools 
- WAVE Accessibility Tool  
- Nu Validator  
- GitHub Copilot / ChatGPT (AI-assisted problem solving)  

### **Content Management**
- JSON data stored in `assets/data/projects.json`  
- Markdown blog + reflection pages stored in `assets/data/blog/`

### **Version Control & Deployment**
- GitHub repository  
- GitHub Issues (task tracking, milestones)  
- GitHub Pages (live deployment from `docs/` folder)  
- GitHub Wiki (additional documentation)

This set of technologies forms the *infrastructure layer* of the entire app.

---

# Application Architecture

The architecture explains *how everything fits together*:


### **Key Architectural Decisions**
- **Data Isolation:** I stored all project/achievement data in `projects.json`, allowing the homepage and About page to render content dynamically without changing HTML.
- **Modular Pages:** `pages/` contains About, Blog, and Resources so content stays maintainable.
- **Dynamic Markdown Rendering:** zero-md allows my blog and knowledge reflection to stay up-to-date with zero HTML changes.
- **Theme Persistence:** `localStorage` stores dark/light mode preferences.
- **Bootstrap Grid Architecture:** Cards are structured using Bootstrap’s responsive grid system.

---

# Development Process

### **User Story**
*“As a developer, I want a clean and responsive profile site so I can showcase my skills, projects, and technical growth.”*

### **GitHub Issues & Milestones**
I created issues for:
- dynamic project rendering  
- dark/light mode logic  
- JSON data structure  
- MD viewing enhancements

### **Wireframing**
I sketched layouts for my homepage, About section, and blog structure before coding. This helped me plan content blocks and card sections.

### **Local → GitHub Workflow**
1. Build locally  
2. Commit changes  
3. Push to GitHub  
4. GitHub Pages deploys from `/docs`  
5. Test on live environment  
6. Validate with Nu & WAVE

This cycle ensured continual improvement.

---

# Takeaway – Advice to My Past Self

If I could go back to the start of my web development journey, I would tell myself:

> “Don’t wait to modularize your code and content. Store data in JSON early, use reusable components, and rely on tools like zero-md to keep your workflow clean.”

Modularity would have saved me time and made my project more scalable from the beginning. Understanding accessibility earlier would also have improved my layouts and decisions throughout the project.

---

# Final Thoughts

This project taught me not only how to build a polished portfolio, but also how to structure data, manage a deployment pipeline, work with accessibility standards, and maintain clean development processes. These skills transfer directly into real-world development work and will continue to influence how I build software moving forward.
