export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  role: string;
  company?: string;
  beforeLevel: 'A1' | 'A2' | 'B1' | 'B2';
  afterLevel: 'B1' | 'B2' | 'C1' | 'C2';
  duration: number; // months
  quote: string;
  videoUrl?: string;
  linkedinUrl?: string;
  metrics: {
    sprechzeit: number; // minutes per week
    scenarios: number; // out of 12
    fillwords: number; // percentage reduction
    activeWords: number;
  };
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-mueller",
    name: "Sarah Müller",
    photo: "", // Will fallback to initials avatar
    role: "Senior Product Manager",
    company: "SAP",
    beforeLevel: "B1",
    afterLevel: "C1",
    duration: 4,
    quote: "Endlich kann ich in Meetings selbstbewusst sprechen! Meine Kollegen haben sofort den Unterschied bemerkt. Die KI-Übungen haben genau meine Schwachstellen getroffen.",
    linkedinUrl: "https://linkedin.com/in/sarah-mueller-sap",
    metrics: {
      sprechzeit: 45,
      scenarios: 11,
      fillwords: -35,
      activeWords: 1840
    },
    featured: true
  },
  {
    id: "miguel-rodriguez",
    name: "Miguel Rodríguez",
    photo: "", // Will fallback to initials avatar
    role: "Software Engineer",
    company: "Siemens",
    beforeLevel: "A2",
    afterLevel: "B2",
    duration: 5,
    quote: "Ich dachte nie, dass ich C1-Level erreichen könnte. Das Dashboard hat mir jeden Tag gezeigt, wie ich besser werde. Jetzt leite ich Projekte auf Deutsch!",
    linkedinUrl: "https://linkedin.com/in/miguel-rodriguez-siemens",
    videoUrl: "/videos/testimonials/miguel-rodriguez.mp4",
    metrics: {
      sprechzeit: 38,
      scenarios: 10,
      fillwords: -42,
      activeWords: 1650
    }
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    photo: "", // Will fallback to initials avatar
    role: "Marketing Director",
    company: "BMW",
    beforeLevel: "B1",
    afterLevel: "C1",
    duration: 3,
    quote: "Die Live-Calls waren ein Game-Changer. Echte Situationen üben mit sofortigem Feedback – das hat alles verändert. Meine Präsentationen sind jetzt viel überzeugender.",
    linkedinUrl: "https://linkedin.com/in/priya-sharma-bmw",
    metrics: {
      sprechzeit: 52,
      scenarios: 12,
      fillwords: -28,
      activeWords: 2100
    },
    featured: true
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    photo: "", // Will fallback to initials avatar
    role: "Business Analyst",
    company: "Deutsche Bank",
    beforeLevel: "A2",
    afterLevel: "B2",
    duration: 4,
    quote: "Von 'äh, ähm' zu klaren Sätzen in 4 Monaten. Die Füllwörter-Tracking-Funktion war brutal ehrlich, aber genau das brauchte ich. Jetzt spreche ich wie ein Profi.",
    linkedinUrl: "https://linkedin.com/in/james-wilson-db",
    videoUrl: "/videos/testimonials/james-wilson.mp4",
    metrics: {
      sprechzeit: 35,
      scenarios: 9,
      fillwords: -48,
      activeWords: 1450
    }
  },
  {
    id: "anna-kowalski",
    name: "Anna Kowalski",
    photo: "", // Will fallback to initials avatar
    role: "UX Designer",
    company: "Zalando",
    beforeLevel: "B2",
    afterLevel: "C2",
    duration: 3,
    quote: "Das Tandem-Learning hat den Unterschied gemacht. Echte Gespräche mit Feedback in Echtzeit. Jetzt moderiere ich Design-Reviews komplett auf Deutsch!",
    linkedinUrl: "https://linkedin.com/in/anna-kowalski-zalando",
    metrics: {
      sprechzeit: 48,
      scenarios: 12,
      fillwords: -22,
      activeWords: 2350
    }
  },
  {
    id: "david-chen",
    name: "David Chen",
    photo: "", // Will fallback to initials avatar
    role: "Data Scientist",
    company: "Mercedes-Benz",
    beforeLevel: "A2",
    afterLevel: "C1",
    duration: 5,
    quote: "Die KI hat genau gewusst, wo meine Probleme lagen. Datenbasiertes Lernen für die deutsche Sprache – endlich! Jetzt erkläre ich komplexe Analysen auf C1-Niveau.",
    linkedinUrl: "https://linkedin.com/in/david-chen-mercedes",
    videoUrl: "/videos/testimonials/david-chen.mp4",
    metrics: {
      sprechzeit: 41,
      scenarios: 11,
      fillwords: -38,
      activeWords: 1920
    },
    featured: true
  }
];

// Helper functions
export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured);
export const getVideoTestimonials = () => testimonials.filter(t => t.videoUrl);
export const getTestimonialsByLevel = (beforeLevel: string) => 
  testimonials.filter(t => t.beforeLevel === beforeLevel);

// Success metrics aggregation
export const getSuccessMetrics = () => {
  const total = testimonials.length;
  const avgDuration = testimonials.reduce((sum, t) => sum + t.duration, 0) / total;
  const avgImprovement = testimonials.reduce((sum, t) => {
    const levelMap = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6 };
    return sum + (levelMap[t.afterLevel] - levelMap[t.beforeLevel]);
  }, 0) / total;
  
  return {
    totalStudents: total,
    avgDuration: Math.round(avgDuration),
    avgLevelImprovement: Math.round(avgImprovement * 10) / 10,
    successRate: 100 // All testimonials represent success cases
  };
};