import { theme } from "@chakra-ui/react";
import { brandColor } from "../../_config/themeColors";
import { getBrandColor } from "../functions/theme";


export const globalTheme = {
    body: {
        letterSpacing: '2px',
        lineHeight: "1.7",
        backgroundColor: 'gray.300',
    },
    'body::-webkit-scrollbar': {
        paddingTop: '40px',
        width: '10px',
        height: '10px'
    },
    '::-webkit-scrollbar': {
        width: '6px',
        height: '6px'
    },
    '::-webkit-scrollbar-track': {
        background: 'gray.100',
    },
    '::-webkit-scrollbar-thumb': {
        background: getBrandColor(100),
        borderRadius: '5px'
    }
};