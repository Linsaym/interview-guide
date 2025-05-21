## 🎣 Кастомные хуки

### `useQuestions`

**Назначение**: Управление фильтрацией вопросов.  
**Функционал**:
(дописать надо, всё поменял)

- Поиск по тексту вопроса/ответа
- Фильтрация по категориям и уровню сложности
- Мемоизация отфильтрованных данных

```ts
const {filteredQuestions, setSearchQuery} = useQuestions(initialQuestions);
```

---

### `useLocalProgress`

**Назначение**: Локальное сохранение прогресса изучения вопросов.  
**Функционал**:

- Сохранение статуса "Пройдено" в `localStorage`
- Автоматическая синхронизация при изменении

```ts
const {isCompleted, toggleCompletion} = useLocalProgress(questionId);
```

---

### `useQuizMode`

**Назначение**: Логика для режима тестирования.  
**Функционал**:

- Таймер обратного отсчёта
- Навигация между вопросами
- Подсчёт очков

```ts
const {currentQuestion, timeLeft, nextQuestion} = useQuizMode(questions);
```

---

### `useDebouncedSearch`

**Назначение**: Оптимизация поиска с задержкой.  
**Функционал**:

- Устранение дребезга при вводе
- Задержка по умолчанию: 300 мс

```ts
const debouncedSearch = useDebouncedSearch(rawSearchQuery);
```

---

### `useKeyPress`

**Назначение**: Обработка нажатий клавиш.  
**Функционал**:

- Определение состояния конкретной клавиши
- Поддержка комбинированных клавиш (Ctrl/Cmd + Key)

```ts
const isPressed = useKeyPress('ArrowRight');
```

---

### `usePersistedState`

**Назначение**: Синхронизация состояния с LocalStorage.  
**Функционал**:

- Автосохранение при изменении
- Восстановление состояния при загрузке

```ts
const [theme, setTheme] = usePersistedState('app-theme', 'dark');
```

---

## 🗂️ Структура

```
src/
  hooks/
    useQuestions.ts
    useLocalProgress.ts
    useQuizMode.ts
    useDebouncedSearch.ts
    useKeyPress.ts
    usePersistedState.ts
```

## 🚀 Возможные улучшения

1. Добавить обработку ошибок в `useQuizMode`
2. Реализовать `useServerSync` для облачного сохранения прогресса
3. Создать `useVoiceSearch` для голосового ввода