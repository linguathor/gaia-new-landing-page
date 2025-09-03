# German AI Academy Landing Page

A modern, accessible, and SEO-optimized landing page for the German AI Academy, built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates best practices for building fast, inclusive web applications.

## 🚀 Features

- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **WCAG AA Accessible**: Semantic HTML, ARIA labels, keyboard navigation, and screen reader support
- **SEO Optimized**: Dynamic metadata, Open Graph, Twitter cards, and JSON-LD structured data
- **Performance Focused**: Lazy-loaded images, optimized fonts, and minimal bundle size
- **Type-Safe**: Full TypeScript implementation with strict typing
- **Clean Architecture**: Modular components with clear separation of concerns

## 📋 Sections

1. **Hero** - Compelling headline, call-to-action buttons, and trust badges
2. **How It Works** - 3-step process explanation with numbered steps
3. **Pricing** - 3-tier pricing grid with "beliebt" (popular) badge on Premium plan
4. **Guarantee** - 10-day money-back guarantee section
5. **Testimonials** - Success stories from learners Pablo and Sara
6. **FAQ** - Expandable frequently asked questions

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: React 18
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 📁 Project Structure

```
gaia-new-landing-page/
├── app/
│   ├── german-ai-academy/
│   │   └── page.tsx          # Main landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Hero.tsx              # Hero section
│   ├── HowItWorks.tsx        # Process steps
│   ├── Pricing.tsx           # Pricing grid
│   ├── PriceCard.tsx         # Individual pricing card
│   ├── Guarantee.tsx         # Guarantee section
│   ├── Testimonials.tsx      # Testimonials
│   └── FAQ.tsx               # FAQ section
├── content/
│   └── germanAiAcademy.ts    # Centralized content
├── lib/
│   ├── seo.ts                # SEO metadata helpers
│   └── schema.ts             # JSON-LD schema helpers
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gaia-new-landing-page.git
   cd gaia-new-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000/german-ai-academy](http://localhost:3000/german-ai-academy)

## 🎨 Content Management

All text, links, and structured data are centralized in `content/germanAiAcademy.ts`. This makes it easy to:
- Update copy without touching components
- Maintain consistency across the page
- Support internationalization
- Generate dynamic metadata and schemas

## ♿ Accessibility Features

- Semantic HTML5 elements (`<header>`, `<section>`, `<main>`)
- ARIA labels and landmarks
- Keyboard navigation support
- Focus management with visible focus indicators
- Screen reader friendly content
- Color contrast compliant design
- Alt text ready for images

## 🔍 SEO Features

- Dynamic page title and meta description
- Open Graph and Twitter card metadata
- JSON-LD structured data for FAQ and Product schemas
- Semantic HTML for better search engine understanding
- Fast loading times for improved Core Web Vitals

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements
- Cross-browser compatibility

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain support included

### Netlify
1. Connect repository
2. Set build command: `npm run build`
3. Publish directory: `.next`

### Manual Deployment
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Note**: This landing page is designed for the German AI Academy and includes German content optimized for B1-C1 level learners. All copy is non-gendered and uses short, clear sentences.
