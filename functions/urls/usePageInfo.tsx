import { usePathname } from "next/navigation";
import pageInfos from "../../../_config/pageInfos";
import { convertUrlToPageName, createPageInfo } from "./functions";



export const usePageInfo = () => {

    return getPageInfo(usePathname());
};


export const getPageInfo = (url: string) => {

    return pageInfos.get(convertUrlToPageName(url)) || notFoundPageInfo;
};


const notFoundPageInfo = createPageInfo({
    _title: 'ページが見つかりません',
    description: "ページが見つかりません",
});