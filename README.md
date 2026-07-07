# Nikhil Kumawat - Personal Resume Website

A modern, Apple-inspired personal resume website built with React, TailwindCSS, and Framer Motion.

## Features

- **Apple-inspired Design**: Clean, minimalist UI with smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Modern Tech Stack**: React 18, TailwindCSS, Vite

## Sections

- **Hero**: Introduction with name, title, and call-to-action buttons
- **Experience**: Professional timeline showcasing 8+ years of experience
- **Skills**: Categorized technical and soft skills
- **Projects**: Featured projects with technologies used
- **Contact**: Contact information and social links

## Prerequisites

Before running this project, you need to have Node.js installed on your system.

### Installing Node.js

**macOS (using Homebrew):**
```bash
brew install node
```

**Or download from official website:**
Visit https://nodejs.org/ and download the LTS version for macOS.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

Edit the following files to customize your resume:

- **Hero**: `src/components/Hero.jsx` - Update name, title, and description
- **Experience**: `src/components/Experience.jsx` - Add your work experience
- **Skills**: `src/components/Skills.jsx` - Update your skill categories
- **Projects**: `src/components/Projects.jsx` - Add your featured projects
- **Contact**: `src/components/Contact.jsx` - Update contact information and social links

### Update Social Links

Update the social media links in:
- `src/components/Navigation.jsx`
- `src/components/Contact.jsx`

### Customize Colors

Edit `tailwind.config.js` to customize the color scheme. The Apple-inspired colors are defined in the theme extension.

## Tech Stack

- **React 18**: UI library
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Vite**: Build tool and dev server
- **Lucide React**: Icon library

## License

This project is open source and available for personal use.
