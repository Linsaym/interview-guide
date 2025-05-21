import {useState} from "react";

/*
Хук отвечает за загрузку нужных вопросов в зависимости от выбранной категории
*/
export const useQuestions = () => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [questions, setQuestions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadCategoryQuestions = async (slug: string) => {
        if (!slug) {
            setQuestions([]);
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch(`/interview-guide/questions/${slug}.json`);
            const data = await res.json();
            setCurrentCategory(slug);
            setQuestions(data);
        } catch (err) {
            console.error('Ошибка загрузки вопросов:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        currentCategory,
        questions,
        isLoading,
        loadCategoryQuestions
    };
};