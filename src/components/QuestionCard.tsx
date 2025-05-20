import type {Question} from '../types';

export const QuestionCard = ({
                                 question,
                                 answer,
                                 category,
                                 level,
                                 tags = [] // Дефолтное значение для tags
                             }: Question) => {
    return (
        <div
            className="p-6 mb-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
            <div className="flex flex-wrap gap-2 mb-4">
                {/* Бейдж категории */}
                <span className="px-3 py-1 text-sm font-medium bg-blue-900/50 text-blue-300 rounded-full">
          {category}
        </span>

                {/* Бейдж уровня */}
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    level.toLowerCase() === 'junior' ? 'bg-green-900/50 text-green-300' :
                        level.toLowerCase() === 'middle' ? 'bg-yellow-900/50 text-yellow-300' :
                            'bg-red-900/50 text-red-300'
                }`}>
          {level}
        </span>
            </div>

            {/* Вопрос */}
            <h3 className="mb-3 text-xl font-bold text-white">{question}</h3>

            {/* Ответ */}
            <div className="p-4 bg-gray-700/50 rounded-lg">
                <p className="text-gray-200 leading-relaxed">{answer}</p>
            </div>

            {/* Теги (только если они есть) */}
            {tags && tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-gray-700 text-gray-400 rounded"
                        >
              #{tag}
            </span>
                    ))}
                </div>
            )}
        </div>
    );
};