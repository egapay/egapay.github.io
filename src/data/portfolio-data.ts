// src/data/portfolio-data.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string; // Placeholder for project image/gif
};

export const portfolioData = {
  name: "Jane Doe",
  tagline: "Full-Stack Developer | TypeScript Enthusiast | Building Modern Web Apps",
  bio: "I specialize in creating robust, scalable, and user-friendly web applications using the T3 stack (TypeScript, Tailwind, and Trpc/Prisma). With 5 years of experience, I focus on delivering clean code and exceptional user experiences.",
  email: "jane.doe@example.com",
  socials: {
    github: "https://github.com/janedoe-dev",
    linkedin: "https://linkedin.com/in/janedoe-dev",
    twitter: "https://x.com/janedoe_tweets",
  },
  skills: [
    "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Express", 
    "PostgreSQL", "Prisma", "AWS", "Docker"
  ],
  status: "Open to new full-time roles.",
  projects: [
    {
      id: 1,
      title: "TaskFlow Pro",
      description: "A collaborative project management platform with real-time updates and integrated file sharing.",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "DataViz Dashboard",
      description: "Interactive dashboard for visualizing complex financial data using custom d3.js charts.",
      technologies: ["React", "D3.js", "Tailwind CSS", "Recoil"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1517430030132-8409e5178652?fit=crop&w=800&q=80",
    },
    // Add more projects here
  ],
};