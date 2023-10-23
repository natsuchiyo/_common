import { brandColor } from "../../_config/themeColors";

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
        focusBorderColor: brandColor[300],
    },
};

export const TextAreaTheme = {
    defaultProps: {
        focusBorderColor: brandColor[300],
    },
};