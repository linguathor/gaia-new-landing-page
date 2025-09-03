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
import Section from '../../components/Section';
import Split from '../../components/Split';
import StatBand from '../../components/StatBand';
import IconList from '../../components/IconList';
import Timeline from '../../components/Timeline';
import CtaBand from '../../components/CtaBand';
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

        {/* A) Outcomes - StatBand in band variant */}
        <Section titleId="outcomes" variant="band" center>
          <h2 id="outcomes" className="text-2xl font-bold sm:text-3xl">{academy.outcomes.title}</h2>
          <p className="mt-2 text-gray-700">{academy.outcomes.summary}</p>
          <div className="mt-6">
            <StatBand items={academy.outcomes.items as any} />
          </div>
        </Section>

        {/* B) Learning Loop - Split + Timeline */}
        <Section titleId="loop" variant="muted">
          <Split
            kicker="Der Lern-Loop"
            title={academy.learningLoop.title}
            summary={academy.learningLoop.summary}
            media={
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <Timeline steps={academy.learningLoop.steps as any} />
              </div>
            }
          >
            <p>Kurze Aufgaben. Hohe Frequenz. Sichtbarer Transfer ins Sprechen.</p>
            <ul className="mt-3 list-disc pl-5 text-gray-800">
              <li>Live-Call = Input und Coaching</li>
              <li>Aufgabe = gezielte Übung</li>
              <li>KI/Tandem = Anwenden mit Feedback</li>
            </ul>
          </Split>
        </Section>

        {/* Call Program */}
        <Section titleId="calls" variant="plain">
          <CallProgram title={academy.calls.title} summary={academy.calls.summary} items={academy.calls.items as any} deliverables={academy.calls.deliverables as any} />
        </Section>

        {/* C) Materials + Interactivity - merged into one Split */}
        <Section titleId="materials" variant="alt">
          <Split
            title="Materialien & Interaktivität"
            summary="Alles zum Nacharbeiten. Und echte Beteiligung im Call."
            reverse
            media={
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Nach jedem Call</h3>
                <IconList items={academy.calls.deliverables as any} />
              </div>
            }
          >
            <h3 className="text-lg font-semibold">So bleibt es interaktiv</h3>
            <IconList items={academy.interactivity.bullets as any} />
          </Split>
        </Section>

        {/* D) Tandem Spaces - pattern background */}
        <Section titleId="tandem" variant="pattern">
          <Split
            kicker={academy.tandem.status === "Beta" ? "Beta" : undefined}
            title={academy.tandem.title}
            summary={academy.tandem.summary}
            media={<div className="aspect-video w-full rounded-xl border bg-gray-100" />}
          >
            <p>{academy.tandem.text}</p>
          </Split>
        </Section>

        {/* Progress & Diagnostics */}
        <Section titleId="progress" variant="muted">
          <ProgressMeter title={academy.progress.title} summary={academy.progress.summary} bullets={academy.progress.bullets as any} detailsHref={academy.progress.detailsHref} />
        </Section>

        <Section titleId="diagnostics" variant="plain">
          <Diagnostics title={academy.diagnostics.title} summary={academy.diagnostics.summary} bullets={academy.diagnostics.bullets as any} />
        </Section>

        {/* Accountability & AI Plan */}
        <Section titleId="accountability" variant="alt">
          <AccountabilityOptin />
        </Section>

        <Section titleId="aiplan" variant="muted">
          <AiPlan title={academy.aiPlan.title} summary={academy.aiPlan.summary} bullets={academy.aiPlan.bullets as any} />
        </Section>

        {/* Platform & Community */}
        <Section titleId="platform" variant="plain">
          <PlatformChecklist title={academy.ux.title} summary={academy.ux.summary} checklist={academy.ux.checklist as any} />
        </Section>

        <Section titleId="community" variant="alt">
          <Community title={academy.community.title} summary={academy.community.summary} bullets={academy.community.bullets as any} />
        </Section>

        {/* Fit */}
        <Section titleId="fit" variant="muted">
          <Fit title={academy.fit.title} summary={academy.fit.summary} forList={academy.fit.for as any} notForList={academy.fit.notFor as any} />
        </Section>

        {/* E) Cohort + CTA band */}
        <Section titleId="cohort" variant="band">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <h2 id="cohort" className="text-2xl font-bold sm:text-3xl">{academy.cohort.title}</h2>
              <p className="mt-2 text-gray-700">{academy.cohort.summary}</p>
              <ul className="mt-4 list-disc pl-5 text-gray-800">
                <li>Onboarding in Woche 1</li>
                <li>4 Calls pro Monat</li>
                <li>Vorher-/Nachher-Check</li>
              </ul>
            </div>
            <CtaBand
              title="In 4 Monaten spürbar sicherer sprechen"
              sub="Premium (beliebt) – klare Struktur, klare Ergebnisse."
              label={academy.pricing.plans[1].cta.label}
              href={academy.pricing.plans[1].cta.href}
            />
          </div>
        </Section>

        {/* F) Instructors */}
        <Section titleId="coaches" variant="muted">
          <h2 id="coaches" className="text-2xl font-bold sm:text-3xl">{academy.instructors.title}</h2>
          <p className="mt-2 text-gray-700">{academy.instructors.summary}</p>
          <Instructors title="" summary={academy.instructors.summary} people={academy.instructors.people as any} />
        </Section>

        {/* Pricing & Guarantee */}
        <Section titleId="pricing" variant="plain">
          <Pricing pricing={academy.pricing} />
        </Section>

        <Section titleId="guarantee" variant="alt">
          <Guarantee guarantee={academy.guarantee} />
        </Section>

        {/* Testimonials & FAQ */}
        <Section titleId="testimonials" variant="muted">
          <TestimonialsFaces title={academy.testimonials.title} items={academy.testimonials.items as any} />
        </Section>

        <Section titleId="faq" variant="plain">
          <FAQ faq={academy.faq} faqExtra={academy.faqExtra} />
        </Section>
      </main>
      <StickyCta href="https://YOUR_COPECART_LINK_PREMIUM" label="Jetzt Premium starten" />
      <Footer />
    </>
  );
}
