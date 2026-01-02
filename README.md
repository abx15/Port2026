# Arun Kumar Portfolio

A modern, responsive portfolio website showcasing frontend and full-stack development skills, projects, and professional experience. Built with Next.js, TypeScript, and Tailwind CSS for optimal performance and user experience.

![Portfolio Preview](./public/placeholder.jpg)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Hero Section**: Dynamic hero with rotating skill highlights and smooth animations
- **Project Showcase**: Detailed project cards with live demos, GitHub links, and technology stacks
- **Skills & Technologies**: Comprehensive display of frontend, backend, and tool proficiencies
- **Team Section**: Introduction to the development team with contact information
- **Contact Integration**: Built-in contact form with email functionality
- **Dark/Light Theme**: Theme switching capability for user preference
- **Performance Optimized**: Fast loading times with Next.js optimization
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Re-usable component library
- **Tailwind CSS** - Styling framework

### Backend & APIs
- **Next.js API Routes** - Serverless API endpoints
- **Resend** - Email service integration
- **Vercel Analytics** - Web analytics

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type checking

## 📁 Project Structure

```
arun-kumar-portfolio/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── achievements/             # Achievements page
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form API
│   ├── contact/                  # Contact page
│   ├── projects/                 # Projects showcase page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # Reusable components
│   ├── ui/                       # UI component library
│   ├── footer.tsx                # Site footer
│   ├── navigation.tsx            # Navigation component
│   └── theme-provider.tsx        # Theme provider
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries
├── public/                       # Static assets
│   ├── icon/                     # Technology icons
│   ├── images/                   # Project images
│   ├── projects/                 # Project screenshots
│   └── team/                     # Team member photos
├── styles/                       # Additional styles
└── types/                        # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abx15/Port2026.git
   cd Port2026
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Email service (Resend)
   RESEND_API_KEY=your_resend_api_key_here

   # Analytics (optional)
   NEXT_PUBLIC_VERCEL_ANALYTICS=true
   ```

4. **Run the development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Projects

Edit the `projects` array in `app/projects/page.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    problem: "Problem statement...",
    solution: "Solution provided...",
    tech: ["Tech1", "Tech2", "Tech3"],
    demo: "https://your-demo-link.com",
    github: "https://github.com/username/repo",
    category: "Full Stack",
    image: "/projects/your-project-image.png",
  },
  // Add more projects...
];
```

### Updating Skills

Modify the `skillsData` object in `app/page.tsx`:

```typescript
const skillsData = {
  frontend: [
    { name: "New Technology", icon: "/icon/tech-icon.png" },
    // Add more skills...
  ],
  backend: [...],
  tools: [...],
};
```

### Contact Form Setup

The contact form uses Resend for email delivery. Configure your API key in the environment variables and update the API route in `app/api/contact/route.ts` if needed.

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:

- **Netlify**
- **Railway**
- **Render**
- **Self-hosted** with Docker

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Arun Kumar Bind**
- **Email**: developerarunwork@gmail.com
- **LinkedIn**: [linkedin.com/in/arun-kumar-a3b047353](https://www.linkedin.com/in/arun-kumar-a3b047353/)
- **Portfolio**: [Arun Kumar Bind](https://arun15dev.netlify.app)

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible primitives
- **Tailwind CSS** for the styling framework
- **Framer Motion** for smooth animations
- **Lucide** for the icon set

---

Built with ❤️ using Next.js and TypeScript
