import { styled } from '../../stitches.config'

export const TopHeader = styled('header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
    padding: '1rem 0',
    width: '1280px',
    margin: '0 auto',
})

export const Logo = styled('div', {
    background: 'url(https://pablodixs.github.io/projectGameparty/assets/gameparty_logo.svg) center no-repeat',
    backgroundSize: 'contain',
    width: '130px',
    height: '25px',
})

export const HeaderContainer = styled('div', {
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(15, 15, 15, 0.75)',
    backdropFilter: 'blur(20px)',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '100',
})

export const Gradient = styled('div', {
    height: '2px',
    width: '100%',
    backgroundImage: 'linear-gradient(90deg, $pink 0%, $orange 100%)'
})

export const SearchBar = styled('input', {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '500px',
    borderRadius: '0.3em',
    padding: '0.5rem 1rem',
    transition: 'all ease-in-out 200ms',
    outlineOffset: '2px',
    outline: '2px solid transparent',
    fontSize: '1rem',
    border: '1px solid rgba(255, 255, 255, .05)',
    marginRight: '1rem',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },

    '&:focus': {
        width: '600px',
        outline: '2px solid #fff',
        outlineOffset: '2px',
    },

    '&.none': {
        display: 'none'
    },
})

export const SearchContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
})