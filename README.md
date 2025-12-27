# TechnoCom - Modern Business Website

A modern, responsive business website built with React and Vite, showcasing services, products, team, and client information with smooth scrolling and interactive components.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface using Tailwind CSS
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability
- **Carousel Support**: Image carousel functionality using React Splide for showcasing products and clients
- **Smooth Navigation**: Fixed navbar with smooth scrolling to different sections
- **SEO Friendly**: Well-structured components and semantic HTML
- **Fast Performance**: Built with Vite for optimized build and development experience

## 📁 Project Structure

```
src/
├── Component/
│   ├── About/              # About section
│   ├── Clients/            # Clients showcase
│   ├── Contact/            # Contact form
│   ├── Footer/             # Footer component
│   ├── HeroSection/        # Hero/banner section
│   ├── Navbar/             # Navigation bar
│   ├── Products/           # Products showcase
│   ├── Services/           # Services section
│   ├── Stats/              # Statistics section
│   └── Team/               # Team members section
├── utility/
│   ├── ClientCards.jsx     # Client card component
│   └── ServicesCards.jsx   # Service card component
├── assets/                 # Images and static assets
├── App.jsx                 # Main App component
├── main.jsx                # Entry point
├── App.css                 # Global styles
└── index.css              # Base styles
```

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Carousel**: React Splide
- **Linting**: ESLint 9
- **Code Quality**: ESLint with React hooks and refresh plugins

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd technoCom
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

## 📋 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Sections

### Navbar

Fixed navigation bar with logo and smooth scrolling links to all sections

### Hero Section

Eye-catching banner section to welcome visitors

### Services

Detailed overview of services offered with professional styling

### About

Company information and background

### Statistics

Key metrics and achievements displayed visually

### Products

Product showcase with carousel/slider functionality

### Clients

Featured clients section with carousel display

### Team

Team members presentation

### Contact

Contact form for inquiries

### Footer

Footer with additional links and information

## 🎯 Features in Development

- [ ] Responsive navbar improvements
- [ ] Enhanced styling consistency across sections
- [ ] Contact form validation and submission
- [ ] Additional product details

## 📱 Responsive Design

The website is optimized for:

- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Vite Configuration

See [vite.config.js](vite.config.js) for build and development settings.

### Tailwind Configuration

Uses the modern Tailwind CSS v4 with Vite plugin for optimized CSS generation.

### ESLint Configuration

See [eslint.config.js](eslint.config.js) for linting rules.

## 📝 License

This project is private and for commercial use.

## 👤 Contributing

This is a private project. Contact the project owner for contribution guidelines.

## 📞 Support

For issues or questions, please contact the project maintainer.
