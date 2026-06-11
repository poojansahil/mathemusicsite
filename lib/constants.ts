import {
  Music,
  Lightbulb,
  Heart,
  Sparkles,
  Users,
  BookOpen,
  Star,
  Mic2,
} from 'lucide-react';

export const navLinks = [
  { label: 'Why', href: '#benefits' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Songs', href: '#songs' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const benefits = [
  {
    id: 1,
    title: 'Music Is the Oldest Learning Technology',
    description:
      'Every culture in history has used music to carry what matters. Formal education is the only place that forgot to.',
    icon: Music,
  },
  {
    id: 2,
    title: 'It Makes You Feel Something First',
    description:
      'Music lowers the walls. Once you have felt something about an idea, you have had a relationship with it that survives long after the exam.',
    icon: Heart,
  },
  {
    id: 3,
    title: 'When a Concept Lives in a Song',
    description:
      'The melody becomes a structure. The lyric becomes a memory. Students remember not just the answer — but why it mattered.',
    icon: Lightbulb,
  },
  {
    id: 4,
    title: 'Every Idea Has an Emotional Truth',
    description:
      'Two fractions that are actually brothers. Algebra asking why nobody tried to know it. Every idea carries a feeling. Math-e-Music finds it, then sings it.',
    icon: Sparkles,
  },
];

export const offerings = [
  {
    id: 1,
    title: 'Live School Performance',
    subhead: 'Live music bringing concepts to life.',
    description:
      'A live performance combining original music, visual animations, and live discussion that makes ideas come alive in the room.\n\nIt gives students the desire to go deeper into what their teachers have already built.',
    chips: ['Screen Projections', 'Animations', 'Audience Interaction', 'All Grades'],
    cta: 'Book a Performance',
    icon: Mic2,
  },
  {
    id: 2,
    title: 'Learn With Music: Student Creators Workshop',
    subhead: 'Students stop being consumers of knowledge.\nThey become creators of it.',
    description:
      'A programme where students research a concept, find the emotion inside it, and write and perform an original song.\n\nThe format, duration, and scope is designed in collaboration with the school.',
    chips: ['Co-Designed with School', 'Flexible Format', 'Live Showcase'],
    cta: 'Enquire About the Workshop',
    icon: Users,
  },
];

export const songs = {
  recorded: [
    {
      id: 1,
      title: 'Do Bhai',
      concept: 'Fractions and decimals as brothers',
      audioUrl: '/audio/do-bhai.mp3',
      youtubeUrl: 'https://www.youtube.com/c/PoojanSahil/',
    },
    {
      id: 2,
      title: 'Kyun Seekhun Main Algebra',
      concept: 'Why do I need algebra? A student-teacher dialogue',
      audioUrl: '/audio/kyun-seekhun-algebra.mp3',
      youtubeUrl: 'https://www.youtube.com/c/PoojanSahil/',
    },
  ],
  upcoming: [
    { title: 'AB ∥ CD', concept: 'A love story of two parallel lines' },
    { title: 'Schrodinger\'s Cat', concept: 'Quantum superposition' },
    { title: 'Aasman Hai Neela Kyun', concept: 'Why the sky is blue' },
    { title: 'Exams Tappe', concept: 'Satire on Indian exam culture' },
    { title: 'Tumne Kyun Mujhko Kabhi Jaana Nahi', concept: "Mathematics, in its own voice" },
  ],
};

export const testimonials = [
  {
    id: 1,
    quote:
      'It is such an interesting initiative for making the students curious about Math, Science or any domain! I am sure many of them would have been inspired from your session.',
    name: 'Rahul Batra',
    title: 'Co-Founder, Prakriti School',
    image:
      'https://media.licdn.com/dms/image/v2/C5103AQFXaIjExG-_Ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583420667063?e=1753315200&v=beta&t=Fan3pGyRrAvJG11v_M4cNxL-FT-hAAPcUHdQz2Nt588',
  },
  {
    id: 2,
    quote:
      'It was truly a wonderful experience. All the teachers of the department were all praises for you — for the simple reason that the act is unique and we have never seen something like this before. Beautifully woven and connected.',
    name: 'Sukhda Khosla',
    title: 'Head of Mathematics Department, Vasant Valley School',
    image:
      'https://media.licdn.com/dms/image/v2/C5603AQGQFcuQild6eA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1590253251500?e=1753315200&v=beta&t=5ADCQFKeiRvAQjYtpQO3eb1B1biEB6y5FPHIpMlfXkk',
  },
];

export const socialLinks = [
  { platform: 'Instagram', href: 'https://www.instagram.com/poojansahil/', icon: 'Instagram' },
  { platform: 'Linkedin', href: 'https://www.linkedin.com/in/poojan-sahil-1822701b6/', icon: 'Linkedin' },
  { platform: 'YouTube', href: 'https://www.youtube.com/c/PoojanSahil/', icon: 'Youtube' },
];

export const footerOfferings = [
  { label: 'Live School Performance', href: '#offerings' },
  { label: 'Learn With Music Workshop', href: '#offerings' },
];

export const floatingSymbols = [
  { symbol: 'π', size: 120, top: '12%', left: '7%', opacity: 0.07, duration: 9, delay: 0, parallax: 0.3 },
  { symbol: '∑', size: 100, top: '25%', left: '88%', opacity: 0.06, duration: 12, delay: 1.5, parallax: 0.45 },
  { symbol: '∫', size: 140, top: '55%', left: '5%', opacity: 0.05, duration: 10, delay: 0.8, parallax: 0.35 },
  { symbol: '√', size: 90, top: '70%', left: '82%', opacity: 0.08, duration: 14, delay: 2, parallax: 0.5 },
  { symbol: '∞', size: 110, top: '40%', left: '92%', opacity: 0.06, duration: 11, delay: 0.4, parallax: 0.4 },
  { symbol: '♩', size: 130, top: '15%', left: '75%', opacity: 0.07, duration: 8, delay: 1, parallax: 0.55 },
  { symbol: '♪', size: 100, top: '60%', left: '55%', opacity: 0.05, duration: 13, delay: 2.5, parallax: 0.3 },
  { symbol: '♫', size: 90, top: '80%', left: '20%', opacity: 0.06, duration: 10, delay: 0.2, parallax: 0.42 },
  { symbol: 'φ', size: 115, top: '35%', left: '15%', opacity: 0.07, duration: 9.5, delay: 3, parallax: 0.38 },
  { symbol: 'Δ', size: 95, top: '20%', left: '45%', opacity: 0.05, duration: 11, delay: 1.8, parallax: 0.48 },
  { symbol: 'e', size: 80, top: '75%', left: '65%', opacity: 0.08, duration: 12, delay: 0.6, parallax: 0.32 },
  { symbol: '∥', size: 105, top: '48%', left: '35%', opacity: 0.05, duration: 15, delay: 2.2, parallax: 0.44 },
];
