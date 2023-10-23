import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react";
import { ButtonTheme } from "./button";
import { globalTheme } from "./global";
import { InputTheme, TextAreaTheme } from "./input";
import { SelectTheme } from "./select";
import { TableTheme } from "./table";
import { fontsTheme } from "./fonts";
import { accentColor, brandColor, clickableColor, colorScheme } from "../../_config/themeColors";



export const customTheme = extendTheme(

    withDefaultColorScheme({ colorScheme: colorScheme }),

    {
        colors: {
            mainLight: brandColor[400],
            mainDark: brandColor[700],
            button: clickableColor[500],
            accent: accentColor[500],
            link: clickableColor[600],
            warning: theme.colors.red[500],
            subtext: theme.colors.gray[600],
        },

        breakpoints: {
            sm: '500px',
            md: '728px',
            lg: '1028px',
            xl: '1279px',
            '2xl': '1530px',
        },

        zIndices: {
            // overlayよりは低い値にする
            layout: 1250,
        },

        config: {
            initialColorMode: 'light',
            useSystemColorMode: false,
        },

        // この方法では効かないのでbodyにclassnameを付けた
        fonts: fontsTheme,

        styles: { global: globalTheme },

        components: {
            Button: ButtonTheme,
            Input: InputTheme,
            Select: SelectTheme,
            Table: TableTheme,
            Textarea: TextAreaTheme
        }
    });
