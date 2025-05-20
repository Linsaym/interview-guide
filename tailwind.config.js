/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: "#1a202c",
                    text: "#e2e8f0",
                    primary: "#4299e1",
                    card: "#2d3748",
                    accent: "#5a67d8",
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0', transform: 'translateY(-5px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // Для стилизации форм
        require('tailwindcss-animate'), // Поддержка анимаций
    ],
}