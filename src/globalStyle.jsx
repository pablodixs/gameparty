import { globalCss } from "@stitches/react"

export const globalStyles = globalCss({
    '@font-face': {
        fontFamily: 'Figtree',
        fontWeight: '400',
        src: 'url("https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap")',
    },

    '*': {
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        fontFamily: '"Figtree", sans-serif',
    },

    '.container': {
        maxWidth: '1200px',
        margin: '0 auto',
    },

})