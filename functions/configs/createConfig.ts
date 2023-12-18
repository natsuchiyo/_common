import { ConfigType, CustomConfigType } from "../../types/types";



export const createConfig = (customConfig: CustomConfigType): ConfigType => {

    const defaultConfig = {
        brandLightNum: 400,
        brandDarkNum: 700,
        initialColorMode: 'light',
        headerIcon: null,
        basePath: '',
        headerBgColor: customConfig.brandColor
    };

    return Object.assign(defaultConfig, customConfig);
};