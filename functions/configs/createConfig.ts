import { ConfigType, CustomConfigType } from "../../types/types";
import { isProduction } from "../../values/constants";



export const createConfig = (customConfig: CustomConfigType): ConfigType => {

    const defaultConfig = {
        brandLightNum: 400,
        brandDarkNum: 700,
        initialColorMode: 'light',
        headerIcon: null,
        basePath: '',
        headerBgColor: customConfig.brandColor,
        baseUrl: isProduction ? `https://${customConfig.domain}` : 'http://localhost:3000'
    };

    return Object.assign(defaultConfig, customConfig);
};