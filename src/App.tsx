import {useState} from 'react';
import questions from './data/questions.json';
import {QuestionCard} from './components/QuestionCard';
import {Filters} from './components/Filters';
import type {Question} from './types';

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    // Фильтрация вопросов
    const filteredQuestions = questions.filter((q: Question) => {
        const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? q.category === selectedCategory : true;
        const matchesLevel = selectedLevel ? q.level === selectedLevel : true;

        return matchesSearch && matchesCategory && matchesLevel;
    });

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            {/* Хедер */}
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Interview Guide
                </h1>
                <p className="mt-2 text-gray-400">Подготовка к собеседованиям по фронтенду</p>
            </header>

            {/* Фильтры */}
            <Filters
                onSearchChange={setSearchQuery}
                onCategoryChange={setSelectedCategory}
                onLevelChange={setSelectedLevel}
            />

            {/* Счётчик вопросов */}
            <div className="mb-6 text-gray-400">
                Найдено вопросов: {filteredQuestions.length}
            </div>

            {/* Список вопросов */}
            <div className="grid gap-6 animate-fade-in">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((q) => (
                        <QuestionCard key={q.id} {...q} />
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        Ничего не найдено. Попробуйте изменить параметры поиска.
                    </div>
                )}
            </div>

            {/* Футер */}
            <footer className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Interview Guide. Открытый проект на GitHub.
            </footer>
        </div>
    );
}