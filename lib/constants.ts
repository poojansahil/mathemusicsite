import { 
  Brain, 
  Lightbulb, 
  Music, 
  Heart, 
  Blocks, 
  BookOpen, 
  Users, 
  Sparkles 
} from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const benefits = [
  {
    id: 1,
    title: 'Engaging Learning',
    description: 'Transform abstract mathematical concepts into captivating musical experiences that resonate with students of all learning styles.',
    icon: Brain,
  },
  {
    id: 2,
    title: 'STEM Integration',
    description: 'Bridge the gap between arts and sciences, showing students the beautiful relationship between mathematics and music.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Memorable Experiences',
    description: 'Create lasting memories that reinforce learning through emotional connection and creative expression.',
    icon: Heart,
  },
  {
    id: 4,
    title: 'Curriculum Aligned',
    description: 'Performances are designed to complement educational standards and reinforce classroom learning objectives.',
    icon: BookOpen,
  },
];

export const features = [
  {
    id: 1,
    title: 'Celebrates math and science in an engaging, memorable way.',
    
    icon: Music,
  },
  {
    id: 2,
    title: 'Explores abstract concepts and real-world applications.',
    
    icon: Blocks,
  },
  {
    id: 3,
    title: 'Inspires curiosity and encourages a deeper connection with STEM subjects.',
    
    icon: Users,
  },
   {
    id: 4,
    title: 'Orignal Songs and Parodies bring the concepts to life',
    
    icon: BookOpen,
  },
  
];

export const testimonials = [
  {
    id: 1,
    quote: "...It is such an interesting initiative for making the students curious about Math, Science or any domain! I am sure many of them would have been inspired from your session...",
    name: "Rahul Batra",
    title: "Co-Founder, Prakriti School",
    image: "https://media.licdn.com/dms/image/v2/C5103AQFXaIjExG-_Ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583420667063?e=1753315200&v=beta&t=Fan3pGyRrAvJG11v_M4cNxL-FT-hAAPcUHdQz2Nt588",
  },
  {
    id: 2,
    quote: "It was truly a wonderful experience. All the teachers of the department were all praises for you- For the simple reason that the act is unique and we have never seen something like this before. Beautifully woven and connected.",
    name: "Sukhda Khosla",
    title: "Head of Mathematics Department, Vasant Valley School",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGQFcuQild6eA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1590253251500?e=1753315200&v=beta&t=5ADCQFKeiRvAQjYtpQO3eb1B1biEB6y5FPHIpMlfXkk",
  },
];

export const socialLinks = [
  { platform: 'Instagram', href: 'https://www.instagram.com/poojansahil/', icon: 'Instagram' },
  { platform: 'Linkedin', href: 'https://www.linkedin.com/in/poojan-sahil-1822701b6/', icon: 'Linkedin' },
  { platform: 'YouTube', href: 'https://www.youtube.com/c/PoojanSahil/', icon: 'Youtube' },  
];