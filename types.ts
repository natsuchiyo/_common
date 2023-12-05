import { ReactNode } from "react";
import { TagNameType } from "../_config/tags";



export type BasePageInfoType = {
    _title: string;
    description: string;
    tags?: TagNameType[];
    relationPageList?: string[];
    isSimulation?: boolean;
};



export type PageInfoType = BasePageInfoType & {
    title: string;
    titleElm: ReactNode;
};



export type TagType = { label: string; color: string; };


export type TagsType = { [key: string]: TagType; };


export type RoutingType = Map<string, PageInfoType>;



export type MdxMetaType = {
    title: string;
    tagNames: any[];
    datepublished: string;
    datemodified: string;
    description?: string;
    usedVersions?: string[];
    private?: boolean;
};



export type BlogMetaType = MdxMetaType & {
    slug: string;
};