// app/german-ai-academy/page.tsx
import { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import { faqJsonLd, productJsonLd, courseJsonLd, courseInstanceJsonLd } from '../../lib/schema';
import { academy } from '../../content/germanAiAcademy';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Hero from '../../components/Hero';
import ReachableStatus from '../../components/ReachableStatus';
import GuaranteeStrip from '../../components/GuaranteeStrip';
import Outcomes from '../../components/Outcomes';
import LearningLoop from '../../components/LearningLoop';
import CallProgram from '../../components/CallProgram';
import Interactivity from '../../components/Interactivity';
import Materials from '../../components/Materials';
import TandemExplainer from '../../components/TandemExplainer';
import ProgressMeter from '../../components/ProgressMeter';
import ProgressMetrics from '../../components/ProgressMetrics';
import Diagnostics from '../../components/Diagnostics';
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
import TestimonialsSection from '../../components/Testimonials/TestimonialsSection';
import HeroTestimonial from '../../components/HeroTestimonial';
import FAQ from '../../components/FAQ';

// NEW: denser wrappers / bands
import Compact from '../../components/Compact';
import LaunchBonuses from '../../components/LaunchBonuses';
import OnboardingSteps from '../../components/OnboardingSteps';

// Effects
import StickyProgress from '../../components/fx/StickyProgress';

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
        <GuaranteeStrip />

        {/* Slight overlap to reduce the "gap" below hero */}
        {/* === BAND B: LIGHT SKY WASH — Outcomes + Loop + Calls === */}
        <section aria-label="Ergebnisse & Lern-Loop" className="relative -mt-6 sm:-mt-8" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <Outcomes />
            <LearningLoop title={academy.learningLoop.title} summary={academy.learningLoop.summary} steps={academy.learningLoop.steps as any} />
            <CallProgram title={academy.calls.title} summary={academy.calls.summary} items={academy.calls.items as any} deliverables={academy.calls.deliverables as any} />
          </Compact>
        </section>

        {/* === PROGRESS METRICS SECTION === */}
        <ProgressMetrics />

        {/* === BAND C: LIGHT GRAY — Materials + Interactivity + Tandem === */}
        <section aria-label="Materialien & Interaktivität & Tandem" className="bg-gray-50">
          <Compact>
            <Interactivity title={academy.interactivity.title} summary={academy.interactivity.summary} bullets={academy.interactivity.bullets as any} />
            <Materials title={academy.materials.title} summary={academy.materials.summary} bullets={academy.materials.bullets as any} />
            <TandemExplainer title={academy.tandem.title} summary={academy.tandem.summary} text={academy.tandem.text} status={academy.tandem.status} />
          </Compact>
        </section>

        {/* === BAND D: LIGHT SKY WASH — Progress + Diagnostics + Onboarding === */}
        <section
          aria-label="Fortschritt & Onboarding"
          style={{ backgroundColor: '#88B6CD' }}
        >
          <Compact>
            <ProgressMeter />
            <Diagnostics />
            {/* NEW: denser, concrete "what happens next" steps */}
            <OnboardingSteps />
          </Compact>
        </section>

        {/* === BAND E: LIGHT GRAY — Accountability + AI Plan + Platform === */}
        <section aria-label="Accountability & Plattform" className="bg-gray-50">
          <Compact>
            <AccountabilityOptin />
            <AiPlan title={academy.aiPlan.title} summary={academy.aiPlan.summary} bullets={academy.aiPlan.bullets as any} />
            <PlatformChecklist title={academy.ux.title} summary={academy.ux.summary} checklist={academy.ux.checklist as any} />
          </Compact>
        </section>

        {/* === BAND F: LIGHT SKY WASH — Community + Fit + Cohort === */}
        <section aria-label="Community & Fit & Kohorte" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <Community title={academy.community.title} summary={academy.community.summary} bullets={academy.community.bullets as any} />
            <Fit title={academy.fit.title} summary={academy.fit.summary} forList={academy.fit.for as any} notForList={academy.fit.notFor as any} />
            <Cohort title={academy.cohort.title} summary={academy.cohort.summary} start={academy.cohort.start} seats={academy.cohort.seats} cta={academy.cohort.cta} />
          </Compact>
        </section>

        {/* === BAND G: LIGHT GRAY — Instructors === */}
        <section aria-label="Coaches" className="bg-gray-50">
          <Compact>
            <Instructors title={academy.instructors.title} summary={academy.instructors.summary} people={academy.instructors.people as any} />
          </Compact>
        </section>

        {/* === BAND H: LIGHT SKY WASH — Launch bonuses + Pricing + Guarantee === */}
        {/* MOVED: LaunchBonuses placed here (was earlier); acts as a colored lead-in to Pricing */}
        <section aria-label="Angebot & Garantie" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <LaunchBonuses />
            <Pricing pricing={academy.pricing} />
            <Guarantee guarantee={academy.guarantee} />
          </Compact>
        </section>

        {/* === ENHANCED TESTIMONIALS SECTION === */}
        <TestimonialsSection />

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
    </>
  );
}
