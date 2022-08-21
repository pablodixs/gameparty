import { globalCss, styled } from "@stitches/react"

export const Container = styled('div', {
    display: 'flex',
    maxWidth: '1280px',
    margin: '100px auto',
})

export const globalStyles = globalCss({
    '*': {
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        fontFamily: "'Figtree', sans-serif",
        color: 'white',
    },

    'a': {
        color: 'white',
        textDecoration: 'none',
    },

    'body': {
        backgroundColor: '$black',
        color: 'white',
    },
})

export const AltMain = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '2rem'
})