import {useState, useMemo, useCallback, useEffect} from 'react';
import {QuestionCard} from './components/QuestionCard';
import {Filters} from './components/Filters';
import {useQuestions} from "./hooks/useQuestions";
import {get_random} from "./helpers";
import type {Question, Category, Level} from "./types";

export default function App() {
    const {questions, isLoading, loadCategoryQuestions} = useQuestions();

    const categories: Category[] = useMemo(() => [
        {slug: 'vue', name: 'Vue.js'},
        {slug: 'react', name: 'React'},
        {slug: 'js', name: 'JavaScript'},
        {slug: 'php', name: 'PHP'},
        {slug: 'laravel', name: 'Laravel'},
    ], []);

    const [selectedCategory, setSelectedCategory] = useState<Category['slug']>(
        () => get_random(categories).slug
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLevel, setSelectedLevel] = useState<Level | "">("");

    const filteredQuestions = useMemo(() => {
        return questions.filter((q: Question) => {
            const searchLower = searchQuery.toLowerCase();
            const matchesSearch = q.question.toLowerCase().includes(searchLower) ||
                q.answer.toLowerCase().includes(searchLower);
            const matchesCategory = q.category === selectedCategory;
            const matchesLevel = selectedLevel ? q.level === selectedLevel : true;

            return true;
            return matchesSearch && matchesCategory && matchesLevel;
        });
    }, [questions, searchQuery, selectedCategory, selectedLevel]);

    const handleCategoryChange = useCallback((slug: Category['slug']) => {
        setSelectedCategory(slug);
        loadCategoryQuestions(slug);
    }, [loadCategoryQuestions]);

    useEffect(() => {
        loadCategoryQuestions(selectedCategory);
    }, []);

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Interview Guide
                </h1>
                <p className="mt-2 text-gray-400">Подготовка к собеседованиям для разработчиков</p>
            </header>

            <Filters
                categories={categories}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
                selectedLevel={selectedLevel}
                onSearchChange={setSearchQuery}
                onLevelChange={setSelectedLevel}
                onCategoryChange={handleCategoryChange}
            />

            <main className="my-5 min-h-[400px]">
                {!selectedCategory && (
                    <div className="p-6 bg-gray-800 rounded-lg text-center text-gray-400">
                        Выберите категорию для просмотра вопросов
                    </div>
                )}

                {isLoading && (
                    <div className="animate-pulse space-y-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-24 bg-gray-700 rounded-lg"/>
                        ))}
                    </div>
                )}

                {!isLoading && selectedCategory && (
                    <div className="grid gap-6">
                        {filteredQuestions.length > 0 ? (
                            filteredQuestions.map(q => (
                                <QuestionCard key={q.id} {...q} />
                            ))
                        ) : (
                            <div className="p-6 bg-gray-800 rounded-lg text-center text-gray-400">
                                Ничего не найдено по вашему запросу
                            </div>
                        )}
                    </div>
                )}
            </main>

            <footer className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Interview Guide. Открытый проект на GitHub.
            </footer>
        </div>
    );
}