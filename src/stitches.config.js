import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
    theme: {
        colors: {
            black: 'rgb(15, 15, 15)',
            darkGrey: 'rgb(26, 26,26)',
            pink: '#F746B3',
            darkPink: '#ce3995',
            orange: '#FCB64C',
        },
    },
    
    media: {
            bp1: '(min-width: 640px)',
            bp2: '(min-width: 768px)',
            bp3: '(min-width: 1024px)',
    },

})
