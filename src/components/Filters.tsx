type FiltersProps = {
    onSearchChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    onLevelChange: (value: string) => void;
};

const categories = ['React', 'Vue', 'Laravel', 'PHP', 'JavaScript'];
const levels = ['junior', 'middle', 'senior'];

export const Filters = ({
                            onSearchChange,
                            onCategoryChange,
                            onLevelChange
                        }: FiltersProps) => {
    return (
        <div className="bg-gray-800/50 p-5 rounded-xl mb-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Поиск */}
                <input
                    type="text"
                    placeholder="Поиск по вопросам..."
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="col-span-2 px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />

                {/* Категория */}
                <select
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="">Все категории</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                {/* Уровень */}
                <select
                    onChange={(e) => onLevelChange(e.target.value)}
                    className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                    <option value="">Все уровни</option>
                    {levels.map((lvl) => (
                        <option key={lvl} value={lvl}>{lvl}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};