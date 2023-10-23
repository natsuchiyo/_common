import { brandColor } from "../../_config/themeColors";

export const SelectTheme = {
    baseStyle: {
        field: {
            textAlign: 'center',
            lineHeight: "inherit",
            paddingBottom: 0
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