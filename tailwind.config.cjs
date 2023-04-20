/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            signature: ['Great Vibes'],
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
}
