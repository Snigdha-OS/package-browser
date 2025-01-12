# 📦 Package Browser - Search Packages  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Version](https://img.shields.io/github/package-json/v/Snigdha-OS/package-browser)](https://github.com/Snigdha-OS/package-browser/releases)  
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/Snigdha-OS/package-browser/issues)  
[![Build Status](https://img.shields.io/github/actions/workflow/status/Snigdha-OS/package-browser/ci.yml?branch=main)](https://github.com/Snigdha-OS/package-browser/actions)  
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fsnigdha-os.github.io)](https://snigdha-os.github.io)  

🚀 **Package Browser** is a user-friendly web application designed to simplify browsing, searching, and exploring packages available for Snigdha OS. This tool helps users find the right software with ease, whether for development, daily use, or penetration testing.  

## 🌟 Features  

- 🔍 **Search and Filter**: Quickly search and filter through a comprehensive list of packages.  
- 📜 **Detailed Package Info**: View package descriptions, versions, dependencies, and more.  
- ⚡ **Fast and Intuitive**: Built with performance and usability in mind.  
- 🎨 **Customizable Interface**: Light and dark themes to match your preferences.  

## 🗂️ Repository Structure  

```plaintext  
package-browser/  
.
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.js
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── InstallGuide.tsx
│   │   ├── Logo.tsx
│   │   ├── PackageCard
│   │   │   ├── Badge.tsx
│   │   │   ├── ExpandButton.tsx
│   │   │   └── index.tsx
│   │   ├── PackageCard.tsx
│   │   ├── PackageList.tsx
│   │   ├── SearchBar.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks
│   │   ├── usePackages.ts
│   │   └── useTheme.ts
│   ├── index.css
│   ├── main.tsx
│   ├── services
│   │   └── api.ts
│   ├── types.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts  
```  

## 🛠️ Installation  

Clone the repository and set up the project:  
```bash  
git clone https://github.com/Snigdha-OS/package-browser.git  
cd package-browser  
pnpm install  
pnpm run dev  
```  

## 🌐 Usage  

1. Launch the app locally by running `pnpm run dev`.  
2. Open your browser and navigate to `http://localhost:5173/package-browser/`.  
3. Search for packages, view details, and explore dependencies.  

## 🤝 Contributing  

We welcome contributions from the community! Here’s how you can help:  

1. 🍴 Fork the repository.  
2. 🛠️ Create a feature branch: `git checkout -b feature-name`.  
3. 🐛 Fix issues or add new features.  
4. 📝 Commit changes: `git commit -m "Add feature/bug fix description"`.  
5. 🔄 Push changes and create a pull request.  

## 👤 Author  

This project is developed and maintained by the **Snigdha OS Team** under the guidance of **Tonmoy Infrastructure**.  

- 💻 GitHub: [Snigdha OS](https://github.com/Snigdha-OS)  
- 🌐 Website: [Snigdha OS](https://snigdha-os.github.io)  

## 📃 License  

This project is licensed under the [MIT License](LICENSE).  

## 💬 Feedback  

We’d love to hear your feedback and suggestions! Feel free to open an issue or contact us directly via the [Snigdha OS](https://github.com/Snigdha-OS) organization.