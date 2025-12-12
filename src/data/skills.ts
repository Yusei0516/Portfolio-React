export type SkillCategory = {
    name: string;
    items: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        name: "Backend",
        items: ["Python", "Django", "Flask"],
    },
    {
        name: "Infrastructure / Cloud",
        items: ["AWS (EC2, RDS, VPC, ALB, etc.)", "Docker", "Nginx", "Gunicorn"],
    },
    {
        name: "Database",
        items: ["MySQL"],
    },
    {
        name: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        name: "Tools",
        items: ["Git", "GitHub", "Linux"],
    },
];