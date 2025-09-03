import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCta from "@/components/StickyCTA";
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import Pricing from '../../components/Pricing';
import Guarantee from '../../components/Guarantee';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import { buildMetadata } from '../../lib/seo';
import { faqJsonLd, productJsonLd, courseJsonLd, courseInstanceJsonLd } from '../../lib/schema';
import { academy } from '../../content/germanAiAcademy';

// New component imports
import Outcomes from '../../components/Outcomes';
import LearningLoop from '../../components/LearningLoop';
import CallProgram from '../../components/CallProgram';
import Interactivity from '../../components/Interactivity';
import Materials from '../../components/Materials';
import TandemExplainer from '../../components/TandemExplainer';
import ProgressMeter from '../../components/ProgressMeter';
import Diagnostics from '../../components/Diagnostics';
import AccountabilityOptin from '../../components/AccountabilityOptin';
import AiPlan from '../../components/AiPlan';
import PlatformChecklist from '../../components/PlatformChecklist';
import Community from '../../components/Community';
import Fit from '../../components/Fit';
import Cohort from '../../components/Cohort';
import Instructors from '../../components/Instructors';
import TestimonialsFaces from '../../components/TestimonialsFaces';

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseInstanceSchema) }}
      />
      <Header />
      <main role="main">
        <Hero hero={academy.hero} />
        <Outcomes title={academy.outcomes.title} items={academy.outcomes.items as any} />
        <LearningLoop title={academy.learningLoop.title} steps={academy.learningLoop.steps as any} />
        <CallProgram title={academy.calls.title} items={academy.calls.items as any} deliverables={academy.calls.deliverables as any} />
        <Interactivity title={academy.interactivity.title} bullets={academy.interactivity.bullets as any} />
        <Materials title={academy.materials.title} bullets={academy.materials.bullets as any} />
        <TandemExplainer title={academy.tandem.title} text={academy.tandem.text} status={academy.tandem.status} />
        <ProgressMeter title={academy.progress.title} bullets={academy.progress.bullets as any} detailsHref={academy.progress.detailsHref} />
        <Diagnostics title={academy.diagnostics.title} bullets={academy.diagnostics.bullets as any} />
        <AccountabilityOptin />
        <AiPlan title={academy.aiPlan.title} bullets={academy.aiPlan.bullets as any} />
        <PlatformChecklist title={academy.ux.title} checklist={academy.ux.checklist as any} />
        <Community title={academy.community.title} bullets={academy.community.bullets as any} />
        <Fit title={academy.fit.title} forList={academy.fit.for as any} notForList={academy.fit.notFor as any} />
        <Cohort title={academy.cohort.title} start={academy.cohort.start} seats={academy.cohort.seats} cta={academy.cohort.cta} />
        <Instructors title={academy.instructors.title} people={academy.instructors.people as any} />
        <Pricing pricing={academy.pricing} />
        <Guarantee guarantee={academy.guarantee} />
        <TestimonialsFaces title={academy.testimonials.title} items={academy.testimonials.items as any} />
        <FAQ faq={academy.faq} />
      </main>
      <StickyCta href="https://YOUR_COPECART_LINK_PREMIUM" label="Jetzt Premium starten" />
      <Footer />
    </>
  );
}
