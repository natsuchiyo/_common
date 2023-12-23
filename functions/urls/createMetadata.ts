import { Metadata } from "next";
import { getPageInfo } from "./usePageInfo";
import config from "../../../_config/config";


export const createMetadata = (pagePath: string): Metadata => {


    if (pagePath[0] !== '/') {
        pagePath = '/' + pagePath;
    }

    const pageInfo = getPageInfo(pagePath);


    return {
        title: pageInfo.title,
        description: pageInfo.description,
        openGraph: {
            title: pageInfo.title,
            description: pageInfo.description,
            url: `${config.baseUrl}${pagePath}`,
            siteName: config.websiteLabelName,

            images: {
                url: `${config.baseUrl}/img${pagePath}.webp`,
                width: 900,
                height: 600,
            }
        }
    };
};