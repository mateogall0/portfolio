export type Experience = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
  type: number;
};

export const experience: Experience[] = [
  {
    id: "1",
    role: "Backend Developer",
    company: "Bit-A",
    start: "2025",
    end: "Present",
    description: "Designed, developed, deployed, and maintained backend services.",
    type: 1,
  },

  {
    id: "2",
    role: "Developer",
    company: "Freelance",
    start: "2023",
    end: "2025",
    description: "Built small web apps and APIs for clients.",
    type: 1,
  },

  {
    id: "3",
    role: "Machine Learning Engineering",
    company: "Holberton School",
    start: "2023",
    end: "2024",
    description: "Specialized in deep AI techniques.",
    type: 0,
  },

  {
    id: "4",
    role: "Software development",
    company: "Holberton School",
    start: "2022",
    end: "2023",
    description: "Learned the fundamentals of Software Engineering.",
    type: 0,
  },

  {
    id: "5",
    role: "Information Technology",
    company: "UTU",
    start: "2019",
    end: "2021",
    description: "Studied the fundamentals of software, hardware, and electronics systems.",
    type: 0,
  },

];
