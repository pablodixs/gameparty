import { globalCss } from "@stitches/react"

export const globalStyles = globalCss({
    '*': {
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        fontFamily: "'Figtree', sans-serif",
    },

    'body': {
        backgroundColor: '$black',
    },

    '.container': {
        maxWidth: '1200px',
        margin: '0 auto',
    },

})