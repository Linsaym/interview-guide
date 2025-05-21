export type Question = {
    id: number;
    question: string;
    answer: string;
    category: string;
    level: string; //'junior' | 'middle' | 'senior';
    tags: string[];
};
export type Level = "junior" | "middle" | "senior";

export type Category = {
    slug: string;
    name: string;
};