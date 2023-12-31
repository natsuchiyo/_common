import { getClickableColor } from "../functions/theme";

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
        focusBorderColor: getClickableColor(400),
    },
};