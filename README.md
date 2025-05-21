# Interview Guide - Гайд по подготовке к собеседованиям

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Вы можете протестировать весь функционал
тут: [https://linsaym.github.io/interview-guide](https://linsaym.github.io/interview-guide)

Проект представляет собой интерактивный гайд с ответами на популярные вопросы для собеседований по разработке (Laravel,
Vue, React, JavaScript, PHP, алгоритмы).

## 🌟 Особенности

- 📚 База вопросов с ответами в формате JSON
- 🔍 Фильтрация по темам и уровню сложности
- ⏱ Режим тестирования с таймером

## 🛠 Технологии

- **Frontend**: React, TypeScript
- **Стили**: Tailwind CSS
- **Билд**: Vite + SWC

## 🚀 Быстрый старт

1. Клонируйте репозиторий:

```bash
    git clone https://github.com/ваш-username/interview-guide.git
    cd interview-guide
```

2. Установите зависимости:

```bash
  npm install
```

3. Запустите dev-сервер:

```bash
  npm run dev
```

4. Для production-сборки:

```bash
  npm run build
```

## 🌍 Деплой на GitHub Pages

Проект автоматически деплоится при пуше в ветку `main`:

```bash
  npm run deploy
```

## 📂 Структура проекта

```
project-root/
├── public/
│   ├── questions/       # Вопросы по категориям
│   │   ├── react.json   # Вопросы по React
│   │   ├── vue.json     # Вопросы по Vue
│   │   └── ...
│   └── answers/         # Ответы на вопросы
│       ├── 101.json    
│       ├── 102.json    
│       └── ...
└── src/
    ├── components/      # React-компоненты
    ├── hooks/           # Кастомные хуки
    ├── styles/          # Глобальные стили
    ├── App.tsx          # Основной компонент
    └── main.tsx         # Точка входа
```

## 🤝 Как помочь проекту

1. Добавляйте изменения открывая Pull Request
2. Сообщайте об ошибках в Issues
3. Предложите улучшения интерфейса

**Сайт**: [https://linsaym.github.io/interview-guide](https://linsaym.github.io/interview-guide)