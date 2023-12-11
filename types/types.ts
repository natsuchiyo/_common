import { IconProp } from "@fortawesome/fontawesome-svg-core";



export type CustomConfigType = {
    brandColor: string;
    brandLightNum?: number;
    brandDarkNum?: number;
    accentColor: string;
    clickableColor: string;
    initialColorMode?: 'light' | 'dark';
    websiteName: string;
    domain: string;
    headerIcon?: IconProp;
};

export type InfomationType = {
    date: string;
    text: string;
};


export type ConfigType = Required<CustomConfigType>;

export type TagType = { label: string; color: string; };


export type TagsType = { [key: string]: TagType; };


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