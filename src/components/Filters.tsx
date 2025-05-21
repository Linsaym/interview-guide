import {useState, useCallback, memo} from "react";
import clsx from "clsx";

type Level = "junior" | "middle" | "senior";

type Category = {
    slug: string;
    name: string;
};

type FiltersProps = {
    categories: Category[];
    levels?: readonly Level[]; // Делаем уровни опциональными с нормальным типом
    onCategoryChange: (slug: string) => void;
    onSearchChange: (query: string) => void;
    onLevelChange: (level: Level) => void;
    selectedCategory: string;
    searchQuery: string;
    selectedLevel: string;
};

// Общие стили для элементов управления
const inputStyles = {
    base: "w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
    error: "border-2 border-red-500 focus:ring-red-500",
};

const Filters = memo(({
                          categories,
                          levels = ["junior", "middle", "senior"] as const, // Значение по умолчанию
                          onCategoryChange,
                          onSearchChange,
                          onLevelChange,
                          selectedCategory,
                          searchQuery,
                          selectedLevel,
                      }: FiltersProps) => {
    const [error, setError] = useState("");

    // Мемоизированные обработчики
    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onSearchChange(e.target.value);
        },
        [onSearchChange]
    );

    const handleCategorySelect = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const slug = e.target.value;
            if (!slug) {
                setError("Пожалуйста, выберите категорию");
                return;
            }
            setError("");
            onCategoryChange(slug);
        },
        [onCategoryChange]
    );

    const handleLevelChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            // @ts-ignore
            onLevelChange(e.target.value);
        },
        [onLevelChange]
    );

    return (
        <div className="space-y-4">
            {/* Поиск с лейблом для доступности */}
            <div>
                <label className="sr-only" htmlFor="search-input">
                    Поиск по вопросам
                </label>
                <input
                    id="search-input"
                    type="text"
                    placeholder="Поиск по вопросам..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={inputStyles.base}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Выбор категории */}
                <div className="relative">
                    <label className="sr-only" htmlFor="category-select">
                        Выберите категорию
                    </label>
                    <select
                        id="category-select"
                        value={selectedCategory}
                        onChange={handleCategorySelect}
                        className={clsx(
                            inputStyles.base,
                            "appearance-none pr-10", // Добавляем место для кастомной стрелки
                            !selectedCategory && inputStyles.error
                        )}
                        required
                    >
                        <option value="" disabled hidden> {/* Добавляем placeholder */}
                            Выберите категорию
                        </option>
                        {categories.map((cat) => (
                            <option key={cat.slug} value={cat.slug}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    {/* Кастомная стрелка для селекта */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                    {error && (
                        <p role="alert" className="mt-1 text-sm text-red-400 animate-fade-in">
                            {error}
                        </p>
                    )}
                </div>

                {/* Выбор уровня сложности */}
                <div className="relative">
                    <label className="sr-only" htmlFor="level-select">
                        Уровень сложности
                    </label>
                    <select
                        id="level-select"
                        value={selectedLevel}
                        onChange={handleLevelChange}
                        className={clsx(inputStyles.base, "appearance-none pr-10")}
                    >
                        <option value="">Все уровни</option>
                        {levels.map((level) => (
                            <option key={level} value={level}>
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                            </option>
                        ))}
                    </select>
                    {/* Кастомная стрелка для селекта */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
});

export {Filters};