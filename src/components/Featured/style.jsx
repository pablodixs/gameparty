import { styled } from '../../stitches.config'

export const FeatContainer = styled('div', {
    width: '100%',
    height: '450px',
    transition: 'all 200ms ease',
    backgroundColor: '$darkGrey',
    borderRadius: '5px',

    '&:hover': {
        opacity: '.8',
        transform: 'scale(1.01)'
    },

    '&:active': {
        transform: 'scale(1)',
    },

    '& h1': {
        fontSize: '28px',
        margin: '1rem 0 0 2rem',
    },

    '& p': {
        margin: '.5rem 1rem 0 2rem',
        color: 'grey'
    },
})

export const FeatImage = styled('div', {
    position: 'relative',
    width: '100%',
    height: '350px',
    background: 'url("https://image.api.playstation.com/vulcan/ap/rnd/202206/0719/yOCVLjinZ17BVrZwL0z1a6HV.png") center no-repeat',
    backgroundSize: 'cover',
    borderRadius: '5px 5px 0 0',
})

export const FeatLogo = styled('img', {
    position: 'absolute',
    width: '300px',
    height: 'auto',
    objectFit: 'contain',
    bottom: '0',
    margin: '2rem',
})