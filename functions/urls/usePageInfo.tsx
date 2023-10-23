import { usePathname } from "next/navigation";
import { notFoundPageInfo, pageInfoList } from "../../../_config/urls";
import { convertUrlToPageName } from "./functions";



export const usePageInfo = () => {

    return getPageInfo(usePathname());
};


export const getPageInfo = (url: string) => {

    return pageInfoList.get(convertUrlToPageName(url)) || notFoundPageInfo;
};

