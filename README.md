# SessionID - Techtack-Technologies

<div align="center">
  <img src="/assets/website.jpeg" alt="SessionID Web Application" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  
  <p><em>A modern web application built with Nuxt.js and Vue.js</em></p>

  ![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.15.4-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
  ![Vue.js](https://img.shields.io/badge/Vue.js-Latest-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
  ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
</div>

## 🚀 About

SessionID is a cutting-edge web application developed by Techtack-Technologies, leveraging the power of Nuxt.js for server-side rendering and Vue.js for reactive user interfaces. The application provides a seamless user experience with modern web technologies and robust backend integrations.

## ✨ Features

- 🌐 **Server-Side Rendering** - Built with Nuxt.js 3 for optimal performance and SEO
- ⚡ **Modern Vue.js** - Reactive components and composition API
- 🔥 **Firebase Integration** - Real-time database and authentication
- 🗄️ **Supabase Support** - Modern PostgreSQL database with real-time capabilities
- 🐳 **Docker Ready** - Containerized deployment with Docker Compose
- 📱 **Responsive Design** - Mobile-first approach with modern UI components
- 🔒 **Security Guidelines** - Built-in security features and best practices

## 🛠️ Tech Stack

- **Frontend:** Nuxt.js 3, Vue.js, TypeScript
- **Backend:** Supabase, Firebase, MySQL
- **HTTP Client:** Axios
- **Deployment:** Docker, Docker Compose
- **Development:** Hot reload, TypeScript support

## 📁 Project Structure

```
sessionid/
├── assets/           # Static assets (images, styles)
├── components/       # Vue.js components
│   ├── AppAlerts.vue
│   ├── AppContent.vue
│   ├── AppFooter.vue
│   ├── AppHeader.vue
│   ├── ContactForm.vue
│   ├── EventPage.vue
│   ├── Navbar.vue
│   └── SecurityIssues.vue
├── pages/           # Application pages/routes
│   ├── about.vue
│   ├── event.vue
│   ├── index.vue
│   └── SecurityGuidelines.vue
├── public/          # Public static files
├── docker-compose.yml
├── Dockerfile
├── nuxt.config.ts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sessionid
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run postinstall` - Prepare Nuxt

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Support

If you find this project helpful, please consider supporting us:

<div align="center">
  <img src="/assets/bmc_qr.png" alt="Support SessionID" width="200" height="200" style="border-radius: 15px;">
  <p><em>Scan the QR code to support our development</em></p>
</div>

## 📞 Contact

**Techtack-Technologies**

- Website: [Your Website]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]

---

<div align="center">
  <p>Made with ❤️ by <strong>Techtack-Technologies</strong></p>
</div>
