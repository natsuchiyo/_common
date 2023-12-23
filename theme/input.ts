import { getClickableColor } from "../functions/theme";


export const InputTheme = {
    baseStyle: {
        field: {
            textAlign: 'center'
        },
    },
    variants: {
        outline: {
            field: {
                height: "auto",
            },
        },
        filled: {
            field: {
                height: "auto",
            },
        },
    },
    defaultProps: {
        focusBorderColor: getClickableColor(400)
    },
};



export const TextAreaTheme = {
    defaultProps: {
        focusBorderColor: getClickableColor(400)
    },
};