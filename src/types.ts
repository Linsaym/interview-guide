export type Question = {
    id: number;
    question: string;
    answer: string;
    category: string;
    level: string; //'junior' | 'middle' | 'senior';
    tags: string[];
};