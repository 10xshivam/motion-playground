# 🎬 Motion Playground

A creative exploration of animations and motion design using [Motion](https://motion.dev) (formerly Framer Motion) and Next.js. This repository serves as a playground for experimenting with cool animations, transitions, and interactive components.

## ✨ Features

- 🎨 Beautiful animated components
- 🚀 Built with Next.js 16 and React 19
- 🎭 Motion animations for smooth transitions
- 💅 Tailwind CSS for styling
- 📱 Responsive design
- 🌙 Dark mode support
- 🗺️ Route-based component organization

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org) 16.1.0
- **React:** 19.2.3
- **Animation:** [Motion](https://motion.dev) 12.23.26
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/motion-playground.git
cd motion-playground
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗺️ Available Routes

- `/` - Main landing page with links to animated components
- `/x-wrapped` - X's Wrapped animated card component

## 📁 Project Structure

```
motion-playground/
├── app/
│   ├── page.tsx              # Main landing page with component links
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── x-wrapped/
│       └── page.tsx          # X's Wrapped animated card component
├── components/
│   └── Button.tsx            # Animated button component
└── public/                   # Static assets (images, icons)
```

## 🎯 Current Components

### X's Wrapped Card (`/x-wrapped`)
An animated card component inspired by X (Twitter) Wrapped:
- Smooth fade, scale, and blur transitions on mount/unmount
- Animated button with text transitions
- Interactive hover effects with blur animations
- Spring-based physics animations
- Profile card with stats display

### Animated Button Component
- Text transition animations (fade in/out)
- Hover and active states with transforms
- 3D perspective effects

## 🎨 Animation Examples

This playground explores various animation techniques:

- **Enter/Exit Animations** - Smooth component mounting/unmounting
- **Hover Effects** - Interactive hover states
- **Spring Physics** - Natural, physics-based animations
- **Text Transitions** - Animated text changes
- **Blur Effects** - Creative visual transitions

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal playground project, but feel free to fork it and create your own motion experiments!

## 📄 License

MIT License - feel free to use this project for learning and inspiration.

## 🔗 Resources

- [Motion Documentation](https://motion.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Built with ❤️ for exploring the art of motion design
