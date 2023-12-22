import { getBrandColor } from "../functions/theme";


export const globalTheme = {
    body: {
        letterSpacing: '3px',
        lineHeight: "1.8",
    },
    'body::-webkit-scrollbar': {
        paddingTop: '40px',
        width: '8px',
        height: '8px'
    },
    '::-webkit-scrollbar': {
        width: '5px',
        height: '5px'
    },
    '::-webkit-scrollbar-track': {
        background: 'gray.200',
    },
    '::-webkit-scrollbar-thumb': {
        background: getBrandColor(300),
        borderRadius: '5px'
    }
};