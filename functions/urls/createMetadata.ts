import { Metadata } from "next";
import { customTheme } from "../../theme/theme";
import { getPageInfo } from "./usePageInfo";


export const createMetadata = (pagePath: string): Metadata => {

    const pageInfo = getPageInfo(pagePath);

    return {
        title: pageInfo.title,
        description: pageInfo.description,
    };
};