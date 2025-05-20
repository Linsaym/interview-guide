/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Указываем пути ко всем файлам с классами Tailwind
    ],
    theme: {
        extend: {
            colors: { // Кастомные цвета (пример)
                dark: {
                    bg: "#1a202c",
                    text: "#e2e8f0",
                    primary: "#4299e1",
                    card: "#2d3748",
                }
            }
        },
    },
    plugins: [], // Плагины (например, @tailwindcss/forms)
}