// app/german-ai-academy/page.tsx
import { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import { faqJsonLd, productJsonLd, courseJsonLd, courseInstanceJsonLd } from '../../lib/schema';
import { academy } from '../../content/germanAiAcademy';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Hero from '../../components/Hero';
import ReachableStatus from '../../components/ReachableStatus';
import Outcomes from '../../components/Outcomes';
import LearningLoop from '../../components/LearningLoop';
import CallProgram from '../../components/CallProgram';
import Interactivity from '../../components/Interactivity';
import Materials from '../../components/Materials';
import TandemSpaces from '../../components/TandemSpaces';
import GermanAiAcademyAccess from '../../components/GermanAiAcademyAccess';
import CtaBand from '../../components/CtaBand';

// Dynamic import for ProgressMetrics (heavy dashboard component)
const ProgressMetrics = dynamic(
  () => import('../../components/ProgressMetrics'),
  {
    loading: () => (
      <div className="section-spacing bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="text-center mb-12">
            <div className="h-10 bg-neutral-200 rounded w-80 mx-auto mb-4"></div>
            <div className="h-6 bg-neutral-100 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-xl h-80 shadow-soft"></div>
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: true
  }
);
import StickyCTA from '../../components/fx/StickyCTA';
import AccountabilityOptin from '../../components/AccountabilityOptin';
import AiPlan from '../../components/AiPlan';
import PlatformChecklist from '../../components/PlatformChecklist';
import Community from '../../components/Community';
import Fit from '../../components/Fit';
import Cohort from '../../components/Cohort';
import Instructors from '../../components/Instructors';
import Pricing from '../../components/Pricing';
import Guarantee from '../../components/Guarantee';
import TestimonialsFaces from '../../components/TestimonialsFaces';
import HeroTestimonial from '../../components/HeroTestimonial';
import FAQ from '../../components/FAQ';
import ProblemSolution from '../../components/ProblemSolution';
import FourReasons from '../../components/FourReasons';
import dynamic from 'next/dynamic';

// Dynamic imports for performance optimization
const TestimonialsSection = dynamic(
  () => import('../../components/Testimonials/TestimonialsSection'),
  {
    loading: () => (
      <div className="section-spacing bg-gradient-to-br from-success-50 via-white to-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-pulse">
            <div className="h-12 bg-neutral-200 rounded-lg w-96 mx-auto mb-6"></div>
            <div className="h-6 bg-neutral-100 rounded w-80 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    ssr: false
  }
);

// NEW: denser wrappers / bands
import Compact from '../../components/Compact';
import { LaunchBonuses } from '../../components/LaunchBonuses';


// Phase 7: Advanced Features
import GermanLevelQuiz from '../../components/GermanLevelQuiz';
import ProgressCalculator from '../../components/ProgressCalculator';
import TrustBadges from '../../components/TrustBadges';

// Effects
import StickyProgress from '../../components/fx/StickyProgress';

// Dynamic import for PerformanceDashboard to avoid hydration issues
const PerformanceDashboard = dynamic(
  () => import('../../components/fx/PerformanceDashboard'),
  {
    ssr: false,
    loading: () => null
  }
);

export const metadata: Metadata = buildMetadata();

export default function GermanAIAcademyPage() {
  const faqSchema = faqJsonLd(academy.faq.items);
  const productSchemas = productJsonLd(
    academy.pricing.plans.find(plan => plan.popular)!,
    academy.pricing.plans.find(plan => !plan.popular)!
  );

  // Course JSON-LD
  const courseSchema = courseJsonLd({
    name: "German AI Academy – Premium",
    description: academy.meta.description,
    providerName: "Natural. Fluent. German.",
    url: "https://naturalfluentgerman.com/german-ai-academy"
  });

  const courseInstanceSchema = courseInstanceJsonLd({
    courseName: "German AI Academy – Premium",
    startDateISO: "2025-10-07", // Set actual ISO date
    url: "https://naturalfluentgerman.com/german-ai-academy"
  });

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {Array.isArray(productSchemas) ? productSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )) : (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemas) }} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseInstanceSchema) }}
      />

      <Header />

      {/* scroll-linked progress bar */}
      <StickyProgress />

      <main>
        {/* === BAND A: HERO (clean white) === */}
        <section aria-label="Hero" className="bg-white">
          <Compact>
            <Hero />
          </Compact>
        </section>
        
        {/* Hero Testimonial for immediate social proof */}
          <section className="relative -mt-8 pb-8 px-4 bg-white">
            <div className="max-w-screen-xl mx-auto">
              <HeroTestimonial />
            </div>
          </section>

        <ReachableStatus />
        
        {/* Problem & Solution Section - Emotional Connection */}
  <ProblemSolution />

        {/* Slight overlap to reduce the "gap" below hero */}
        {/* === BAND B: LIGHT SKY WASH — Outcomes + Loop + Calls === */}

        <section aria-label="Ergebnisse & Live-Calls" className="relative -mt-6 sm:-mt-8" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                So funktioniert unser Programm
              </h2>
              <hr className="border-t border-white/30 mt-4" />
            </div>
            <Outcomes />
            {/* LearningLoop removed - too confusing and comes too early */}
            <CallProgram title={academy.calls.title} summary={academy.calls.summary} items={academy.calls.items as any} deliverables={academy.calls.deliverables as any} />
          </Compact>
        </section>

        {/* === PROGRESS METRICS SECTION === */}
        <ProgressMetrics />

        {/* German Level Quiz removed - distraction and not necessary */}

        {/* === COMPREHENSIVE TANDEM SPACES SECTION === */}
        <TandemSpaces data={academy.tandemSpaces} />

  {/* === GERMAN AI ACADEMY ACCESS SECTION === */}
  {/* Removed per request: GermanAiAcademyAccess section */}

        {/* === BAND E: LIGHT GRAY — Accountability + AI Plan + Platform === */}
        {/* Removed per request: 'Wöchentliche Mikro-Aufgaben' and 'Auf der Plattform' sections */}

        {/* === BAND F: LIGHT SKY WASH — Community + Fit + Cohort === */}
        {/* Community & Support section intentionally removed from rendering per request. Component remains in the repo. */}

        {/* Progress Calculator removed - misleading timeline information */}

        {/* === BAND G: BLUE GRADIENT — Instructors === */}
        <Instructors 
          title={academy.instructors.title} 
          summary={academy.instructors.summary} 
          subtitle={academy.instructors.subtitle}
          description={academy.instructors.description}
          people={academy.instructors.people as any}
          showCta={true}
          ctaTitle="Lerne von den Besten"
          ctaSubtitle="Muttersprachliche Coaches und jahrelange Erfahrung warten auf dich."
          ctaLabel="Jetzt anmelden"
          ctaHref="#pricing"
        />

        {/* === BAND H: LIGHT SKY WASH — Launch bonuses + Pricing + Guarantee === */}
        {/* MOVED: LaunchBonuses placed here (was earlier); acts as a colored lead-in to Pricing */}
        <section aria-label="Angebot & Garantie" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <LaunchBonuses 
              title={academy.launchBonuses.title}
              summary={academy.launchBonuses.summary}
              deadline={academy.launchBonuses.deadline}
              bonuses={academy.launchBonuses.bonuses}
            />
          </Compact>
        </section>

        {/* === FINAL CONVERSION PUSH - 4 REASONS === */}
        <FourReasons />

        {/* === PRICING & GUARANTEE === */}
        <section aria-label="Pricing & Garantie" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <Pricing pricing={academy.pricing} />
            <Guarantee guarantee={academy.guarantee} />
          </Compact>
        </section>

        {/* === ENHANCED TESTIMONIALS SECTION === */}
        <TestimonialsSection />

        {/* === TRUST BADGES === */}
        <TrustBadges />

        {/* === BAND I: CLEAN WHITE — FAQ === */}
        <section aria-label="FAQ" className="bg-white">
          <Compact>
            <FAQ faq={academy.faq} faqExtra={academy.faqExtra} />
          </Compact>
        </section>
      </main>
      <Footer />
      
      {/* Sticky CTA for mobile users */}
      <StickyCTA 
        ctaText={academy.hero.ctaPrimary.label}
        ctaHref={academy.hero.ctaPrimary.href}
        spotsLeft={academy.hero.urgency.spotsLeft}
      />

      {/* Performance monitoring */}
      {process.env.NODE_ENV === 'production' && (
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize performance optimizations
              if (typeof window !== 'undefined') {
                // Preconnect to external domains
                const preconnect = (href) => {
                  const link = document.createElement('link');
                  link.rel = 'preconnect';
                  link.href = href;
                  document.head.appendChild(link);
                };
                preconnect('https://images.unsplash.com');
                preconnect('https://fonts.googleapis.com');
                preconnect('https://fonts.gstatic.com');
              }
            `
          }}
        />
      )}
      
      {/* Development performance dashboard */}
      <PerformanceDashboard />
    </>
  );
}
