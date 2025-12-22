export type Experience = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
  type: string;
};

export const experience: Experience[] = [
  {
    id: "1",
    role: "Backend Developer",
    company: "Bit-A",
    start: "2023",
    end: "Present",
    description: "Designed, developed, deployed, and maintained backend services.",
    type: "Worker",
  },
  {
    id: "2",
    role: "Developer",
    company: "Freelance",
    start: "2021",
    end: "2023",
    description: "Built small web apps and APIs for clients.",
    type: "Worker",
  },
  {
    id: "3",
    role: "Machine Learning Engineering",
    company: "Holberton School",
    start: "2023",
    end: "2024",
    description: "Specialized in deep AI techniques.",
    type: "Student",
  },

];
