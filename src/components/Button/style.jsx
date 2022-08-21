import { styled } from "../../stitches.config";

export const PrimaryButton = styled('button', {
    variants: {
        type: {
            primary: {
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3125rem',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                textDecoration: 'none',
                color: 'white',
                fontSize: '1rem',
                transition: 'all ease-in 100ms',
                border: '1px solid rgba(255, 255, 255, .05)',
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: 'rgba(11, 11, 11, .8)',
                    outline: '2px solid #fff',
                    outlineOffset: '2px',
                }
            },

            secondary: {
                display: 'flex',
                alignItems: 'center',
                gap: '0.3125rem',
                textAlign: 'center',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                backgroundColor: '$pink',
                textDecoration: 'none',
                color: 'white',
                fontSize: '1rem',
                transition: 'all ease-in 100ms',
                border: '1px solid $pink',
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: '$darkPink',
                    outline: '2px solid #fff',
                    outlineOffset: '2px',
                }
            },

            tertiary: {
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3125rem',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                color: 'white',
                fontSize: '1rem',
                transition: 'all ease-in 100ms',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    outline: '2px solid #fff',
                    outlineOffset: '2px',
                }
            },
        }
    }
})